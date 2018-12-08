const { __ } = wp.i18n;
const { registerBlockType } = wp.blocks;
const {
	PlainText,
	RichText,
	InspectorControls,
	BlockControls,
	Toolbar,
	IconButton,
	BlockAlignmentToolbar
} = wp.editor;
const {
	PanelBody,
	PanelRow,
	BaseControl,
	TextControl,
	Button,
	ButtonGroup
} = wp.components;


const customIcon = () => {
	return(
		<img
			width="20"
			height="20"
			className="dashicon"
			src={(URI_CL_URL + 'i/button.png')}
			alt="button"
		/>
	);
}




/**
 * Render the shortcode
 */
function buildShortCode( args ) {
		// unfortunately, Gutenberg cares a lot about the order in which attributes appear,
		// so this process is best done manually.
		var shortcode = '[cl-button ';
		if (args.link) {
			shortcode += ' link="' + args.link + '"';
		}
		if (args.text) {
			shortcode += ' text="' + args.text + '"';
		}
		if (args.tooltip) {
			shortcode += ' tooltip="' + args.tooltip + '"';
		}
		if (args.style) {
			shortcode += ' style="' + args.style + '"';
		}
		if (args.className) {
			shortcode += ' class="' + args.className + '"';
		}

		shortcode += ']';

		return shortcode;

}

registerBlockType('uri-cl/button', {   

  title: __('Button'),
  icon: customIcon,
  category: 'cl-blocks',
  
	attributes: {
		link: {
			type: 'string',
		},
		text: {
			type: 'string',
		},
		tooltip: {
			type: 'string',
		},
		style: {
			type: 'string',
		},
	},
	

	
	edit({ attributes, className, setAttributes, isSelected }) {

		// generate editor view of the card itself
		const createContentEditForm = () => {

			let meta;
			if ( !! isSelected ) {
				meta = (
					<div class="meta">
						<label>Links to:</label>
						<PlainText
							onChange={ content => setAttributes({ link: content }) }
							value={ attributes.link }
							placeholder="https://www.uri.edu/"
							className="meta-field"
						/>
					</div>
				)
			}
			
			return (
				<div className="container">
					<div class="cl-button">
						<PlainText
							onChange={ content => setAttributes({ text: content }) }
							value={ attributes.text }
							placeholder={__("Your button text")}
							keepPlaceholderOnFocus={true}
							className="cl-button"
						/>
					</div>
					{ meta }
				</div>
			);
		}

		// generate block controls for alignment, etc
		// @todo: do we need alignment/float controls on buttons?
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
							<BaseControl
								label={ __( "Button Style" ) }
							>
								<ButtonGroup aria-label={ __( "Button Style" ) }>
									{ [ "default", "prominent", "disabled" ].map( ( value ) => {

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
		}

		// send the editor interfaces to the view
  	return ([
			//createBlockControls(),
			createInspectorControls(),
			createContentEditForm()
  	]);
  	
	}, // end edit
	
	save({ attributes }) {

		var o = wp.element.createElement( wp.element.RawHTML, null, buildShortCode( attributes ) );
		// console.log(o);
		return o;
		
	}
	
	
});

