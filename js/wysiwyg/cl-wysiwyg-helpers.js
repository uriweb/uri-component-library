/**
 * WYSIWYG Helper Function
 *
 * @package uri-component-library
 */

// jshint esversion: 6
// jscs:disable requireVarDeclFirst
class URIWYSIWYG {

	/**
	 * Escapes quotes on every element in an array (if element is a string)
	 */
	static escapeQuotesDeep( a ) {
		var i;
		for ( i in a ) {
			if ( 'string' === typeof a[i] ) {
				a[i] = this.escapeQuotes( a[i] );
			}
		}
		return a;
	}

	/**
	 * Replace quotes with curly quotes
	 */
	static escapeQuotes( s ) {
		s = s.replace( /"\b/g, '&#8220;' );
		s = s.replace( /"/g, '&#8221;' );
		return s;
	}

	/**
	 * Unescapes quotes on every element in an array (if element is a string)
	 */
	static unEscapeQuotesDeep( a ) {
		var i;
		for ( i in a ) {
			if ( 'string' === typeof a[i] ) {
				a[i] = this.unEscapeQuotes( a[i] );
			}
		}
		return a;
	}

	/**
	 * Replace %25 with "
	 */
	static unEscapeQuotes( s ) {
		return s.replace( /%25/g, '"' );
	}

	/**
	 * Replace HTML ASCII characters with their HTML entities
	 * Specifically, replace &, ", ', <, and >
	 * note: replaces straight quotes (double primes) with curly quotes
	 *
	 * @param str s
	 * @return str
	 */
	static htmlEscape( s ) {

		// Tend to quotes... using the entities here will cause the visual editor to
		// Display them literally, that's why this doesn't call escapeQuotes()
		// Replace all quotes before a word boundary with an opening curly quote
		s = s.replace( /"\b/g, '“' );

		// Replace the rest of the quotes with a closing curly quote
		s = s.replace( /"/g, '”' );

		// Replace single prime with curly apostrophe
		s = s.replace( /'\b/g, '‘' );
		s = s.replace( /'/g, '’' );

		return s
			.replace( /&/g, '&amp;' )
			.replace( /"/g, '&#34;' )
			.replace( /'/g, '&#39;' )
			.replace( /</g, '&lt;' )
			.replace( />/g, '&gt;' );
	}

	/**
	 * Replace HTML entities with their ASCII characters
	 *
	 * @see htmlEscape()
	 * @param str s
	 * @return str
	 */
	static htmlUnescape( s ) {

		// jscs:disable validateQuoteMarks
		return s
			.replace( /&#34;/g, '"' )
			.replace( /&#39;/g, "'" )
			.replace( /&lt;/g, '<' )
			.replace( /&gt;/g, '>' )
			.replace( /&amp;/g, '&' );

		// jscs:enable validateQuoteMarks
	}

	static getHTML( ed, shortcode, id, classes ) {

		// https://api.jquery.com/jQuery.ajax/
		jQuery.ajax(
			 wp.ajax.settings.url, {
					data: {
						action: 'uri_cl_wysiwyg',
						sc: shortcode
					},
					dataType: 'json',
					error: function( jqXHR, textStatus, errorThrown ) {
						console.log( 'failed to retrieve shortcode HTML.' );
						console.log( textStatus );
						console.log( errorThrown );
					},
					success: function( data, textStatus, jqXHR ) {

						var placeHolder, d;

						if ( ed.$ ) {

							placeHolder = ed.$( '#' + id );
							d = document.createElement( 'div' );

							if ( data.match( 'class="cl-card' ) ) {

								// Replace the <a class="cl-card"> element with a <div>
								// Because TinyMCE doesn't like block-level elements inside of inline elements
								data = data.replace( '<a ', '<div ' );
								data = data.replace( '</a>', '</div>' );

							}

							jQuery( d ).addClass( classes ).append( data );

							placeHolder.after( d.innerHTML );
							var el = placeHolder.next();

							el.attr(
								{
									'data-shortcode': window.encodeURIComponent( shortcode ),
									'contenteditable': 'false'
							}
								);
							el.addClass( classes );

							placeHolder.remove();
						}

					},
					done: function( data, textStatus, jqXHR ) {
						console.log( 'Done.' );
					}
		}
			);
	}

	/**
	 * Replace shortcode with HTML
	 *
	 * @param content string The editor content
	 * @param shortcodeName string The shortcode name
	 * @param selfclosing bool Whether or not the shortcode is self-closing
	 * @param ed obj The editor
	 */
	static replaceShortcodes( content, shortcodeName, selfclosing, ed ) {

		var re = selfclosing ? new RegExp( '\\[' + shortcodeName + '([^\\]]*)\\]', 'g' ) : new RegExp( '\\[' + shortcodeName + '[^]+?\\[/' + shortcodeName + '\\]', 'g' );

		return content.replace(
			 re, function( match ) {

				var safeData, classes, out, id;

				safeData = window.encodeURIComponent( match );
				classes = URIWYSIWYG.generateNonEditableClasses( shortcodeName );

				id = URIWYSIWYG.generateID();
				out = URIWYSIWYG.generateLoadingDiv( safeData, id );

				URIWYSIWYG.getHTML( ed, match, id, classes );
				return out;

			 }
			);
	}

	/**
	 * Insert/Replace multimedia content
	 *
	 * @param target obj The target component
	 * @param shortcode str The shortcode
	 * @param ed obj The editor instance
	 * @param cName mixed The component name
	 */
	static insertMultiMediaComponent( target, shortcode, ed, cName ) {

		var id;

		if ( target ) {
			id = URIWYSIWYG.generateID();
			jQuery( target ).replaceWith( URIWYSIWYG.generateLoadingDiv( window.encodeURIComponent( shortcode ), id ) );

			URIWYSIWYG.getHTML( ed, shortcode, id, URIWYSIWYG.generateNonEditableClasses( cName ) );

		} else {
			ed.execCommand( 'mceInsertContent', 0, shortcode );
		}

	}

	/**
	 * Generates the mceNonEditable classes
	 *
	 * @param name str The shortcode name
	 */
	static generateNonEditableClasses( name ) {

		return 'mceNonEditable ' + name + '-noneditable';

	}

	/**
	 * Generates a random ID
	 */
	static generateID() {

		return '_' + Math.random().toString( 36 ).substr( 2, 9 );

	}

	/**
	 * Generates the loading div
	 *
	 * @param data str The shortcode data
	 * @param id The random id
	 */
	static generateLoadingDiv( data, id ) {

		return '<div class="loading" data-shortcode="' + data + '" id="' + id + '">Loading...</div>';

	}

	/* Parses a short code and returns an array of attributes
	 * @param sc string The shortcode
	 */
	static parseShortCodeAttributes( sc ) {

		var attributes, atts, innerContent, x, t;

		attributes = {};
		atts = sc.match( /[\w-]+="[^"]*"/gi );

		for ( x in atts ) {
			t = atts[x].split( '=' );
			t[1] = t[1].replace( /"/gi, '' );
			attributes[t[0]] = t[1];
		}

		innerContent = sc.match( /\][^]+?\[/gi );
		if ( innerContent ) {
			attributes.content = innerContent[0].replace( /^\]|\[$/gi, '' ).trim();
		}

		return attributes;
	}

	/**
	 * Replace HTML with shortcode
	 *
	 * @param content string The editor content
	 * @param sc string The shortcode name
	 */
	static restoreShortcodes( content, sc ) {

		var html, componentElements, i, t;

		// Convert the content string into a DOM tree so we can parse it easily
		html = document.createElement( 'div' );
		html.innerHTML = content;
		componentElements = html.querySelectorAll( '.' + sc + '-noneditable' );

		// Var componentElements contains an array of the shortcodes
		for ( i = 0; i < componentElements.length; i++ ) {
			t = document.createTextNode( window.decodeURIComponent( componentElements[i].getAttribute( 'data-shortcode' ) ) );
			componentElements[i].parentNode.replaceChild( t, componentElements[i] );
		}

		// Return the DOM tree as a string
		var out = this.htmlUnescape( html.innerHTML );
		return out;

	}

	/**
	 * Invokes the wp media picker from a tinymce modal
	 */
	static mediaPicker( e ) {

		var picker;

		e.preventDefault();

		picker = wp.media.frames.picker = wp.media(
			{
				title: 'Select an image',
				button: { text: 'Add an image' },
				library: { type: [ 'image' ] },
				multiple: false
		}
			);

		picker.on(
			'select', function() {

				var imgurl, altEl, attachment, alt;

				imgurl = document.getElementById( 'img' );
				altEl = document.getElementById( 'alt' );

				attachment = picker.state().get( 'selection' ).first().toJSON();

				imgurl.value = attachment.sizes.full.url;

				if ( attachment.alt ) {
					alt = attachment.alt;
				} else if ( attachment.title ) {
					alt = attachment.title;
				} else {
					alt = '';
				}
				altEl.value = alt;

				URIWYSIWYG.mediaPickerPreview( imgurl.value, altEl.value );

			}
			);

		picker.open();

		return false;

	}

	static mediaPickerPreview( src, alt ) {

		var preview;

		preview = document.createElement( 'img' );
		preview.src = src;
		preview.alt = alt;
		document.getElementById( 'wysiwyg-img-preview' ).innerHTML = '';
		document.getElementById( 'wysiwyg-img-preview' ).appendChild( preview );

	}

	static openPopup( target, ed, cName, wName ) {

		var isTarget = false, sc, attributes;

		while ( false === isTarget && target.parentNode ) {
			if ( jQuery( target ).hasClass( cName ) ) {
				isTarget = true;
			} else {
				if ( target.parentNode ) {
					target = target.parentNode;
				}
			}
		}

		if ( isTarget ) {

			if ( ! target.getAttribute( 'data-shortcode' ) ) {

				// See if the component has a wrapper element
				target = jQuery( target ).closest( '.' + cName + '-wrapper' )[0];

			}

			sc = window.decodeURIComponent( target.getAttribute( 'data-shortcode' ) );
			attributes = URIWYSIWYG.parseShortCodeAttributes( sc );
			console.log( attributes );
			ed.execCommand( wName, target, attributes );
		}
	}

	static getPluginInfo() {

		return {
			longname: 'URI WYSIWYG',
			author: 'John Pennypacker, Brandon Fuller',
			authorurl: 'https://today.uri.edu',
			infourl: 'https://www.uri.edu/communications',
			version: '0.1'
		};

	}

}
