const { __ } = wp.i18n;
const {
	registerBlockType,
} = wp.blocks;

const {
	PanelBody,
	PanelRow,
	withNotices,
	BaseControl,
	TextControl,
	Button,
	ButtonGroup,
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
	BlockAlignmentToolbar,
	InnerBlocks,
} = wp.blockEditor;

const ALLOWED_BLOCKS = [
	'core/paragraph',
];

const TEMPLATE = [
	[ 'core/paragraph', { placeholder: 'Your notice content...', dropCap: false } ],
];

const customIcon = () => {
	return (
		<img
			width="20"
			height="20"
			className="dashicon"
			src={ ( URI_CL_URL + 'i/icons/notice.png' ) }
			alt="button"
		/>
	);
};

registerBlockType( 'uri-cl/notice', {
	title: __( 'Notice' ),
	icon: customIcon,
	category: 'cl-blocks',
	attributes: {
		style: {
			type: 'string',
		},
		contentWrapper: {
			type: 'string',
		},
	},

	edit( { attributes, className, setAttributes } ) {
		const createContentEditForm = () => {
			let classes = 'cl-notice';
			if ( !! attributes.className ) {
				// @todo this gets automatically applied to wrapper... remove it?
				classes += ' ' + attributes.className;
			}

			if ( !! attributes.style ) {
				classes += ' ' + attributes.style;
			}

			setAttributes( { contentWrapper: '' } );

			return (
				<div className="container">
					<div className={ classes }>
						<h1><PlainText
							onChange={ ( content ) => setAttributes( { title: content } ) }
							value={ attributes.title }
							placeholder={ __( 'Your notice title' ) }
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

		const createInspectorControls = () => {
			return (
				<InspectorControls>
					<PanelBody>
						<PanelRow>
							<BaseControl
								label={ __( 'Notice Style' ) }
								id="notice-style"
							>
								<ButtonGroup aria-label={ __( 'Notice Style' ) }>
									{ [ 'default', 'urgent', 'covid19' ].map( ( value ) => {
										const capitalizedValue = value.charAt( 0 ).toUpperCase() + value.slice( 1 );
										const key = ( 'default' === value ) ? '' : value;
										const selected = key === attributes.style;

										return (
											<Button
												key={ key }
												isSecondary
												isPrimary={ selected }
												aria-pressed={ selected }
												onClick={ ( content ) => setAttributes( { style: key } ) }
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
		};

		// Send the editor interfaces to the view
		return ( [
			createContentEditForm(),
			createInspectorControls(),
		] );
	}, // End edit

	save( { attributes } ) {
		return (
			<InnerBlocks.Content />
		);
	},

} );
