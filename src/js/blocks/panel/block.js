const { __ } = wp.i18n;
const {
	registerBlockType,
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
	ButtonGroup,
	ToggleControl,
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
	InnerBlocks,
} = wp.blockEditor;

const ALLOWED_BLOCKS = [
	'core/heading',
	'core/paragraph',
	'core/list',
	'uri-cl/button',
];
const TEMPLATE = [
	[ 'core/heading', { level: 1, placeholder: 'My Panel' } ],
	[ 'core/paragraph', { placeholder: '', dropCap: false } ],
	[ 'uri-cl/button', {} ],
];
const ALLOWED_MEDIA_TYPES = [ 'image' ];

const customIcon = () => {
	return (
		<img
			width="20"
			height="20"
			className="dashicon"
			src={ ( URI_CL_URL + 'i/icons/panel.png' ) }
			alt="button"
		/>
	);
};

const classNames = ( attributes ) => {
	let classes = ( 'super' === attributes.format ) ? 'cl-panel-super' : 'cl-panel';
	if ( !! attributes.className ) {
		// @todo this gets automatically applied to wrapper... remove it?
		classes += ' ' + attributes.className;
	}
	if ( !! attributes.reverse ) {
		classes += ' reverse';
	}
	return classes;
};

registerBlockType( 'uri-cl/panel', {

	title: __( 'Panel' ),
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
		format: {
			type: 'string',
		},
		mediaID: {
			type: 'number',
		},
	},

	edit( { attributes, className, setAttributes } ) {
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
			}
			return (
				<MediaPlaceholder
					icon={ 'format-image' }
					className={ className }
					labels={ {
						title: 'Add an image',
						instructions: __( 'Drag an image, upload a new one or select a file from your library.' ),
					} }
					onSelect={ ( media ) => {
						setAttributes( {
							alt: media.alt,
							img: media.url,
							mediaID: media.id,
						} );
					}
					}
					accept="image/*"
					allowedTypes={ ALLOWED_MEDIA_TYPES }
				/>
			);
		};

		const classes = classNames( attributes );

		const createContentEditForm = () => {
			if ( 'super' === attributes.format ) {
				return (
					<div className="container">
						<div className={ classes }>
							<div className="cl-panel-super-blur"></div>
							<div className="cl-panel-super-content">
								<div className="cl-panel-super-image">
									<MediaUpload
										onSelect={ ( media ) => {
											setAttributes( {
												alt: media.alt,
												img: media.url,
												mediaID: media.id,
											} );
										}
										}
										type="image"
										value={ attributes.mediaID }
										render={ ( { open } ) => getImageButton( open ) }
									/>
								</div>
								<div className="cl-panel-super-text">
									<InnerBlocks
										allowedBlocks={ ALLOWED_BLOCKS }
										template={ TEMPLATE }
									/>
								</div>
							</div>
						</div>
					</div>
				);
			}
			return (
				<div className="container">
					<div className={ classes }>
						<figure className="poster">
							<MediaUpload
								onSelect={ ( media ) => {
									setAttributes( {
										alt: media.alt,
										img: media.url,
										mediaID: media.id,
									} );
								}
								}
								type="image"
								value={ attributes.mediaID }
								render={ ( { open } ) => getImageButton( open ) }
							/>
						</figure>
						<article>
							<InnerBlocks
								allowedBlocks={ ALLOWED_BLOCKS }
								template={ TEMPLATE }
							/>
						</article>
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
									onSelect={ ( media ) => {
										setAttributes( {
											alt: media.alt,
											img: media.url,
											mediaID: media.id,
										} );
									}
									}
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

		// Generate sidebar inspector controls for other custom attributes
		const createInspectorControls = () => {
			return (
				<InspectorControls>
					<PanelBody>

						<PanelRow>
							<BaseControl
								label={ __( 'Format' ) }
								help={ __( 'To increase performance, super panel previews will appear simplified in the editor window.' ) }
								id="panel-format"
							>
								<ButtonGroup aria-label={ __( 'Panel Format' ) }>
									{ [ 'default', 'super' ].map( ( value ) => {
										const capitalizedValue = value.charAt( 0 ).toUpperCase() + value.slice( 1 );
										const key = ( 'default' === value ) ? '' : value;
										const format = ( undefined === attributes.format ) ? '' : attributes.format;
										const selected = ( key === format );

										return (
											<Button
												key={ key }
												isDefault
												isPrimary={ selected }
												aria-pressed={ selected }
												onClick={ ( content ) => setAttributes( { format: key } ) }
											>
												{ capitalizedValue }
											</Button>
										);
									} ) }
								</ButtonGroup>
							</BaseControl>
						</PanelRow>

						<PanelRow>
							<ToggleControl
								label="Flip panel layout"
								checked={ attributes.reverse }
								onChange={ ( content ) => setAttributes( { reverse: content } ) }
							/>
						</PanelRow>

					</PanelBody>
				</InspectorControls>
			);
		};

		// Send the editor interfaces to the view
		return ( [
			createBlockControls(),
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
