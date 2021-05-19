const { __ } = wp.i18n;
const { registerBlockType } = wp.blocks;
const {
	Dashicon,
	Button,
	PanelBody,
	PanelRow,
	Toolbar,
	ToolbarButton,
	withNotices,
	BaseControl,
	TextControl,
	ButtonGroup,
	FocalPointPicker,
	ToggleControl,
	ColorPicker,
} = wp.components;
const {
	BlockControls,
	InspectorControls,
	BlockAlignmentToolbar,
	MediaPlaceholder,
	MediaUpload,
	MediaUploadCheck,
	AlignmentToolbar,
	RichText,
	PlainText,
	URLInput,
} = wp.blockEditor;

// @see https://github.com/WordPress/gutenberg/tree/master/packages/block-library/src

const ALLOWED_MEDIA_TYPES = [ 'image' ];

const customIcon = () => {
	return (
		<img
			width="20"
			height="20"
			className="dashicon"
			src={ ( URI_CL_URL + 'i/icons/abstract.svg' ) }
			alt="button"
		/>
	);
};

registerBlockType( 'uri-cl/abstract', {

	title: __( 'Abstract' ),
	icon: customIcon,
	category: 'cl-blocks',
	description: __( 'Use abstracts to introduce content in a visual mannor, especially when suitable photography is not available.' ),
	example: {
		attributes: {
			title: __( 'A grand vision' ),
			body: __( 'Set the groundwork for the story, and entice readers to explore fully.' ),
			button: __( 'Continue' ),
			mediaID: true,
			img: URI_CL_URL + 'i/example.jpg',
		},
	},

	// The mediaID is what goes into the shortcode for front-end display
	// the img and alt are for editor placeholders
	// the mediaHeight and mediaWidth are for the focal point picker component
	attributes: {
		title: {
			type: 'string',
		},
		body: {
			type: 'string',
		},
		link: {
			type: 'string',
		},
		mediaID: {
			type: 'number',
		},
		img: {
			type: 'string',
		},
		alt: {
			type: 'string',
		},
		button: {
			type: 'string',
		},
		background: {
			type: 'string',
			default: '#002147',
		},
		bgcolorpicker: {
			type: 'string',
			default: '#1b5da9',
		},
		bgcss: {
			type: 'string',
		},
		style: {
			type: 'string',
			default: 'bars',
		},
		invert_accessibility_controls: {
			type: 'boolean',
		},
	},

	edit( { attributes, className, setAttributes, isSelected } ) {
		// Generate the image or the add image section
		const getImageButton = ( openEvent ) => {
			if ( attributes.mediaID ) {
				return (
					<img
						src={ attributes.img }
						alt={ attributes.alt }
						className="image"
					/>
				);
			}
			return (
				<MediaPlaceholder
					icon={ 'format-image' }
					className={ className }
					labels={ {
						title: 'Add an image',
						instructions: __( 'Drag an image, upload a new one or select a file from your library.' ),
					} }
					onSelect={ ( media ) => {
						setAttributes( {
							alt: media.alt,
							img: media.url,
							mediaID: media.id,
						} );
					}
					}
					accept="image/*"
					allowedTypes={ ALLOWED_MEDIA_TYPES }
				/>
			);
		};

		let meta;
		if ( !! isSelected ) {
			meta = (
				<form
					className="meta"
					onSubmit={ ( event ) => event.preventDefault() }
				>
					<fieldset className="row link">
						<label title="Links to:"><Dashicon icon="admin-links" /></label>
						<URLInput
							value={ attributes.link }
							onChange={ ( content ) => setAttributes( { link: content } ) }
							placeholder="https://www.uri.edu/"
							className="meta-field"
						/>
					</fieldset>
				</form>
			);
		}

		// Generate editor view of the abstract itself
		const createContentEditForm = () => {
			let classes = 'cl-abstract';
			if ( !! attributes.className ) {
				classes += ' ' + attributes.className;
			}
			if ( !! attributes.style ) {
				classes += ' ' + attributes.style;
			}
			if ( !! isSelected ) {
				classes += ' selected';
			}

			attributes.background = attributes.bgcolorpicker;
			if ( !! attributes.bgcss ) {
				attributes.background = attributes.bgcss;
			}

			return (
				<div className="container cl-abstract-block-form">
					<div className={ classes } style={ { background: attributes.background } }>
						<div className="cl-abstract-backdrop-preview"></div>
						<div className="cl-abstract-proper has-img">
							<div className="cl-abstract-content-wrapper">
								<div className="cl-abstract-img">
									<div className="img-wrapper">
										<MediaUpload
											onSelect={ ( media ) => {
												setAttributes( {
													alt: media.alt,
													img: media.url,
													mediaID: media.id,
												} );
											}
											}
											type="image"
											value={ attributes.mediaID }
											render={ ( { open } ) => getImageButton( open ) }
										/>
									</div>
								</div>
								<div className="cl-abstract-text">
									<h1><PlainText
										onChange={ ( content ) => setAttributes( { title: content } ) }
										value={ attributes.title }
										placeholder={ __( 'Your abstract title' ) }
										keepPlaceholderOnFocus={ true }
									/></h1>
									<p><RichText
										onChange={ ( content ) => setAttributes( { body: content } ) }
										value={ attributes.body }
										placeholder={ __( 'Your abstract text' ) }
										keepPlaceholderOnFocus={ true }
									/></p>
									<span className="cl-button">
										<PlainText
											onChange={ ( content ) => setAttributes( { button: content } ) }
											value={ attributes.button }
											placeholder={ __( 'Your button text' ) }
											keepPlaceholderOnFocus={ true }
										/></span>
									{ meta }
								</div>
							</div>
						</div>
					</div>
				</div>
			);
		};

		// Generate block controls for alignment, etc
		const createBlockControls = () => {
			return (
				<BlockControls key="controls">

					{ !! attributes.img && (
						<MediaUploadCheck>
							<Toolbar label="Choose media">
								<MediaUpload
									onSelect={ ( media ) => {
										setAttributes( {
											alt: media.alt,
											img: media.url,
											mediaID: media.id,
										} );
									}
									}
									allowedTypes={ ALLOWED_MEDIA_TYPES }
									value={ attributes.mediaID }
									render={ ( { open } ) => (
										<ToolbarButton
											className="components-toolbar__control"
											label={ __( 'Edit media' ) }
											icon="edit"
											onClick={ open }
										/>
									) }
								/>
							</Toolbar>
						</MediaUploadCheck>
					) }
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
								label={ __( 'Format' ) }
								help={ __( 'To increase performance, abstract previews will appear simplified in the editor window.' ) }
								id="abstract-format"
							>
								<ButtonGroup aria-label={ __( 'Abstract Format' ) }>
									{ [ 'bars', 'discs', 'lattice', 'honeycomb' ].map( ( value ) => {
										const capitalizedValue = value.charAt( 0 ).toUpperCase() + value.slice( 1 );
										const key = ( 'default' === value ) ? '' : value;
										const format = ( undefined === attributes.style ) ? '' : attributes.style;
										const selected = ( key === format );

										return (
											<Button
												key={ key }
												isSecondary
												isPrimary={ selected }
												aria-pressed={ selected }
												onClick={ ( content ) => setAttributes( { style: key } ) }
											>
												{ capitalizedValue }
											</Button>
										);
									} ) }
								</ButtonGroup>
							</BaseControl>
						</PanelRow>

						<PanelRow>
							<BaseControl
								label={ __( 'Background Color' ) }
								id="abstract-background"
							>
								<ColorPicker
									color={ attributes.bgcolorpicker }
									onChangeComplete={ ( value ) => setAttributes( { bgcolorpicker: value.hex } ) }
									disableAlpha
								/>
							</BaseControl>
						</PanelRow>

						<PanelRow>
							<TextControl
								label="Custom Background CSS"
								onChange={ ( content ) => setAttributes( { bgcss: content } ) }
								value={ attributes.bgcss }
								help="Set a CSS value for the background color (overrides the color picker setting)."
							/>
						</PanelRow>

						<PanelRow>
							<ToggleControl
								label="Invert accessibility controls"
								help="Use white foreground on dark background."
								checked={ attributes.invert_accessibility_controls }
								onChange={ ( content ) => setAttributes( { invert_accessibility_controls: content } ) }
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
