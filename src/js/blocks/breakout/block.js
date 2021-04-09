const { __ } = wp.i18n;
const {
	registerBlockType,
} = wp.blocks;
const {
	PanelBody,
	PanelRow,
	ToggleControl,
} = wp.components;
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
	'core/columns',
	'uri-cl/button',
	'uri-cl/boxout',
	'uri-cl/card',
	'uri-cl/date',
	'uri-cl/hero',
	'uri-cl/metric',
	'uri-cl/quote',
];
const TEMPLATE = [
	[ 'core/paragraph', { placeholder: 'Your breakout content...', dropCap: false } ],
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
	let classes = 'cl-breakout';
	if ( !! attributes.className ) {
		// @todo this gets automatically applied to wrapper... remove it?
		classes += ' ' + attributes.className;
	}
	if ( !! attributes.use_content_width ) {
		classes += ' use-content-width';
	}
	if ( !! isSelected ) {
		classes += ' selected';
	}
	return classes;
};

registerBlockType( 'uri-cl/breakout', {

	title: __( 'Breakout' ),
	icon: customIcon,
	category: 'cl-blocks',
	description: __( 'Use breakouts to create visually distinct sections or full-width layouts.' ),
	example: {
		innerBlocks: [ {
			name: 'core/paragraph',
			attributes: {
				content: __( 'Breakouts content can be the same width as the rest of the page content, or it can expand beyond it.' ),
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
		use_content_width: {
			type: 'boolean',
			default: true,
		},
	},

	edit( { attributes, className, setAttributes, isSelected } ) {
		const classes = classNames( attributes, isSelected );
		setAttributes( { contentWrapper: '' } );

		// Generate editor view of the card itself
		const createContentEditForm = () => {
			if ( true === attributes.use_content_width ) {
				return (
					<div className="container">
						<div className={ classes }>
							<div className="content-width">
								<InnerBlocks
									allowedBlocks={ ALLOWED_BLOCKS }
									template={ TEMPLATE }
								/>
							</div>
						</div>
					</div>
				);
			}
			return (
				<div className="container">
					<div className={ classes }>
						<InnerBlocks
							allowedBlocks={ ALLOWED_BLOCKS }
							template={ TEMPLATE }
						/>
					</div>
				</div>
			);
		};

		// Generate sidebar inspector controls for other custom attributes
		const createInspectorControls = () => {
			return (
				<InspectorControls>
					<PanelBody>

						<PanelRow>
							<ToggleControl
								label="Use content width"
								checked={ attributes.use_content_width }
								onChange={ ( content ) => setAttributes( { use_content_width: content } ) }
							/>
						</PanelRow>

					</PanelBody>
				</InspectorControls>
			);
		};

		// Send the editor interfaces to the view
		return ( [
			createInspectorControls(),
			createContentEditForm(),
		] );
	}, // End edit

	save( { attributes } ) {
		return (
			<InnerBlocks.Content />
		);
	},

} );
