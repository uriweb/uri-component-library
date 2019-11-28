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
	Button
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
} = wp.editor;


// @see https://github.com/WordPress/gutenberg/tree/master/packages/block-library/src

const ALLOWED_MEDIA_TYPES = [ 'image' ];


const customIcon = () => {
	return(
		<svg
			width="20"
			height="20"
			className="dashicon"
		>
			<path d="M2,8 L2,16 L16,16 L16,8 L2,8 Z M2,7 L16,7 L16,2 L2,2 L2,7 Z M18,1 L18,17 C18,17 18,18 18,18 C18,18 17,18 17,18 L1,18 C1,18 0,18 0,18 C0,18 0,17 0,17 L0,1 C0,1 0,0 0,0 C0,0 1,0 1,0 L17,0 C17,0 18,0 18,0 C18,0 18,1 18,1 Z M15,15 L3,15 L3,12 L15,12 L15,15 Z"/>
		</svg>
	);
}

const classNames = (attributes, isSelected) => {
	let classes = "cl-card";
	if( !! attributes.className ) {
		// @todo this gets automatically applied to wrapper... remove it?
		classes += " " + attributes.className
	}
	if( !! attributes.alignment ) {
		classes += " " + attributes.alignment
	}

	if( !! isSelected ) {
		classes += ' selected';
	}

	if ( !! attributes.img ) {
		classes += ' has-image';
	} else {
		classes += ' no-image';
	}


	return classes;
}


registerBlockType('uri-cl/card', {   

  title: __('Card'),
  icon: customIcon,
  category: 'cl-blocks',
  
	// the mediaID is what goes into the shortcode for front-end display
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
		alignment: {
			type: 'string',
		}
	},
	
	
	edit({ attributes, className, setAttributes, isSelected }) {

		// generate the image or the add image section
		const getImageButton = (openEvent) => {
			if(attributes.mediaID) {
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
							instructions: __( 'Drag an image, upload a new one or select a file from your library.' ),
						} }
						onSelect={ media => { setAttributes({
							alt: media.alt,
							img: media.url,
							mediaID: media.id
						}); } }
						accept="image/*"
						allowedTypes={ ALLOWED_MEDIA_TYPES }
					/>
				);
			}
		};
		
		let meta;
		if( !! isSelected ) {
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
				)

		}

		// generate editor view of the card itself
		const createContentEditForm = () => {
			let classes = classNames( attributes, isSelected );
		
			// set the tooltip
			let title = "";
			if( !! attributes.tooltip ) {
				title = attributes.tooltip;
			}
			return (
				<div className="container cl-card-block-form">
					<div className={classes} title={title}>

						<MediaUpload
							onSelect={ media => { setAttributes({
								alt: media.alt,
								img: media.url,
								mediaID: media.id
							}); } }
							type="image"
							value={ attributes.mediaID }
							render={ ({ open }) => getImageButton(open) }
						/>

						<div class="cl-card-text">
						<h3><PlainText
							onChange={ content => setAttributes({ title: content }) }
							value={ attributes.title }
							placeholder={__("Your card title")}
							keepPlaceholderOnFocus={true}
						/></h3>
						<RichText
							onChange={ content => setAttributes({ body: content }) }
							tagname="p"
							value={ attributes.body }
							placeholder={__("Your card text")}
							keepPlaceholderOnFocus={true}
						/>
						</div>
						<div>
							<PlainText
								onChange={ content => setAttributes({ button: content }) }
								value={ attributes.button }
								placeholder={__("Your button text")}
								keepPlaceholderOnFocus={true}
								className="cl-button"
							/>
							{ meta }
						</div>
					</div>
				</div>
			);
		}

		// generate block controls for alignment, etc
		const createBlockControls = () => {
			return(
				<BlockControls key="controls">
					<BlockAlignmentToolbar
						value={ attributes.alignment }
						onChange={ content => setAttributes({ alignment: content }) }
					/>

					{ !! attributes.img && (
					<MediaUploadCheck>
						<Toolbar>
							<MediaUpload
								onSelect={ media => { setAttributes({
									alt: media.alt,
									img: media.url,
									mediaID: media.id
								}); } }
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

		}

		// generate sidebar inspector controls for other custom attributes
		const createInspectorControls = () => {
			return(
				<InspectorControls>
					<PanelBody>
						<PanelRow>
							<TextControl
								label="Tool tip"
								onChange={ content => setAttributes({ tooltip: content }) }
								value={ attributes.tooltip }
								className="meta-field"
							/>
						</PanelRow>
					</PanelBody>
				</InspectorControls>
			);
		}

		// send the editor interfaces to the view
  	return ([
			createBlockControls(),
			createInspectorControls(),
			createContentEditForm()
  	]);
  	
	}, // end edit
	
	save({ attributes }) {
	
		// @todo: use the media ID to build a src set

		let classes = classNames(attributes);

		if ( !! attributes.alignment ) {
			classes += " " + attributes.alignment
		}
		return (
			<div>
				<a class={classes} href={ attributes.link }>
					<img src={ attributes.img } alt={ attributes.alt } />
					<div class="cl-card-text">
						<h3>{ attributes.title }</h3>
						<RichText.Content
							tagName="p"
							value={ attributes.body }
						/>
					</div>
					<div class="cl-button">{ attributes.button }</div>
				</a>
			</div>
		);
		
		
	}
	
	
});

