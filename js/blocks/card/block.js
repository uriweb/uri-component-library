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
			classes = ['cl-card', args.className, args.alignment].join(' '); 
			return el( 'a', { className: classes , href: args.link }, 
				el( 'img', { src: args.img, alt: args.alt, 'data-id': args.mediaID } ),
				el( 'div', { className: 'cl-card-text' }, 
					el( 'h3', {}, args.title ),
					el( 'p', {}, args.body )
				),
				el( 'div', { className: 'cl-button' }, args.button )
			);
		}
	}

	/**
	 * Render the shortcode
	 */
	function buildShortCode( args ) {		
//		var attributes = Object.keys(args).map(e => (`${e}="${args[e]}"`));
//		var as = attributes.join(' ');
//		return '[cl-card ' + as + ']';

		// unfortunately, Gutenberg cares a lot about the order in which attributes appear, 
		// so this process is best done manually.

		var shortcode = '[cl-card ';
		if(args.title) {
			shortcode += ' title="' + args.title + '"';
		}
		if(args.body) {
			shortcode += ' body="' + args.body + '"';
		}
		if(args.link) {
			shortcode += ' link="' + args.link + '"';
		}
		if(args.mediaID) {
			shortcode += ' mediaID="' + args.mediaID + '"';
		}
		if(args.img) {
			shortcode += ' img="' + args.img + '"';
		}
		if(args.alt) {
			shortcode += ' alt="' + args.alt + '"';
		}
		if(args.button) {
			shortcode += ' button="' + args.button + '"';
		}
		if(args.className) {
			shortcode += ' class="' + args.className + '"';
		}
		if(args.alignment == 'left' || args.alignment == 'right' ) {
			shortcode += ' float="' + args.alignment + '"';
		}
				
		shortcode += ']';
		
		return shortcode;
		
	}

	
	// rather than store attributes in HTML and use selectors to parse them out,
	// store data as text attributes.
	// Why?  because WP mangles the HTML in and out of the editor,
	// so it remove the data you're hoping store.
	// This way, we keep things neatly based upon shortcodes, and we lose no data.
	blocks.registerBlockType( 'uri-gutenberg/card', {
		title: i18n.__('Card'),
		description: i18n.__( 'A step up from a button, a link with an image and description.' ),
		icon: customIcon,
		category: 'widgets',
		attributes: {
			title: {
				type: 'string',
			},
			body: {
				type: 'string',
			},
			link: {
				type: 'string',
			},
			mediaID: {
				type: 'number',
			},
			img: {
				type: 'string',
			},
			alt: {
				type: 'string',
			},
			button: {
				type: 'string',
			},
			alignment: {
				type: 'string',
			}
		},

		edit: function( props ) {
					
			var focus = props.focus;
			var focusedEditable = props.focus ? props.focus.editable || 'title' : null;
			var alignment = props.attributes.alignment;

			var attributes = props.attributes;
			var content = [];
			
						
			var onSelectImage = ( media ) => {
				props.setAttributes( {
					img: media.url.toString(),
					alt: media.alt.toString(),
					mediaID: media.id
				} );
			};

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

				return el( 'a', { className: 'cl-card has-focus', href: '#' }, 

					el(
						blocks.BlockControls,
						{ key: 'controls' },
						el(
							blocks.BlockAlignmentToolbar,
							{
								value: attributes.alignment,
								onChange: onChangeBlockAlignment
							}
						)
					),
            
 					el( 'div', { className: props.className },
 						el( 'img', {
 							className: attributes.img ? 'uri-gutenberg-image image-active' : 'uri-gutenberg-image image-inactive',
 							src: attributes.img ? attributes.img : ''
 						}),
 						el( blocks.MediaUpload, {
 							onSelect: onSelectImage,
 							type: 'image',
 							value: attributes.mediaID,
 							render: function( obj ) {
								return el( components.Button, {
										className: attributes.mediaID ? 'button button-large image-button' : 'button button-large image-button add-image',
										onClick: obj.open
									},
									! attributes.mediaID ? i18n.__( 'Add Image' ) : i18n.__( 'Replace Image' )
								);
 							}
 						}),
 					),


					el( 'div', { className: 'cl-card-text' }, 

						el( 'label', { className:''}, i18n.__( 'Title' ) ),
						el( blocks.RichText, {
							tagName: 'h3',
							inline: false,
							value: attributes.title,
							className: '',
							multiline: false,
							formattingControls: [],
							onChange: function( newTitle ) {
								props.setAttributes( { title: newTitle } );
							},
							focus: focusedEditable === 'title' ? focus : null,
							onFocus: function( focus ) {
								props.setFocus( _.extend( {}, focus, { editable: 'title' } ) );
							},
							placeholder: 'Title',
						}),

						el( 'label', { className:''}, i18n.__( 'Body' ) ),						
						el( blocks.RichText, {
							tagName: 'p',
							inline: true,
							value: attributes.body,
							onChange: function( newBody ) {
								props.setAttributes( { body: newBody } );
							},
							focus: focusedEditable === 'body' ? focus : null,
							onFocus: function( focus ) {
								props.setFocus( _.extend( {}, focus, { editable: 'body' } ) );
							},
							placeholder: 'Write the body here...',
						}),

						el( 'label', { className:''}, i18n.__( 'Link' ) ),
						el( blocks.UrlInput, {
							tagName: 'p',
							className: '',
							inline: false,
							placeholder: i18n.__( 'Link' ),
							value: attributes.link,
							formattingControls: [],
							onChange: function( newLink ) {
								props.setAttributes( { link: newLink } );
							},
							focus: focusedEditable === 'link' ? focus : null,
							onFocus: function( focus ) {
								props.setFocus( _.extend( {}, focus, { editable: 'link' } ) );
							},
						}),

						el( 'label', { className:''}, i18n.__( 'Button Text' ) ),
						el( blocks.RichText, {
							tagName: 'p',
							className: '',
							inline: false,
							placeholder: i18n.__( 'Explore' ),
							value: attributes.button,
							formattingControls: [],
							onChange: function( newval ) {
								props.setAttributes( { button: newval } );
							},
							focus: focusedEditable === 'button' ? focus : null,
							onFocus: function( focus ) {
								props.setFocus( _.extend( {}, focus, { editable: 'button' } ) );
							},
						}),

						 
						 
					),
					
				); // end fieldset
			}


			if ( props.isSelected ) {
				// display the editor form that accepts the shortcode input
				content.push( createForm( props ) );
			} else {
				content.push( shortcodeEditorPreview( props.attributes ) );
			}
						
			return el( 'div', { className: 'card-wrapper' }, content );

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

