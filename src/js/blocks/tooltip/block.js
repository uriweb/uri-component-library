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
	'core/heading',
	'core/paragraph',
	'core/list',
];
const TEMPLATE = [
	[ 'core/paragraph', { placeholder: 'Your tooltip content...', dropCap: false } ],
];

const customIcon = () => {
	return (
		<img
			width="20"
			height="20"
			className="dashicon"
			src={ ( URI_CL_URL + 'i/icons/tooltip.svg' ) }
			alt="button"
		/>
	);
};

const classNames = ( attributes, isSelected ) => {
	let classes = 'cl-tooltip';
	if ( !! attributes.className ) {
		// @todo this gets automatically applied to wrapper... remove it?
		classes += ' ' + attributes.className;
	}
	if ( !! isSelected ) {
		classes += ' selected';
	}
	return classes;
};

registerBlockType( 'uri-cl/tooltip', {

	title: __( 'Tooltip' ),
	icon: customIcon,
	category: 'cl-blocks',
	description: __( 'Use tooltips to provide notes and direction while building a site.' ),
	example: {
		attributes: {
			title: __( 'Tooltip' ),
		},
		innerBlocks: [ {
			name: 'core/paragraph',
			attributes: {
				content: __( 'Tooltips provide helpful direction.' ),
			},
		} ],
	},
	attributes: {
		title: {
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
						<h2><PlainText
							onChange={ ( content ) => setAttributes( { title: content } ) }
							value={ attributes.title }
							placeholder={ __( 'Tip:' ) }
							keepPlaceholderOnFocus={ true }
						/></h2>
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
