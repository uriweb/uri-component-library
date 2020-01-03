const { __ } = wp.i18n;
const { registerBlockType } = wp.blocks;
const {
	Dashicon,
	IconButton,
	PanelBody,
	PanelRow,
	Toolbar,
	withNotices,
	BaseControl,
	TextControl,
	Button,
	ButtonGroup,
	ToggleControl
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
	URLInput
} = wp.blockEditor;

// @see https://github.com/WordPress/gutenberg/tree/master/packages/block-library/src

const ALLOWED_MEDIA_TYPES = [ 'image' ];

const customIcon = () => {
	return (
		<img
			width="20"
			height="20"
			className="dashicon"
			src={ ( URI_CL_URL + 'i/icons/hero.png' ) }
			alt="button"
		/>
	);
};

const randomID = () => {

	// https://stackoverflow.com/questions/6860853/generate-random-string-for-div-id
	let S4 = () => {
		return ( ( ( 1 + Math.random() ) * 0x10000 ) | 0 ).toString( 16 ).substring( 1 );
	};
	return ( S4() + S4() + '-' + S4() + '-' + S4() + '-' + S4() + '-' + S4() + S4() + S4() );
};

registerBlockType( 'uri-cl/hero', {

	title: __( 'Hero' ),
	icon: customIcon,
	category: 'cl-blocks',

	// The mediaID is what goes into the shortcode for front-end display
	// the img and alt are for editor placeholders
	attributes: {
		headline: {
			type: 'string'
		},
		subhead: {
			type: 'string'
		},
		link: {
			type: 'string'
		},
		mediaID: {
			type: 'number'
		},
		id: {
			type: 'string'
		},
		vid: {
			type: 'string'
		},
		img: {
			type: 'string'
		},
		alt: {
			type: 'string'
		},
		button: {
			type: 'string'
		},
		tooltip: {
			type: 'string'
		},
		use_caption: {
			type: 'boolean'
		},
		caption: {
			type: 'string'
		},
		credit: {
			type: 'string'
		},
		format: {
			type: 'string'
		},
		animation: {
			type: 'string'
		}
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
			} else {
				return (
					<MediaPlaceholder
						icon={ 'format-image' }
						className={ className }
						labels={ {
							title: 'Add an image',
							instructions: __( 'Drag an image, upload a new one or select a file from your library.' )
						} }
						onSelect={ media =>
							{
								setAttributes( {
									alt: media.alt,
									img: media.url,
									mediaID: media.id
								});
							}
						}
						accept="image/*"
						allowedTypes={ ALLOWED_MEDIA_TYPES }
					/>
				);
			}
		};

		let meta;
		if ( !! isSelected ) {
			meta = (
				<form
					className="meta"
					onSubmit={ ( event ) => event.preventDefault() }
				>
					<fieldset class="row link">
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

		// Generate editor view of the hero itself
		const createContentEditForm = () => {

			if ( ! attributes.id ) {
				attributes.id = randomID();
			}

			let classes = 'cl-hero';
			if ( !! attributes.style ) {
				classes += ' ' + attributes.style;
			}
			if ( !! attributes.format ) {
				classes += ' ' + attributes.format;
			}
			if ( !! isSelected ) {
				classes += ' selected';
			}
			if ( !! attributes.img ) {
				classes += ' has-image';
			} else {
				classes += ' no-image';
			}

			// Set the tooltip
			let title = '';
			if ( !! attributes.tooltip ) {
				title = attributes.tooltip;
			}
			return (
				<div className="container cl-hero-block-form">
					<div className={classes} title={title}>
						<div class="cl-hero-proper">
							<div class="poster">
								<MediaUpload
									onSelect={ media =>
										{
											setAttributes( {
												alt: media.alt,
												img: media.url,
												mediaID: media.id
											});
										}
									}
									type="image"
									value={ attributes.mediaID }
									render={ ({ open }) => getImageButton( open ) }
								/>
							</div>
							<div class="cl-hero-text overlay">
								<div class="block">
									<h1><PlainText
										onChange={ content => setAttributes({ headline: content }) }
										value={ attributes.headline }
										placeholder={ __( 'Your hero title' ) }
										keepPlaceholderOnFocus={ true }
									/></h1>
									<p class="subhead"><RichText
										onChange={ content => setAttributes({ subhead: content }) }
										value={ attributes.subhead }
										placeholder={ __( 'Your hero subtitle' ) }
										keepPlaceholderOnFocus={ true }
										className="subhead"
									/></p>
									<span class="cl-button">
									<PlainText
										onChange={ content => setAttributes({ button: content }) }
										value={ attributes.button }
										placeholder={ __( 'Your button text' ) }
										keepPlaceholderOnFocus={true}
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
					<BlockAlignmentToolbar
						value={ attributes.alignment }
						onChange={ content => setAttributes({ alignment: content }) }
					/>

					{ !! attributes.img && (
					<MediaUploadCheck>
						<Toolbar>
							<MediaUpload
								onSelect={ media =>
									{
										setAttributes({
											alt: media.alt,
											img: media.url,
											mediaID: media.id
										});
									}
								}
								allowedTypes={ ALLOWED_MEDIA_TYPES }
								value={ attributes.mediaID }
								render={ ( { open } ) => (
									<IconButton
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
							>
								<ButtonGroup aria-label={ __( 'Hero Format' ) }>
									{ [ 'default', 'fullwidth', 'super' ].map( ( value ) => {
										const capitalizedValue = value.charAt( 0 ).toUpperCase() + value.slice( 1 );
										const key = ( 'default' === value ) ? '' : value;
										const format = ( undefined == attributes.format ) ? '' : attributes.format;
										const isSelected = ( key === format );

										return (
											<Button
												key={ key }
												isDefault
												isPrimary={ isSelected }
												aria-pressed={ isSelected }
												onClick={ content => setAttributes({ format: key }) }
											>
												{ capitalizedValue }
											</Button>
										);
									} ) }
								</ButtonGroup>
							</BaseControl>
						</PanelRow>

						<PanelRow>
							<TextControl
								label="Video URL"
								onChange={ content => setAttributes( { vid: content } ) }
								value={ attributes.vid }
								className="meta-field vid"
								help="For creating a video hero."
							/>
						</PanelRow>

						<PanelRow>
							<ToggleControl
								label="Use WordPress caption"
								help="Setting a custom caption below will override any WordPress caption."
								checked={ attributes.use_caption }
								onChange={ content => setAttributes( { use_caption: content } ) }
							/>
						</PanelRow>

						<PanelRow>
							<TextControl
								label="Caption"
								onChange={ content => setAttributes( { caption: content } ) }
								value={ attributes.caption }
								className="meta-field vid"
								help="Set a caption for the hero."
							/>
						</PanelRow>

						<PanelRow>
							<TextControl
								label="Credit"
								onChange={ content => setAttributes( { credit: content } ) }
								value={ attributes.credit }
								className="meta-field vid"
								help="Specify credit for the hero media."
							/>
						</PanelRow>

						<PanelRow>
							<TextControl
								label="Tool tip"
								onChange={ content => setAttributes( { tooltip: content } ) }
								value={ attributes.tooltip }
								className="meta-field"
							/>
						</PanelRow>
					</PanelBody>
				</InspectorControls>
			);
		};

		// Send the editor interfaces to the view
	return ([
			createBlockControls(),
			createInspectorControls(),
			createContentEditForm()
	]);

	} // End edit

});
