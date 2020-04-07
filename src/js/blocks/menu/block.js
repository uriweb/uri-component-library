const { __ } = wp.i18n;
const { registerBlockType } = wp.blocks;
const {
	PlainText,
	RichText,
	URLInput,
	InspectorControls,
	BlockControls,
	Toolbar,
	BlockAlignmentToolbar,
} = wp.blockEditor;
const {
	Dashicon,
	PanelBody,
	PanelRow,
	BaseControl,
	TextControl,
	Button,
	ButtonGroup,
} = wp.components;

const customIcon = () => {
	return (
		<img
			width="20"
			height="20"
			className="dashicon"
			src={ ( URI_CL_URL + 'i/icons/menu.png' ) }
			alt="button"
		/>
	);
};

const classNames = ( attributes, isSelected ) => {
	let classes = 'cl-menu';
	if ( !! isSelected ) {
		classes += ' selected';
	}

	return classes;
};

registerBlockType( 'uri-cl/menu', {

	title: __( 'Menu' ),
	icon: customIcon,
	category: 'cl-blocks',
	attributes: {
		name: {
			type: 'string',
		},
		depth: {
			type: 'number',
		},
		showtitle: {
			type: 'bool',
		},
		title: {
			type: 'string',
		},
	},

	edit( { attributes, className, setAttributes, isSelected } ) {
		// Generate editor view of the button itself
		const createContentEditForm = () => {
			// Set the classnames
			const classes = classNames( attributes, isSelected );

			// Set the tooltip
			let title = '';
			if ( !! attributes.title ) {
				title = ': ' + attributes.title;
			}
			return (
				<div className="container cl-menu-block-form">
					<div className={ classes } title={ title }>
						Menu placeholder{ title }
					</div>
				</div>
			);
		};

		// Generate sidebar inspector controls for other custom attributes
		const createInspectorControls = () => {
			return (
				<InspectorControls>
					<PanelBody>

						<PanelRow>
							<TextControl
								label="Menu name"
								onChange={ ( content ) => setAttributes( { name: content } ) }
								value={ attributes.name }
								className="meta-field"
							/>
						</PanelRow>

						<PanelRow>
							<TextControl
								label="Title"
								onChange={ ( content ) => setAttributes( { title: content } ) }
								value={ attributes.title }
								className="meta-field"
							/>
						</PanelRow>

					</PanelBody>
				</InspectorControls>
			);
		};

		// Send the editor interfaces to the view
		return ( [
			createInspectorControls(),
			createContentEditForm(),
		] );
	}, // End edit

} );
