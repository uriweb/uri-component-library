const { __ } = wp.i18n;
const { registerBlockType } = wp.blocks;
const {
	PlainText,
	RichText,
	URLInput,
	InspectorControls,
	BlockControls,
	Toolbar,
	BlockAlignmentToolbar
} = wp.blockEditor;
const {
	Dashicon,
	PanelBody,
	PanelRow,
	BaseControl,
	TextControl,
	Button,
	ButtonGroup
} = wp.components;

const customIcon = () => {
	return (
		<img
			width="20"
			height="20"
			className="dashicon"
			src={( URI_CL_URL + 'i/button.png' )}
			alt="button"
		/>
	);
};

const classNames = ( attributes, isSelected ) => {
	let classes = 'cl-button';
	if ( !! attributes.className ) {

		// @todo this gets automatically applied to wrapper... remove it?
		classes += ' ' + attributes.className;
	}
	if ( !! attributes.alignment ) {
		classes += ' ' + attributes.alignment;
	}
	if ( !! attributes.style ) {
		classes += ' ' + attributes.style;
	}
	if ( !! isSelected ) {
		classes += ' selected';
	}

	return classes;
};

registerBlockType( 'uri-cl/button', {

	title: __( 'Button' ),
	icon: customIcon,
	category: 'cl-blocks',
	attributes: {
		link: {
			type: 'string'
		},
		text: {
			type: 'string'
		},
		tooltip: {
			type: 'string'
		},
		style: {
			type: 'string'
		}
	},

	edit( { attributes, className, setAttributes, isSelected } ) {

		// Generate editor view of the button itself
		const createContentEditForm = () => {

			let meta;
			if ( !! isSelected ) {
				meta = (
					<form
						className="meta"
						onSubmit={ ( event ) => event.preventDefault() }
					>
						<fieldset class="row link">
						<label title="Links to:"><Dashicon icon="admin-links" /></label>
						<URLInput
							value={ attributes.link }
							onChange={ ( content ) => setAttributes( { link: content } ) }
							placeholder="https://www.uri.edu/"
							className="meta-field"
						/>
						</fieldset>
					</form>
				);
			}

			// Set the classnames
			let classes = classNames( attributes, isSelected );

			// Set the tooltip
			let title = '';
			if ( !! attributes.tooltip ) {
				title = attributes.tooltip;
			}
			return (
				<div className="container cl-button-block-form">
					<span class={classes} title={title}>
						<PlainText
							onChange={ content => setAttributes( { text: content } ) }
							value={ attributes.text }
							placeholder={ __( 'Your button text' ) }
							keepPlaceholderOnFocus={ true }
							className="cl-button"
						/>
					</span>
					{ meta }
				</div>
			);
		};

		// Generate block controls for alignment, etc
		// @todo: do we need alignment/float controls on buttons?
		const createBlockControls = () => {
			return (
				<BlockControls key="controls">
					<BlockAlignmentToolbar
						value={ attributes.alignment }
						onChange={ content => setAttributes( { alignment: content } ) }
					/>
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
								label={ __( 'Button Style' ) }
							>
								<ButtonGroup aria-label={ __( 'Button Style' ) }>
									{ [ 'default', 'prominent', 'disabled' ].map( ( value ) => {

										const capitalizedValue = value.charAt( 0 ).toUpperCase() + value.slice( 1 );
										const key = ( 'default' === value ) ? '' : value;
										const style = ( undefined == attributes.style ) ? '' : attributes.style;
										const isSelected = ( key === style );

										return (
											<Button
												key={ key }
												isDefault
												isPrimary={ isSelected }
												aria-pressed={ isSelected }
												onClick={ content => setAttributes( { style: key } ) }
											>
												{ capitalizedValue }
											</Button>
										);
									} ) }
								</ButtonGroup>
							</BaseControl>
						</PanelRow>

						<PanelRow>
							<TextControl
								label="Tool tip"
								onChange={ content => setAttributes({ tooltip: content }) }
								value={ attributes.tooltip }
								className="meta-field"
							/>
						</PanelRow>

					</PanelBody>
				</InspectorControls>
			);
		};

	// Send the editor interfaces to the view
	return ([
		createInspectorControls(),
		createContentEditForm()
	]);

	} // End edit

});
