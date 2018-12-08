const { __ } = wp.i18n;
const { registerBlockType } = wp.blocks;
const {
	PlainText,
	RichText,
	MediaUpload,
	InspectorControls,
	BlockControls,
	Toolbar,
	IconButton,
	BlockAlignmentToolbar
} = wp.editor;
const {
	PanelBody,
	PanelRow,
	BaseControl,
	TextControl,
	Button
} = wp.components;


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
		alignment: {
			type: 'string',
		}
	},
	
	
	edit({ attributes, className, setAttributes, isSelected }) {

		// generate the image or the add image section
		const getImageButton = (openEvent) => {
			if(attributes.img) {
				return (
					<img 
						src={ attributes.img }
						onClick={ openEvent }
						className="image"
					/>
				);
			}
			else {
				return (
					<div className="button-container">
						<Button 
							onClick={ openEvent }
							className="button button-large"
						>
							Pick an image
						</Button>
					</div>
				);
			}
		};
		
		let meta;
		if( !! isSelected ) {
			meta = (
				<div class="meta">
					<label>Links to:</label>
					<PlainText
						onChange={ content => setAttributes({ link: content }) }
						value={ attributes.link }
						placeholder="https://www.uri.edu/"
						className="meta-field"
					/>
				</div>
			);
		}

		// generate editor view of the card itself
		const createContentEditForm = () => {
			return (
				<div className="container">
					<div class="cl-card">
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
							className="heading"
							keepPlaceholderOnFocus={true}
						/></h3>
						<RichText
							tagName="div"
							onChange={ content => setAttributes({ body: content }) }
							value={ attributes.body }
							multiline="p"
							placeholder={__("Your card text")}
							keepPlaceholderOnFocus={true}
						/>
						</div>
						<PlainText
							onChange={ content => setAttributes({ button: content }) }
							value={ attributes.button }
							placeholder={__("Your button text")}
							keepPlaceholderOnFocus={true}
							className="cl-button"
						/>
					</div>
					{ meta }
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

		let classes = "cl-card";
		if ( !! attributes.className ) {
			classes += " " + attributes.className;
		}
		return (
			<div>
				<a class={classes} href={ attributes.link }>
					<img src={ attributes.img } alt={ attributes.alt } />
					<div class="cl-card-text">
						<h3>{ attributes.title }</h3>
						<RichText.Content tagName="p" value={ attributes.body } />
					</div>
					<div class="cl-button">{ attributes.button }</div>
				</a>
			</div>
		);
		
		
	}
	
	
});

