const { __ } = wp.i18n;
const { registerBlockType } = wp.blocks;
const {
	Dashicon,
	Button,
	PanelBody,
	PanelRow,
	Toolbar,
	withNotices,
	BaseControl,
	TextControl,
	ButtonGroup,
	FocalPointPicker,
	ToggleControl,
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
			src={ ( URI_CL_URL + 'i/icons/promo.png' ) }
			alt="button"
		/>
	);
};

registerBlockType( 'uri-cl/promo', {

	title: __( 'Promo' ),
	icon: customIcon,
	category: 'cl-blocks',

	// The mediaID is what goes into the shortcode for front-end display
	// the img and alt are for editor placeholders
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
		linktext: {
			type: 'string',
		},
		img: {
			type: 'string',
		},
		mediaID: {
			type: 'number',
		},
		alt: {
			type: 'string',
		},
		style: {
			type: 'string',
		},
		format: {
			type: 'string',
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

		// Generate editor view of the promo itself
		const createContentEditForm = () => {
			let classes = 'cl-promo';
			if ( !! isSelected ) {
				classes += ' selected';
			}

			if ( 'micro' === attributes.format ) {
				classes += ' micro';

				return (
					<div className="container cl-promo-block-form">
						<div className={ classes }>
							<div className="cl-promo-micro-content-wrapper">
								<h1><PlainText
									onChange={ ( content ) => setAttributes( { title: content } ) }
									value={ attributes.title }
									placeholder={ __( 'Your promo title' ) }
									keepPlaceholderOnFocus={ true }
								/></h1>
								<span className="cl-promo-micro-text-link"><PlainText
									onChange={ ( content ) => setAttributes( { linktext: content } ) }
									value={ attributes.linktext }
									placeholder={ __( 'Your link text' ) }
									keepPlaceholderOnFocus={ true }
								/>{ meta }</span>
							</div>
						</div>
					</div>
				);
			}

			let style = 'style-blur';
			if ( !! attributes.style && 'default' !== attributes.style ) {
				style = 'style-' + attributes.style;
			}
			style = 'cl-promo-backdrop ' + style;

			return (
				<div className="container cl-promo-block-form">
					<div className={ classes }>
						<div className="cl-promo-backdrop-wrapper">
							<div className={ style }></div>
						</div>
						<div className="cl-promo-content">
							<div className="cl-promo-text">
								<h1><PlainText
									onChange={ ( content ) => setAttributes( { title: content } ) }
									value={ attributes.title }
									placeholder={ __( 'Your promo title' ) }
									keepPlaceholderOnFocus={ true }
								/></h1>
								<p><PlainText
									onChange={ ( content ) => setAttributes( { body: content } ) }
									value={ attributes.body }
									placeholder={ __( 'Your promo text' ) }
									keepPlaceholderOnFocus={ true }
								/></p>
								<p><span className="cl-promo-text-link"><PlainText
									onChange={ ( content ) => setAttributes( { linktext: content } ) }
									value={ attributes.linktext }
									placeholder={ __( 'Your link text' ) }
									keepPlaceholderOnFocus={ true }
								/></span></p>
							</div>
							<div className="cl-promo-img-wrapper">
								<div className="cl-promo-img"><span className="cl-promo-img-link">
									<span className="cl-promo-block-editor-meta">{ meta }</span>
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
								</span></div>
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
						onChange={ ( content ) => setAttributes( { alignment: content } ) }
					/>

					{ !! attributes.img && (
						<MediaUploadCheck>
							<Toolbar>
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
										<Button
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
								id="promo-format"
							>
								<ButtonGroup aria-label={ __( 'Promo Format' ) }>
									{ [ 'default', 'micro' ].map( ( value ) => {
										const capitalizedValue = value.charAt( 0 ).toUpperCase() + value.slice( 1 );
										const key = ( 'default' === value ) ? '' : value;
										const format = ( undefined === attributes.format ) ? '' : attributes.format;
										const selected = ( key === format );

										return (
											<Button
												key={ key }
												isSecondary
												isPrimary={ selected }
												aria-pressed={ selected }
												onClick={ ( content ) => setAttributes( { format: key } ) }
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
								label={ __( 'Style' ) }
								help={ __( 'To increase performance, promo previews will appear simplified in the editor window.' ) }
								id="promo-style"
							>
								<ButtonGroup aria-label={ __( 'Promo Style' ) }>
									{ [ 'default', 'brand', 'confetti' ].map( ( value ) => {
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
