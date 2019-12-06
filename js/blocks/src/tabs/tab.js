const { __ } = wp.i18n;
const {
	registerBlockType
} = wp.blocks;
const {
	InnerBlocks
} = wp.blockEditor;

const customIcon = () => {
	return(
		<img
			width="20"
			height="20"
			className="dashicon"
			src={(URI_CL_URL + 'i/tab.png')}
			alt="button"
		/>
	);
}


registerBlockType('uri-cl/tab', {   

  title: __('Tab'),
  icon: customIcon,
  parent: [ 'uri-cl/tabs' ],
  category: 'cl-blocks',
  
	supports: {
		inserter: false,
		reusable: false,
		html: false,
	},

	
	edit({ attributes, className }) {
		return (
			<div class="cl-tab">
				<InnerBlocks templateLock={ false } />
			</div>
		)
	}, // end edit
	
	save({ attributes }) {
		return (
			<div class="cl-tab">
				<InnerBlocks.Content />
			</div>
		)
	}
	
	
});

