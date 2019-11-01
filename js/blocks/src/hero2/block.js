const { __ } = wp.i18n;
const {
	registerBlockType
} = wp.blocks;

const {
	PanelBody,
	PanelRow,
	withNotices,
	BaseControl,
	TextControl,
	Button,
	ButtonGroup
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
	IconButton,
	BlockAlignmentToolbar,
	InnerBlocks // @todo: allow nested blocks
} = wp.editor;

const ALLOWED_BLOCKS = [
	'core/heading',
	'core/paragraph',
	'uri-cl/button'
];
const TEMPLATE = [
  ['core/heading', { level: 1, placeholder: 'My Hero', blockControls: {} }],
  ['core/paragraph', { placeholder: '', dropCap: false }],
  ['uri-cl/button', {}]
];
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


registerBlockType('uri-cl/hero2', {   

  title: __('hero2'),
  icon: customIcon,
  category: 'cl-blocks',
  
	attributes: {
		title: {
			type: 'string',
		},
		alignment: {
			type: 'string',
		},

		mediaID: {
			type: 'number',
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

	},

	
	edit({ attributes, className, setAttributes }) {

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

		const createContentEditForm = () => {
			return (
				<div className="container">
					<div class="cl-hero2">
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
						<InnerBlocks
							allowedBlocks={ ALLOWED_BLOCKS }
							template={TEMPLATE}
							templateLock="all"
						/>
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
				</BlockControls>
			);

		}



		// send the editor interfaces to the view
  	return ([
			createBlockControls(),
			createContentEditForm()
  	]);
  	
	}, // end edit
	
	save({ attributes }) {
		let classes = "cl-hero";
		if( !! attributes.className ) {
			// @todo this gets automatically applied to wrapper... remove it?
			classes += " " + attributes.className
		}
		if( !! attributes.alignment ) {
			classes += " " + attributes.alignment
		}
		if ( !! attributes.format ) {
			classes += " " + attributes.format
		}
		let bg = "";
		if ( !! attributes.img ) {
			bg = "background-image:url(" + attributes.img + ")";
		}
		return (

			<div class={classes}>
				<div class="overlay">
					<div class="block">
						<h1>{ attributes.title }</h1>
						<InnerBlocks.Content />
					</div>
				</div>
				<div id="hero1" data-id={attributes.vid} class="poster" style={bg}></div>
			</div>

		);
	}
	
	
});

