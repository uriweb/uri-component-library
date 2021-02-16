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

const ALLOWED_MEDIA_TYPES = [ 'image' ];

const customIcon = () => {
	return (
		<img
			width="20"
			height="20"
			className="dashicon"
			src={ ( URI_CL_URL + 'i/icons/card.svg' ) }
			alt="button"
		/>
	);
};

const classNames = ( attributes, isSelected ) => {
	let classes = 'cl-card';
	if ( !! attributes.className ) {
		// @todo this gets automatically applied to wrapper... remove it?
		classes += ' ' + attributes.className;
	}
	if ( !! attributes.float ) {
		classes += ' ' + attributes.float;
	}

	if ( !! isSelected ) {
		classes += ' selected';
	}

	if ( !! attributes.img ) {
		classes += ' has-image';
	} else {
		classes += ' no-image';
	}

	return classes;
};

registerBlockType( 'uri-cl/card', {

	title: __( 'Card' ),
	icon: customIcon,
	category: 'cl-blocks',
	description: __( 'Use cards to explain and link to a single idea.' ),
	example: {
		attributes: {
			title: __( 'One idea' ),
			body: __( 'Since the entire card must be a single link, it’s perfect for linking to broad topics where you need more words or a photo to describe the linked resource.' ),
			mediaID: true,
			img: URI_CL_URL + 'i/example.jpg',
			button: __( 'Learn More' ),
		},
	},

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
		tooltip: {
			type: 'string',
		},
		float: {
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

		// Generate editor view of the card itself
		const createContentEditForm = () => {
			const classes = classNames( attributes, isSelected );

			// Set the tooltip
			let title = '';
			if ( !! attributes.tooltip ) {
				title = attributes.tooltip;
			}
			return (
				<div className="container cl-card-block-form">
					<div className={ classes } title={ title }>

						<div className="cl-card-container media">

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
						<div className="cl-card-container text">

							<div className="cl-card-text">
								<h3><PlainText
									onChange={ ( content ) => setAttributes( { title: content } ) }
									value={ attributes.title }
									placeholder={ __( 'Your card title' ) }
									keepPlaceholderOnFocus={ true }
								/></h3>
								<RichText
									onChange={ ( content ) => setAttributes( { body: content } ) }
									tagname="p"
									value={ attributes.body }
									placeholder={ __( 'Your card text' ) }
									keepPlaceholderOnFocus={ true }
								/>
							</div>

						</div>
						<div className="cl-card-container button">
							<PlainText
								onChange={ ( content ) => setAttributes( { button: content } ) }
								value={ attributes.button }
								placeholder={ __( 'Your button text' ) }
								keepPlaceholderOnFocus={ true }
							/>
							{ meta }
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
						value={ attributes.float }
						onChange={ ( content ) => setAttributes( { float: content } ) }
					/>

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
							<TextControl
								label="Tool tip"
								onChange={ ( content ) => setAttributes( { tooltip: content } ) }
								value={ attributes.tooltip }
								className="meta-field"
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
