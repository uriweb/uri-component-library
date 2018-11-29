// https://neliosoftware.com/blog/how-to-create-your-first-block-for-gutenberg/
(function ( editor, blocks, components, element, i18n ) {

	var el = element.createElement;
	
	var customIcon = el('img', {
		width: 20,
		height: 20,
		className: "dashicon",
		src: URI_CL_URL + 'i/button.png',
		alt: 'button'
	});

	/**
	 * The preview that renders in the block editor
	 */
	function shortcodeEditorPreview( args ) {
			
		var shortcode = buildShortCode( args );
	
		if(args.link) {
			return renderHTML( args );
		} else {
			return el( 'div', { className: 'uri-gutenberg-shortcode-button' }, 
				el( 'p', {}, 'Buttons must have a value for the Link field.' ),
				shortcode
			);
		}
		
	}

	/**
	 * Render the HTML
	 */
	function renderHTML( args ) {
		var classes;
		buildShortCode( args );
		if(args.link) {
			classes = [ 'cl-button', args.className, args.style ].join(' '); 
			return el( 'a', { className: classes , href: args.link, title: args.tooltip }, args.text );
		}
	}

	/**
	 * Assemble the shortcode
	 */
	function buildShortCode( args ) {		
		// unfortunately, Gutenberg cares a lot about the order in which attributes appear, 
		// so this process is best done manually.
		
		var shortcode = '[cl-button ';
		if(args.link) {
			shortcode += ' link="' + args.link + '"';
		}
		if(args.text) {
			shortcode += ' text="' + args.text + '"';
		}
		if(args.tooltip) {
			shortcode += ' tooltip="' + args.tooltip + '"';
		}
		if(args.style) {
			shortcode += ' style="' + args.style + '"';
		}
		if(args.className) {
			shortcode += ' class="' + args.className + '"';
		}
				
		shortcode += ']';
		
		return shortcode;
		
	}

	
	// rather than store attributes in HTML and use selectors to parse them out,
	// store data as text attributes.
	// Why?  because WP mangles the HTML in and out of the editor,
	// so it remove the data you're hoping store.
	// This way, we keep things neatly based upon shortcodes, and we lose no data.
	blocks.registerBlockType( 'uri-gutenberg/button', {
		title: i18n.__('Button'),
		description: i18n.__( 'Great for a call to action.' ),
		icon: 'carrot',
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

		edit: function( props ) {
					
			var focus = props.focus;
			var focusedEditable = props.focus ? props.focus.editable || 'link' : null;
			var alignment = props.attributes.alignment;

			var attributes = props.attributes;
			var content = [];
			
			/**
			 * Builds the form in the block editor
			 */
			function createForm( ) {

				editor = wp.editor;

				return el( 'div', { className: props.className + ' cl-button-form' },

						el( 'label', { className:''}, i18n.__( 'Link' ) ),
						el( editor.URLInput, {
							tagName: 'div',
							inline: false,
							value: attributes.link,
							className: 'field',
							multiline: false,
							formattingControls: [],
							onChange: function( newValue ) {
								props.setAttributes( { link: newValue } );
							},
							focus: focusedEditable === 'link' ? focus : null,
							onFocus: function( focus ) {
								props.setFocus( _.extend( {}, focus, { editable: 'link' } ) );
							},
							placeholder: 'Link',
						}),

						el( 'label', { className:''}, i18n.__( 'Button Text' ) ),
						el( editor.RichText, {
							tagName: 'div',
							className: 'field',
							inline: false,
							placeholder: i18n.__( 'Text' ),
							value: attributes.text,
							formattingControls: [],
							onChange: function( newValue ) {
								props.setAttributes( { text: newValue } );
							},
							focus: focusedEditable === 'text' ? focus : null,
							onFocus: function( focus ) {
								props.setFocus( _.extend( {}, focus, { editable: 'text' } ) );
							},
						}),

						el( 'label', { className:''}, i18n.__( 'Tooltip' ) ),
						el( editor.RichText, {
							tagName: 'div',
							className: 'field',
							inline: false,
							placeholder: i18n.__( 'Explore' ),
							value: attributes.tooltip,
							formattingControls: [],
							onChange: function( newVal ) {
								props.setAttributes( { tooltip: newVal } );
							},
							focus: focusedEditable === 'tooltip' ? focus : null,
							onFocus: function( focus ) {
								props.setFocus( _.extend( {}, focus, { editable: 'tooltip' } ) );
							},
						}),

						el( 'label', { className:''}, i18n.__( 'Style' ) ),
						el( editor.RichText, {
							tagName: 'div',
							className: 'field',
							inline: false,
							value: attributes.style,
							formattingControls: [],
							onChange: function( newVal ) {
								props.setAttributes( { style: newVal } );
							},
							focus: focusedEditable === 'style' ? focus : null,
							onFocus: function( focus ) {
								props.setFocus( _.extend( {}, focus, { editable: 'style' } ) );
							},
						}),						 
						el( 'p', { className:'description'}, 'Style can be blank, prominent, or disabled' ),
					);
					
			}


			if ( props.isSelected ) {
				// display the editor form that accepts the shortcode input
				content.push( createForm( props ) );
			} else {
				content.push( shortcodeEditorPreview( props.attributes ) );
			}
						
			return el( 'div', { className: 'button-wrapper' }, content );

		},
		

		/**
		 * this is what gets saved to the database and displayed on pages
		 * Just the shortcode gets the work done.
		 */
		save: function( props ) {
			
			return buildShortCode( props.attributes );

		}


	} );

})(
	window.wp.editor,
	window.wp.blocks,
	window.wp.components,
	window.wp.element,
	window.wp.i18n
);

