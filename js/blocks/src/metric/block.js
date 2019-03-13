const { __ } = wp.i18n;
const {
	registerBlockType
} = wp.blocks;

const {
	PanelBody,
	PanelRow,
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
	Toolbar,
	IconButton,
	BlockAlignmentToolbar,
} = wp.editor;

const customIcon = () => {
	return(
		<img
			width="20"
			height="20"
			className="dashicon"
			src={(URI_CL_URL + 'i/metric.png')}
			alt="metric"
		/>
	);
}

const classNames = (attributes) => {
	let classes = "cl-metric";
	if( !! attributes.className ) {
		// @todo this gets automatically applied to wrapper... remove it?
		classes += " " + attributes.className
	}
	if( !! attributes.style ) {
		classes += " " + attributes.style
	}
	if( !! attributes.alignment ) {
		classes += " " + attributes.alignment
	}
	return classes;
}


registerBlockType('uri-cl/metric', {   

  title: __('Metric'),
  icon: customIcon,
  category: 'cl-blocks',
  
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
		alignment: {
			type: 'string',
		}
	},

	
	edit({ attributes, className, setAttributes }) {

		// generate editor view of the card itself
		const createContentEditForm = () => {
			let classes = classNames(attributes);
			
			console.log(classes);
			
			// set the tooltip
			let title = "";
			if( !! attributes.tooltip ) {
				title = attributes.tooltip;
			}
			return (
				<div className="container cl-metric-block-form">
					<div className={classes} title={title}>
						<span><PlainText
							onChange={ content => setAttributes({ metric: content }) }
							value={ attributes.metric }
							placeholder={__("100%")}
							keepPlaceholderOnFocus={true}
						/></span>
						<span><PlainText
							onChange={ content => setAttributes({ caption: content }) }
							tagname="p"
							value={ attributes.caption }
							placeholder={__("metrics on this page")}
							keepPlaceholderOnFocus={true}
						/></span>

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

		// generate sidebar inspector controls for other custom attributes
		const createInspectorControls = () => {
			return(
				<InspectorControls>
					<PanelBody>
						<PanelRow>
							<TextControl
								label="Tool tip"
								onChange={ content => setAttributes({ tooltip: content }) }
								value={ attributes.tooltip }
								className="meta-field"
							/>
						</PanelRow>
						<PanelRow>
							<BaseControl
								label={ __( "Metric Style" ) }
							>
								<ButtonGroup aria-label={ __( "Metric Style" ) }>
									{ [ "standard", "clear", "dark", "overlay" ].map( ( value ) => {

										const capitalizedValue = value.charAt(0).toUpperCase() + value.slice(1);
										const key = (value === "default") ? '' : value;
										const isSelected = key === attributes.style;
									
										return (
											<Button
												key={ key }
												isDefault
												isPrimary={ isSelected }
												aria-pressed={ isSelected }
												onClick={ content => setAttributes({ style: key }) }
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
		}

		// send the editor interfaces to the view
  	return ([
			createBlockControls(),
			createInspectorControls(),
			createContentEditForm()
  	]);
  	
	}, // end edit
	
	save({ attributes }) {

		let classes = classNames(attributes);

		let title = "";
		if( !! attributes.tooltip ) {
			title = attributes.tooltip;
		}

		return (
			<div class={classes} title={title}>
				<span>{ attributes.metric }</span>
				<span>{ attributes.caption }</span>
			</div>
		);


	}
	
	
});

