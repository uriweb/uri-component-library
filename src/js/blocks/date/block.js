const { __ } = wp.i18n;
const {
	registerBlockType,
} = wp.blocks;

const {
	PanelBody,
	PanelRow,
	withNotices,
	BaseControl,
	TextControl,
	Button,
	ButtonGroup,
	ToggleControl,
	DatePicker,
} = wp.components;

const {
	AlignmentToolbar,
	PlainText,
	RichText,
	MediaPlaceholder,
	MediaUpload,
	MediaUploadCheck,
	InspectorControls,
	BlockControls,
	Toolbar,
	BlockAlignmentToolbar,
} = wp.blockEditor;

const customIcon = () => {
	return (
		<img
			width="20"
			height="20"
			className="dashicon"
			src={ ( URI_CL_URL + 'i/icons/date.png' ) }
			alt="date"
		/>
	);
};

const classNames = ( attributes, isSelected ) => {
	let classes = 'cl-date';
	if ( !! attributes.className ) {
		// @todo this gets automatically applied to wrapper... remove it?
		classes += ' ' + attributes.className;
	}
	if ( !! isSelected ) {
		classes += ' selected';
	}
	if ( !! attributes.color ) {
		classes += ' cl-date-' + attributes.color;
	}
	if ( !! attributes.float ) {
		classes += ' ' + attributes.float;
	}
	return classes;
};

registerBlockType( 'uri-cl/date', {

	title: __( 'Date' ),
	icon: customIcon,
	category: 'cl-blocks',

	attributes: {
		date: {
			type: 'string',
		},
		caption: {
			type: 'string',
		},
		color: {
			type: 'string',
		},
		float: {
			type: 'string',
		},
		show_year: {
			type: 'bool',
		},
	},

	edit( { attributes, className, setAttributes, isSelected } ) {
		// Generate editor view of the card itself
		const createContentEditForm = () => {
			const classes = classNames( attributes, isSelected );

			return (
				<div className="container">
					<div className={ classes }>
						<div>Date placeholder</div>
					</div>
				</div>
			);
		};

		// Generate block controls for alignment, etc
		const createBlockControls = () => {
			return (
				<BlockControls key="controls">
					<BlockAlignmentToolbar
						value={ attributes.float }
						onChange={ ( content ) => setAttributes( { float: content } ) }
					/>
				</BlockControls>
			);
		};

		// Generate sidebar inspector controls for other custom attributes
		const createInspectorControls = () => {
			return (
				<InspectorControls>
					<PanelBody>
						<PanelRow>
							<BaseControl
								label={ __( 'Date Color' ) }
								id="date-color"
							>
								<ButtonGroup aria-label={ __( 'Date Color' ) }>
									{ [ 'blue', 'red', 'grey' ].map( ( value ) => {
										const capitalizedValue = value.charAt( 0 ).toUpperCase() + value.slice( 1 );
										const key = ( 'default' === value ) ? '' : value;
										const color = ( undefined === attributes.color ) ? '' : attributes.color;
										const selected = ( key === color );

										return (
											<Button
												key={ key }
												isSecondary
												isPrimary={ selected }
												aria-pressed={ selected }
												onClick={ ( content ) => setAttributes( { color: key } ) }
											>
												{ capitalizedValue }
											</Button>
										);
									} ) }
								</ButtonGroup>
							</BaseControl>
						</PanelRow>

						<PanelRow>
							<DatePicker
								label="Date"
								currentDate={ attributes.date }
								onChange={ ( date ) => setAttributes( { date } ) }
							/>
						</PanelRow>

						<PanelRow>
							<ToggleControl
								label="Show year"
								checked={ attributes.show_year }
								onChange={ ( content ) => setAttributes( { show_year: content } ) }
							/>
						</PanelRow>

					</PanelBody>
				</InspectorControls>
			);
		};

		// Send the editor interfaces to the view
		return ( [
			createBlockControls(),
			createInspectorControls(),
			createContentEditForm(),
		] );
	}, // End edit

} );
