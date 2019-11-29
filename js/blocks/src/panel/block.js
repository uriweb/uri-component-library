const { __ } = wp.i18n;
const {
	registerBlockType
} = wp.blocks;

const {
	PanelBody,
	PanelRow,
	Toolbar,
	IconButton,
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
	BlockAlignmentToolbar,
	InnerBlocks
} = wp.editor;


const ALLOWED_BLOCKS = [
	'core/heading',
	'core/paragraph',
	'core/list',
	'uri-cl/button'
];
const TEMPLATE = [
  ['core/heading', { level: 1, placeholder: 'My Panel' }],
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
			src={(URI_CL_URL + 'i/panel.png')}
			alt="button"
		/>
	);
}

const classNames = (attributes) => {
	let classes = "cl-panel";
	if( !! attributes.className ) {
		// @todo this gets automatically applied to wrapper... remove it?
		classes += " " + attributes.className
	}
	if( !! attributes.reverse ) {
		classes += " reverse"
	}
	return classes;
}



registerBlockType('uri-cl/panel', {   

  title: __('Panel'),
  icon: customIcon,
  category: 'cl-blocks',
  
	attributes: {
		title: {
			type: 'string',
		},
		reverse: {
			type: 'boolean',
		},
		img: {
			type: 'string',
		},
		alt: {
			type: 'string',
		},
		mediaID: {
			type: 'number',
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

		let classes = classNames(attributes);

		const createContentEditForm = () => {
			return (
				<div className="container">
					<div class={classes}>
						<figure class="poster">
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
						</figure>
						<article>
							<InnerBlocks
								allowedBlocks={ ALLOWED_BLOCKS }
								template={TEMPLATE}
							/>
						</article>
					</div>
				</div>
			);
		}

		const createBlockControls = () => {
			return(
				<BlockControls key="controls">
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
								label={ __( "Panel Style" ) }
							>
								<ButtonGroup aria-label={ __( "Panel Style" ) }>
									{ [ "standard", "reverse" ].map( ( value ) => {

										const capitalizedValue = value.charAt(0).toUpperCase() + value.slice(1);
										const key = (value === "default") ? '' : value;
										const isSelected = key === attributes.style;
									
										return (
											<Button
												key={ key }
												isDefault
												isPrimary={ isSelected }
												aria-pressed={ isSelected }
												onClick={ content => setAttributes({ reverse: ("reverse" == key) }) }
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
		}
  	

		// send the editor interfaces to the view
  	return ([
  		createBlockControls(),
			createInspectorControls(),
			createContentEditForm()
  	]);
  	
	}, // end edit
	
	save({ attributes }) {

		let classes = classNames(attributes);

		return (

			<div class={classes}>	
				<figure>
					<img src={attributes.img} alt={attributes.alt}/>
				</figure>
				<article>
					<InnerBlocks.Content />
				</article>
			</div>

		);
	}
	
	
});

