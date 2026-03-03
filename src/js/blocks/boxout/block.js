const { __ } = wp.i18n;
const {
	registerBlockType,
} = wp.blocks;
const {
	PlainText,
	RichText,
	MediaUpload,
	InspectorControls,
	BlockControls,
	Toolbar,
	Button,
	BlockAlignmentToolbar,
	InnerBlocks, // @todo: allow nested blocks
} = wp.blockEditor;
const ALLOWED_BLOCKS = [
	'core/image',
	'core/heading',
	'core/paragraph',
	'core/list',
	'uri-cl/button',
];
const TEMPLATE = [
	[ 'core/paragraph', { placeholder: 'Your boxout content...', dropCap: false } ],
];

const customIcon = () => {
	return (
		<img
			width="20"
			height="20"
			className="dashicon"
			src={ ( URI_CL_URL + 'i/icons/boxout.svg' ) }
			alt="button"
		/>
	);
};

const classNames = ( attributes, isSelected ) => {
	let classes = 'cl-boxout';
	if ( !! attributes.className ) {
		// @todo this gets automatically applied to wrapper... remove it?
		classes += ' ' + attributes.className;
	}
	if ( !! isSelected ) {
		classes += ' selected';
	}
	if ( !! attributes.float ) {
		classes += ' ' + attributes.float;
	}
	return classes;
};

registerBlockType( 'uri-cl/boxout', {

	title: __( 'Boxout' ),
	icon: customIcon,
	category: 'cl-blocks',
	description: __( 'Use boxouts to contain text that is ancillary to the page’s content.' ),
	example: {
		attributes: {
			title: __( 'Side note' ),
		},
		innerBlocks: [ {
			name: 'core/paragraph',
			attributes: {
				content: __( 'Boxout content supports the rest of the page’s message without being directly related.' ),
			},
		},
		{
			name: 'uri-cl/button',
			attributes: {
				text: __( 'Learn More' ),
			},
		} ],
	},
	attributes: {
		title: {
			type: 'string',
		},
		float: {
			type: 'string',
		},
		contentWrapper: {
			type: 'string',
		},
	},

	edit( { attributes, className, setAttributes, isSelected } ) {
		// Generate editor view of the card itself
		const createContentEditForm = () => {
			const classes = classNames( attributes, isSelected );
			setAttributes( { contentWrapper: '' } );
			return (
				<div className="container">
					<div className={ classes }>
						<h1><PlainText
							onChange={ ( content ) => setAttributes( { title: content } ) }
							value={ attributes.title }
							placeholder={ __( 'Title' ) }
							keepPlaceholderOnFocus={ true }
						/></h1>
						<InnerBlocks
							allowedBlocks={ ALLOWED_BLOCKS }
							template={ TEMPLATE }
						/>
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
				</BlockControls>
			);
		};

		// Send the editor interfaces to the view
		return ( [
			createBlockControls(),
			createContentEditForm(),
		] );
	}, // End edit

	save( { attributes } ) {
		return (
			<InnerBlocks.Content />
		);
	},

} );
