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
} = wp.blockEditor;

const customIcon = () => {
	return (
		<img
			width="20"
			height="20"
			className="dashicon"
			src={ ( URI_CL_URL + 'i/icons/metric.svg' ) }
			alt="metric"
		/>
	);
};

const classNames = ( attributes, isSelected ) => {
	let classes = 'cl-metric';
	if ( !! attributes.className ) {
		// @todo this gets automatically applied to wrapper... remove it?
		classes += ' ' + attributes.className;
	}
	if ( !! isSelected ) {
		classes += ' selected';
	}
	if ( !! attributes.style ) {
		classes += ' ' + attributes.style;
	}
	if ( !! attributes.float ) {
		classes += ' ' + attributes.float;
	}
	return classes;
};

registerBlockType( 'uri-cl/metric', {

	title: __( 'Metric' ),
	icon: customIcon,
	category: 'cl-blocks',
	description: __( 'Use metrics to illustrate a fact that is concise and easy to consume.' ),
	example: {
		attributes: {
			metric: __( '40K' ),
			caption: __( 'Leagues under the sea' ),
			style: 'dark',
		},
	},
	attributes: {
		metric: {
			type: 'string',
		},
		caption: {
			type: 'string',
		},
		style: {
			type: 'string',
		},
		float: {
			type: 'string',
		},
	},

	edit( { attributes, className, setAttributes, isSelected } ) {
		// Generate editor view of the card itself
		const createContentEditForm = () => {
			const classes = classNames( attributes, isSelected );

			// Set the tooltip
			let title = '';
			if ( !! attributes.tooltip ) {
				title = attributes.tooltip;
			}
			return (
				<div className="container cl-metric-block-form">
					<div className={ classes } title={ title }>
						<span><PlainText
							onChange={ ( content ) => setAttributes( { metric: content } ) }
							value={ attributes.metric }
							placeholder={ __( '100%' ) }
							keepPlaceholderOnFocus={ true }
						/></span>
						<span><PlainText
							onChange={ ( content ) => setAttributes( { caption: content } ) }
							tagname="p"
							value={ attributes.caption }
							placeholder={ __( 'metrics on this page' ) }
							keepPlaceholderOnFocus={ true }
						/></span>

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

		// Generate sidebar inspector controls for other custom attributes
		// @todo: technically, you can have a clear and dark metric
		// our buttongroup only allows users to select one
		const createInspectorControls = () => {
			return (
				<InspectorControls>
					<PanelBody>
						<PanelRow>
							<TextControl
								label="Tool tip"
								onChange={ ( content ) => setAttributes( { tooltip: content } ) }
								value={ attributes.tooltip }
								className="meta-field"
							/>
						</PanelRow>
						<PanelRow>
							<BaseControl
								label={ __( 'Metric Style' ) }
								id="metric-style"
							>
								<ButtonGroup aria-label={ __( 'Metric Style' ) }>
									{ [ 'standard', 'clear', 'dark', 'overlay' ].map( ( value ) => {
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
			createBlockControls(),
			createInspectorControls(),
			createContentEditForm(),
		] );
	}, // End edit

} );
