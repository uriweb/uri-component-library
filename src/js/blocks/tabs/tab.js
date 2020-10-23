const { __ } = wp.i18n;
const {
	registerBlockType,
} = wp.blocks;
const {
	PlainText,
	InnerBlocks,
} = wp.blockEditor;
const ALLOWED_BLOCKS = [
	'core/image',
	'core/heading',
	'core/paragraph',
	'core/list',
	'uri-cl/button',
	'uri-cl/card',
	'uri-cl/metric',
	'uri-cl/quote',
];
const TEMPLATE = [
	[ 'core/paragraph', { placeholder: 'Your tab content...', dropCap: false } ],
];

const customIcon = () => {
	return (
		<img
			width="20"
			height="20"
			className="dashicon"
			src={ ( URI_CL_URL + 'i/icons/tab.svg' ) }
			alt="button"
		/>
	);
};

registerBlockType( 'uri-cl/tab', {

	title: __( 'Tab' ),
	icon: customIcon,
	parent: [ 'uri-cl/tabs' ],
	category: 'cl-blocks',

	supports: {
		inserter: false,
		reusable: false,
		html: false,
	},

	attributes: {
		title: {
			type: 'string',
		},
	},

	edit( { attributes, className, setAttributes } ) {
		return (
			<div className="cl-tab">
				<h1><PlainText
					onChange={ ( content ) => setAttributes( { title: content } ) }
					value={ attributes.title }
					placeholder={ __( 'Tab Title' ) }
					keepPlaceholderOnFocus={ true }
				/></h1>
				<InnerBlocks
					allowedBlocks={ ALLOWED_BLOCKS }
					template={ TEMPLATE }
					templateLock={ false }
				/>
			</div>
		);
	}, // End edit

	save( { attributes } ) {
		return (
			<InnerBlocks.Content />
		);
	},

} );
