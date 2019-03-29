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
	ButtonGroup
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
		<img
			width="20"
			height="20"
			className="dashicon"
			src={(URI_CL_URL + 'i/hero.png')}
			alt="button"
		/>
	);
}

const randomID = () => {
	// https://stackoverflow.com/questions/6860853/generate-random-string-for-div-id
	let S4 = () => {
		return (((1+Math.random())*0x10000)|0).toString(16).substring(1);
	};
	return (S4()+S4()+"-"+S4()+"-"+S4()+"-"+S4()+"-"+S4()+S4()+S4());
}


registerBlockType('uri-cl/hero', {   

  title: __('Hero'),
  icon: customIcon,
  category: 'cl-blocks',
  
	// the mediaID is what goes into the shortcode for front-end display
	// the img and alt are for editor placeholders
	attributes: {
		title: {
			type: 'string',
		},
		subhead: {
			type: 'string',
		},
		link: {
			type: 'string',
		},
		mediaID: {
			type: 'number',
		},
		id: {
			type: 'string',
		},
		vid: {
			type: 'string',
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
		format: {
			type: 'string',
		},
		animation: {
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

		// generate editor view of the hero itself
		const createContentEditForm = () => {

			if( ! attributes.id ) {
				attributes.id = randomID();
			}			

			let classes = "cl-hero";
			if( !! attributes.style ) {
				classes += ' ' + attributes.style;
			}
			if( !! attributes.format ) {
				classes += ' ' + attributes.format;
			}
			if( !! isSelected ) {
				classes += ' selected';
			}
			if ( !! attributes.img ) {
				classes += ' has-image';
			} else {
				classes += ' no-image';
			}

			// set the tooltip
			let title = "";
			if( !! attributes.tooltip ) {
				title = attributes.tooltip;
			}
			return (
				<div className="container cl-hero-block-form">
					<div className={classes} title={title}>

						<div class="poster">
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
						</div>
						<div class="cl-hero-text overlay">
							<div class="block">
								<h1><PlainText
									onChange={ content => setAttributes({ title: content }) }
									value={ attributes.title }
									placeholder={__("Your hero title")}
									keepPlaceholderOnFocus={true}
								/></h1>
								<p class="subhead"><RichText
									onChange={ content => setAttributes({ subhead: content }) }
									value={ attributes.subhead }
									placeholder={__("Your hero subtitle")}
									keepPlaceholderOnFocus={true}
									className="subhead"
								/></p>
								<span class="cl-button">
								<PlainText
									onChange={ content => setAttributes({ button: content }) }
									value={ attributes.button }
									placeholder={__("Your button text")}
									keepPlaceholderOnFocus={true}
								/></span>
								{ meta }
						</div>


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
							<BaseControl
								label={ __( "Format" ) }
							>
								<ButtonGroup aria-label={ __( "Hero Format" ) }>
									{ [ "default", "fullwidth", "super" ].map( ( value ) => {

										const capitalizedValue = value.charAt(0).toUpperCase() + value.slice(1);
										const key = (value === "default") ? '' : value;
										const isSelected = key === attributes.format;
									
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
								label="Youtube ID"
								onChange={ content => setAttributes({ vid: content }) }
								value={ attributes.vid }
								className="meta-field vid"
							/>
						</PanelRow>						

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

		let classes = "cl-hero";
		if ( !! attributes.className ) {
			// @todo this gets automatically applied to wrapper... remove it?
			classes += " " + attributes.className
		}
		if ( !! attributes.format ) {
			classes += " " + attributes.format
		}
		let bg = "";
		if ( !! attributes.img ) {
			bg = "background-image:url(" + attributes.img + ")";
		}
		let still = "still";
		if ( !! attributes.vid ) {
			still = "poster";
		}
		let button = "";
		if( !! attributes.button && !! attributes.link ) {
			button = ( <a class="cl-button" href={ attributes.link }>{ attributes.button }</a> );
		}
		// @todo add still photo animations... e.g. "animation shift"

		return (
			<div class={classes}>
				<div class="overlay">
					<div class="block">
						<h1>{ attributes.title }</h1>
						<p>{ attributes.subhead }</p>
						{button}
					</div>
				</div>
				<div id={attributes.id} data-id={attributes.vid} class={still} style={bg}></div>
			</div>
		);
		
	}
	
	
});

