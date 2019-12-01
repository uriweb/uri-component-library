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
	InnerBlocks
} = wp.blockEditor;

const ALLOWED_BLOCKS = [
	'core/heading',
	'core/paragraph'
];
const TEMPLATE = [
  ['core/paragraph', { placeholder: 'Please note', dropCap: false }],
];
const ALLOWED_MEDIA_TYPES = [ 'image' ];


const customIcon = () => {
	return(
		<img
			width="20"
			height="20"
			className="dashicon"
			src={(URI_CL_URL + 'i/notice.png')}
			alt="button"
		/>
	);
}


registerBlockType('uri-cl/notice', {   

  title: __('Notice'),
  icon: customIcon,
  category: 'cl-blocks',
  
	attributes: {
		style: {
			type: 'string',
		},
	},

	
	edit({ attributes, className, setAttributes }) {

		const createContentEditForm = () => {
			let classes = "cl-notice";
			if( !! attributes.className ) {
				// @todo this gets automatically applied to wrapper... remove it?
				classes += " " + attributes.className
			}

			if ( !! attributes.style ) {
				classes += " " + attributes.style
			}

			return (
				<div className="container">
					<div class={classes}>
						<InnerBlocks
							allowedBlocks={ ALLOWED_BLOCKS }
							template={TEMPLATE}
						/>
					</div>
				</div>
			);
		}

		const createInspectorControls = () => {
			return(
				<InspectorControls>
					<PanelBody>
						<PanelRow>
							<BaseControl
								label={ __( "Notice Style" ) }
							>
								<ButtonGroup aria-label={ __( "Notice Style" ) }>
									{ [ "default", "urgent" ].map( ( value ) => {

										const capitalizedValue = value.charAt(0).toUpperCase() + value.slice(1);
										const key = (value === "default") ? '' : value;
										const isSelected = key === attributes.style;
									
										return (
											<Button
												key={ key }
												isDefault
												isPrimary={ isSelected }
												aria-pressed={ isSelected }
												onClick={ content => setAttributes({ style: key }) }
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
			createContentEditForm(),
			createInspectorControls()
  	]);
  	
	}, // end edit
	
	save({ attributes }) {
		let classes = "cl-notice";
		if( !! attributes.className ) {
			// @todo this gets automatically applied to wrapper... remove it?
			classes += " " + attributes.className
		}

		if ( !! attributes.style ) {
			classes += " " + attributes.style
		}

		return (
			<div class={classes}>
				<InnerBlocks.Content />
			</div>
		);
	}
	
	
});

