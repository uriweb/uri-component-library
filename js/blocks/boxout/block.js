// https://neliosoftware.com/blog/how-to-create-your-first-block-for-gutenberg/
(function ( blocks, components, element, i18n ) {

	var componentName = 'boxout';

	var el = element.createElement;
	
	var customIcon = el('img', {
		width: 20,
		height: 20,
		className: "dashicon",
		src: URI_CL_URL + 'i/' + componentName + '.png',
		alt: componentName
	});

	/**
	 * The preview that renders in the block editor
	 */
	function shortcodeEditorPreview( args ) {
		return renderHTML( args );
	}

	/**
	 * Render the HTML
	 */
	function renderHTML( args ) {
		var classes;			
		classes = [ 'cl-' + componentName, args.className, args.alignment ].join(' '); 
		
		return el( 'div', { className: classes }, 
			el( wp.editor.RichText.Content, { tagName: 'h1', value: args.title }),
			el( wp.editor.RichText.Content, { tagName: 'div', value: args.body })
		);
	}

	/**
	 * Assemble the shortcode
	 */
	function buildShortCode( args ) {		
		// unfortunately, Gutenberg cares a lot about the order in which attributes appear, 
		// so this process is best done manually.
		
		var shortcode = '[cl-' + componentName + ' ';
		if(args.title) {
			shortcode += ' title="' + args.title + '"';
		}
		if(args.alignment == 'left' || args.alignment == 'right' ) {
			shortcode += ' float="' + args.alignment + '"';
		}
		if(args.className) {
			shortcode += ' class="' + args.className + '"';
		}
				
		shortcode += ']' + args.body + '[/cl-' + componentName + ']';

		return shortcode;
		
	}

	
	// rather than store attributes in HTML and use selectors to parse them out,
	// store data as text attributes.
	// Why?  because WP mangles the HTML in and out of the editor,
	// so it remove the data you're hoping store.
	// This way, we keep things neatly based upon shortcodes, and we lose no data.
	blocks.registerBlockType( 'uri-gutenberg/' + componentName, {
		title: i18n.__('Boxout'),
		description: i18n.__( 'Use to offer content that supports or is tangental to the main message.' ),
		icon: customIcon,
		category: 'cl-blocks',
		attributes: {
			title: {
				type: 'string',
			},
			body: {
				type: 'string',
			},
			alignment: {
				type: 'string',
			},
		},

		edit: function( props ) {
					
			var focus = props.focus;
			var focusedEditable = props.focus ? props.focus.editable || 'link' : null;
			var alignment = props.attributes.alignment;

			var attributes = props.attributes;
			var content = [];

			var onChangeBlockAlignment = ( alignment ) => {
				// possible values: left, right, center
				props.setAttributes( {
					'alignment': alignment
				} );
			};
			
			/**
			 * Builds the form in the block editor
			 */
			function createForm( ) {
			
				editor = wp.editor;

				return el( 'div', { className: props.className + ' cl-' + componentName + '-form' },

					el(
						wp.editor.BlockControls,
						{ key: 'controls' },
						el(
							editor.BlockAlignmentToolbar,
							{
								value: attributes.alignment,
								onChange: onChangeBlockAlignment
							}
						)
					),

					el( 'label', { className:''}, i18n.__( 'Title' ) ),
					el( editor.RichText, {
						tagName: 'p',
						inline: false,
						value: attributes.title,
						className: 'field',
						multiline: false,
						formattingControls: [],
						onChange: function( newValue ) {
							props.setAttributes( { title: newValue } );
						},
						focus: focusedEditable === 'title' ? focus : null,
						onFocus: function( focus ) {
							props.setFocus( _.extend( {}, focus, { editable: 'title' } ) );
						},
						placeholder: i18n.__( 'Title' ),
					}),

					el( 'label', { className:''}, i18n.__( 'Body' ) ),
					el( editor.RichText, {
						tagName: 'div',
						inline: true,
						multiline: 'p',
						value: attributes.body,
						onChange: function( newBody ) {
							props.setAttributes( { body: newBody } );
						},
						focus: focusedEditable === 'body' ? focus : null,
						onFocus: function( focus ) {
							props.setFocus( _.extend( {}, focus, { editable: 'body' } ) );
						},
						placeholder: i18n.__( 'Write the body here...' ),
					}),
				);
					
			}


			if ( props.isSelected ) {
				// display the editor form that accepts the shortcode input
				content.push( createForm( props ) );
			} else {
				content.push( shortcodeEditorPreview( props.attributes ) );
			}
						
			return el( 'div', { className: componentName + '-wrapper' }, content );

		},
		

		/**
		 * this is what gets saved to the database and displayed on pages
		 * Just the shortcode gets the work done.
		 */
		save: function( props ) {
			console.log('save');
			console.log(props);
			console.log(buildShortCode( props.attributes ));
			
			return buildShortCode( props.attributes );

		}


	} );

})(
	window.wp.blocks,
	window.wp.components,
	window.wp.element,
	window.wp.i18n
);

