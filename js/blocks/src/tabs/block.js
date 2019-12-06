const { __ } = wp.i18n;
const {
	registerBlockType
} = wp.blocks;

const {
	PanelBody,
	PanelRow,
	RangeControl
} = wp.components;

const {
	InspectorControls,
	InnerBlocks
} = wp.blockEditor;


const ALLOWED_BLOCKS = [
	'uri-cl/tab'
];


const customIcon = () => {
	return(
		<img
			width="20"
			height="20"
			className="dashicon"
			src={(URI_CL_URL + 'i/tabs.png')}
			alt="button"
		/>
	);
}

const classNames = (attributes) => {
	let classes = "cl-tabs";
	if( !! attributes.className ) {
		// @todo this gets automatically applied to wrapper... remove it?
		classes += " " + attributes.className
	}
	return classes;
}

const getTabsTemplate = ( tabs ) => {

	return [...Array(tabs)].map(function(x){
		return ['uri-cl/tab', {}];
	});
	
}



registerBlockType('uri-cl/tabs', {   

  title: __('Tabs'),
  icon: customIcon,
  category: 'cl-blocks',
  
	attributes: {
		tabs: {
			type: 'number',
			default: 2,
		},
	},

	
	edit({ attributes, className, setAttributes }) {

		// generate the image or the add image section

		let classes = classNames(attributes);

		// generate sidebar inspector controls for other custom attributes
		const createInspectorControls = () => {
			return(
				<InspectorControls>
					<PanelBody>
						<PanelRow>
							<RangeControl
								label={ __( "Tabs" ) }
								value={ attributes.tabs }
								onChange={ ( nextTabs ) => {
									setAttributes( {
										tabs: nextTabs,
									} );
								} }
								min={ 2 }
								max={ 6 }
							/>
						</PanelRow>
					</PanelBody>
				</InspectorControls>
			);
		}
  

		const createContentEditForm = () => {
			return (
				<div className="container">
					<div class={classes}>
							<InnerBlocks
								template={ getTabsTemplate( attributes.tabs ) }
								templateLock="all"
								allowedBlocks={ ALLOWED_BLOCKS } />
					</div>
				</div>
			);
		}

		// send the editor interfaces to the view
  	return ([
  		createInspectorControls(),
			createContentEditForm()
  	]);
  	
	}, // end edit
	
	save({ attributes }) {

		let classes = classNames(attributes);

		return (
			<div class={classes}>	
				<InnerBlocks.Content />
			</div>
		);
	}
	
	
});

