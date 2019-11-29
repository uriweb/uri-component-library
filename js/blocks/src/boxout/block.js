const { __ } = wp.i18n;
const {
	registerBlockType
} = wp.blocks;
const {
	PlainText,
	RichText,
	MediaUpload,
	InspectorControls,
	BlockControls,
	Toolbar,
	IconButton,
	BlockAlignmentToolbar,
	InnerBlocks // @todo: allow nested blocks
} = wp.editor;

const ALLOWED_BLOCKS = [
	'core/image',
	'core/heading',
	'core/paragraph',
	'core/list',
	'uri-cl/button'
];
const TEMPLATE = [
  ['core/paragraph', { placeholder: 'Your boxout content...', dropCap: false }],
];


const customIcon = () => {
	return(
		<img
			width="20"
			height="20"
			className="dashicon"
			src={(URI_CL_URL + 'i/boxout.png')}
			alt="button"
		/>
	);
}

const classNames = (attributes, isSelected) => {
	let classes = "cl-boxout";
	if( !! attributes.className ) {
		// @todo this gets automatically applied to wrapper... remove it?
		classes += " " + attributes.className
	}
	if( !! isSelected ) {
		classes += ' selected';
	}
	if( !! attributes.alignment ) {
		classes += " " + attributes.alignment
	}
	return classes;
}


registerBlockType('uri-cl/boxout', {   

  title: __('Boxout'),
  icon: customIcon,
  category: 'cl-blocks',
  
	attributes: {
		title: {
			type: 'string',
		},
		alignment: {
			type: 'string',
		},
	},

	
	edit({ attributes, className, setAttributes, isSelected }) {
		// generate editor view of the card itself
		const createContentEditForm = () => {
			let classes = classNames(attributes, isSelected);
			return (
				<div className="container">
					<div class={classes}>
						<h1><PlainText
							onChange={ content => setAttributes({ title: content }) }
							value={ attributes.title }
							placeholder={__("Title")}
							keepPlaceholderOnFocus={true}
						/></h1>
						<InnerBlocks
							allowedBlocks={ ALLOWED_BLOCKS }
							template={TEMPLATE}
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
		let classes = classNames(attributes);
		
		return (
			<div>
				<div class={classes}>
					<h1>{ attributes.title }</h1>
					<InnerBlocks.Content />
				</div>
			</div>
		);
	}
	
	
});
