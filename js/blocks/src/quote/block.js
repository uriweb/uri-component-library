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
} = wp.blockEditor;

const ALLOWED_BLOCKS = [
	'core/paragraph'
];
const TEMPLATE = [
  ['core/paragraph', { placeholder: '', dropCap: false }]
];
const ALLOWED_MEDIA_TYPES = [ 'image' ];

const customIcon = () => {
	return (
		<img
			width="20"
			height="20"
			className="dashicon"
			src={( URI_CL_URL + 'i/quote.png' )}
			alt="button"
		/>
	);
};

const classNames = ( attributes, isSelected ) => {
	let classes = 'cl-quote';
	if ( !! attributes.className ) {

		// @todo this gets automatically applied to wrapper... remove it?
		classes += ' ' + attributes.className;
	}
	if ( !! isSelected ) {
		classes += ' selected';
	}
	return classes;
};

registerBlockType( 'uri-cl/quote', {

	title: __( 'Quote' ),
	icon: customIcon,
	category: 'cl-blocks',

	attributes: {
		quote: {
			type: 'string'
		},
		citation: {
			type: 'string'
		},
		img: {
			type: 'string'
		},
		alt: {
			type: 'string'
		},
		mediaID: {
			type: 'number'
		}
	},

	edit({ attributes, className, setAttributes, isSelected }) {

		// Generate the image or the add image section
		const getImageButton = ( openEvent ) => {
			if ( attributes.mediaID ) {
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
							instructions: __( 'Drag an image, upload a new one or select a file from your library.' )
						} }
						onSelect={ media => {
							setAttributes({
								alt: media.alt,
								img: media.url,
								mediaID: media.id
							});
						} }
						accept="image/*"
						allowedTypes={ ALLOWED_MEDIA_TYPES }
					/>
				);
			}
		};

		let classes = classNames( attributes, isSelected );

		const createContentEditForm = () => {
			let imageClass = ( !! attributes.mediaID ) ? 'cl-quote-image' : '';
			return (
				<div className="container">

					<div class={classes}>
						<div class={imageClass}>
							<MediaUpload
								onSelect={ media => {
									setAttributes({
										alt: media.alt,
										img: media.url,
										mediaID: media.id
									});
								} }
								type="image"
								value={ attributes.mediaID }
								render={ ({ open }) => getImageButton( open ) }
							/>
						</div>
						<blockquote><PlainText
							onChange={ content => setAttributes({ quote: content }) }
							value={ attributes.quote }
							placeholder={ __( 'The quote' ) }
							keepPlaceholderOnFocus={true}
						/></blockquote>
						<cite><PlainText
							onChange={ content => setAttributes({ citation: content }) }
							value={ attributes.citation }
							placeholder={ __( 'Anonymous' ) }
							keepPlaceholderOnFocus={true}
						/></cite>
					</div>

				</div>
			);
		};

		const createBlockControls = () => {
			return (
				<BlockControls key="controls">
					{ !! attributes.img && (
					<MediaUploadCheck>
						<Toolbar>
							<MediaUpload
								onSelect={ media => {
									setAttributes({
										alt: media.alt,
										img: media.url,
										mediaID: media.id
									});
								} }
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
		};

		// Send the editor interfaces to the view
		return ([
			createBlockControls(),
			createContentEditForm()
		]);

	} // End edit

});
