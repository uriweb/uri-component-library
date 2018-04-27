// https://neliosoftware.com/blog/how-to-create-your-first-block-for-gutenberg/
(function ( blocks, components, element, i18n ) {

	var el = element.createElement;
	
	var customIcon = el('svg', { width: 20, height: 20, className: "dashicon" },
		el('path', { d: "M2,8 L2,16 L16,16 L16,8 L2,8 Z M2,7 L16,7 L16,2 L2,2 L2,7 Z M18,1 L18,17 C18,17 18,18 18,18 C18,18 17,18 17,18 L1,18 C1,18 0,18 0,18 C0,18 0,17 0,17 L0,1 C0,1 0,0 0,0 C0,0 1,0 1,0 L17,0 C17,0 18,0 18,0 C18,0 18,1 18,1 Z M15,15 L3,15 L3,12 L15,12 L15,15 Z" } )
	);

	/**
	 * The preview that renders in the block editor
	 */
	function shortcodeEditorPreview( args ) {
			
		var shortcode = buildShortCode( args );
	
		if(args.link) {
			return renderHTML( args );
		} else {
			return el( 'div', { className: 'uri-gutenberg-shortcode-card' }, 
				el( 'p', {}, 'Cards must have a value for the Link field.' ),
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
			classes = ['cl-button', args.className, args.style].join(' '); 
			return el( 'a', { className: classes , href: args.link, title: args.tooltip }, args.text );
		}
	}

	/**
	 * Assemble the shortcode
	 */
	function buildShortCode( args ) {		
//		var attributes = Object.keys(args).map(e => (`${e}="${args[e]}"`));
//		var as = attributes.join(' ');
//		return '[cl-card ' + as + ']';

		// unfortunately, Gutenberg cares a lot about the order in which attributes appear, 
		// so this process is best done manually.

		var shortcode = '[cl-button ';
		if(args.link) {
			shortcode += ' link="' + args.title + '"';
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
		icon: 'carrot',
		//icon: customIcon,
		category: 'widgets',
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
				type: 'number',
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

				return el( 'div', { className: props.className + ' cl-button-form' },

						el( 'label', { className:''}, i18n.__( 'Link' ) ),
						el( blocks.UrlInput, {
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
						el( blocks.RichText, {
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
						el( blocks.RichText, {
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
						el( blocks.RichText, {
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
	window.wp.blocks,
	window.wp.components,
	window.wp.element,
	window.wp.i18n
);

