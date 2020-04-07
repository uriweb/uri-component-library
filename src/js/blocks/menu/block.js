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
	RangeControl,
	ToggleControl,
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
			default: 1,
		},
		showtitle: {
			type: 'bool',
			default: false,
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

			let name = '';
			if ( !! attributes.name ) {
				name = ': ' + attributes.name;
			}

			let title = '';
			if ( !! attributes.title && attributes.showtitle ) {
				title = <span className="cl-menu-toggle"> { attributes.title } </span>;
			}

			return (
				<div className="container cl-menu-block-form">
					<div className={ classes }>
						{ title }
						<div className="cl-menu-placeholder">Menu placeholder{ name }</div>
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
								label={ __( 'Menu name' ) }
								onChange={ ( content ) => setAttributes( { name: content } ) }
								value={ attributes.name }
								className="meta-field"
							/>
						</PanelRow>

						<PanelRow>
							<TextControl
								label={ __( 'Title' ) }
								onChange={ ( content ) => setAttributes( { title: content } ) }
								value={ attributes.title }
								className="meta-field"
							/>
						</PanelRow>

						<PanelRow>
							<ToggleControl
								label={ __( 'Show title on desktop' ) }
								help={ __( 'Titles are always shown on mobile' ) }
								checked={ attributes.showtitle }
								onChange={ ( content ) => setAttributes( { showtitle: content } ) }
							/>
						</PanelRow>

						<PanelRow>
							<RangeControl
								label={ __( 'Depth' ) }
								max={ 2 }
								min={ 1 }
								onChange={ ( depth ) => setAttributes( { depth } ) }
								value={ attributes.depth }
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
