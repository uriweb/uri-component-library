const { __ } = wp.i18n;
const {
	registerBlockType,
	InnerBlocks // @todo: allow nested blocks
} = wp.blocks;
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


/**
 * Assemble the shortcode
 */
function buildShortCode( args ) {
	// unfortunately, Gutenberg cares a lot about the order in which attributes appear,
	// so this process is best done manually.
	var shortcode = '[cl-boxout';
	if (args.title) {
		shortcode += ' title="' + args.title + '"';
	}
	if (args.alignment == 'left' || args.alignment == 'right' ) {
		shortcode += ' float="' + args.alignment + '"';
	}
	if (args.className) {
		shortcode += ' class="' + args.className + '"';
	}

	shortcode += ']' + args.body + '[/cl-boxout]';

	return shortcode;

}


registerBlockType('uri-cl/boxout', {   

  title: __('Boxout'),
  icon: customIcon,
  category: 'cl-blocks',
  
	attributes: {
		title: {
			type: 'string',
		},
		body: {
			type: 'string',
		},
		alignment: {
			type: 'string',
		},
	},

	
	
	edit({ attributes, className, setAttributes }) {


		// generate editor view of the card itself
		const createContentEditForm = () => {
			return (
				<div className="container">
					<div class="cl-boxout">
						<h1><PlainText
							tagName="h2"
							onChange={ content => setAttributes({ title: content }) }
							value={ attributes.title }
							placeholder={__("Your boxout title")}
							className="heading"
							keepPlaceholderOnFocus={true}
						/></h1>
						<RichText
							tagName="div"
							onChange={ content => setAttributes({ body: content }) }
							value={ attributes.body }
							multiline="p"
							placeholder={__("Your boxout text")}
							keepPlaceholderOnFocus={true}
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

		var o = wp.element.createElement( wp.element.RawHTML, null, buildShortCode( attributes ) );
		// console.log(o);
		return o;
		
	}
	
	
});

