const { __ } = wp.i18n;
const {
	registerBlockType,
} = wp.blocks;

const {
	PanelBody,
	PanelRow,
	Toolbar,
	ToolbarButton,
	Button,
	withNotices,
	BaseControl,
	TextControl,
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
			src={ ( URI_CL_URL + 'i/icons/panel.svg' ) }
			alt="button"
		/>
	);
};

const classNames = ( attributes ) => {
	let classes = ( 'super' === attributes.format ) ? 'cl-panel-super' : 'cl-panel';
	if ( !! attributes.className ) {
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
	description: __( 'Use panels to provide a deep, visual context for a particular topic.' ),
	example: {
		attributes: {
			title: __( 'A Bit More' ),
			mediaID: true,
			img: URI_CL_URL + 'i/example.jpg',
			reverse: true,
		},
		innerBlocks: [ {
			name: 'core/heading',
			attributes: {
				level: 2,
				content: __( 'Options' ),
			},
		},
		{
			name: 'core/paragraph',
			attributes: {
				content: __( 'A panel is different from a card in that a panel may include <a href="#">multiple links</a> or buttons.' ),
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
		reverse: {
			type: 'boolean',
			default: false,
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
		contentWrapper: {
			type: 'string',
		},
	},

	edit( { attributes, className, setAttributes } ) {
		// Generate the image or the add image section
		const getImageButton = ( openEvent ) => {
			if ( attributes.mediaID || attributes.img ) {
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

		setAttributes( { contentWrapper: '' } );

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
							<Toolbar label="Choose media">
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
										<ToolbarButton
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
												isSecondary
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
