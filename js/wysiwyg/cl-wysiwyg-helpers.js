/**
 * WYSIWYG Helper Function
 */

let URIWYSIWYGoutStandingRequests = 0;
let URIWYSIWYGpublishButtonValue;

jQuery( document ).ready(
	function() {
		URIWYSIWYGpublishButtonValue = jQuery( '#publish' ).val();
	}
);

class URIWYSIWYG { // eslint-disable-line no-unused-vars
	/**
	 * Escapes quotes on every element in an array (if element is a string)
	 *
	 * @param {Array} a The array.
	 */
	static escapeQuotesDeep( a ) {
		let i;
		for ( i in a ) {
			if ( 'string' === typeof a[ i ] ) {
				a[ i ] = this.escapeQuotes( a[ i ] );
			}
		}
		return a;
	}

	/**
	 * Replace quotes with curly quotes
	 *
	 * @param {string} s The string.
	 */
	static escapeQuotes( s ) {
		s = s.replace( /"\b/g, '&#8220;' );
		s = s.replace( /"/g, '&#8221;' );
		return s;
	}

	/**
	 * Unescapes quotes on every element in an array (if element is a string)
	 *
	 * @param {Array} a The array.
	 */
	static unEscapeQuotesDeep( a ) {
		let i;
		for ( i in a ) {
			if ( 'string' === typeof a[ i ] ) {
				a[ i ] = this.unEscapeQuotes( a[ i ] );
			}
		}
		return a;
	}

	/**
	 * Replace %25 with "
	 *
	 * @param {string} s The string.
	 */
	static unEscapeQuotes( s ) {
		return s.replace( /%25/g, '"' );
	}

	/**
	 * Replace HTML ASCII characters with their HTML entities
Specifically, replace &, ", ', <, and >
note: replaces straight quotes (double primes) with curly quotes
	 *
	 * @param {string} s The string.
	 * @return {string} The replaced string.
	 */
	static htmlEscape( s ) {
		// Tend to quotes... using the entities here will cause the visual editor to
		// Display them literally, that's why this doesn't call escapeQuotes()
		// Replace all quotes before a word boundary with an opening curly quote
		s = s.replace( /"\b/g, '“' );

		// Replace the rest of the quotes with a closing curly quote
		s = s.replace( /"/g, '”' );

		// Replace single prime with curly apostrophe
		// if there's only one apostrophe, it's probably meant to be outward
		// this leaves many corner cases, but it's closer.
		if ( 1 === s.split( "'" ).length - 1 ) {
			s = s.replace( /'/g, '’' );
		} else {
			s = s.replace( /'\b/g, '‘' );
			s = s.replace( /'/g, '’' );
		}

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
	 * @param {string} s The string.
	 * @return {string} The replaced string.
	 */
	static htmlUnescape( s ) {
		return s
			.replace( /&#34;/g, '"' )
			.replace( /&#39;/g, "'" )
			.replace( /&lt;/g, '<' )
			.replace( /&gt;/g, '>' )
			.replace( /&amp;/g, '&' );
	}

	/**
	 * Find a shortcode's wrapper element if it has one, and return the html element
	 *
	 * @param {Object} html An html object.
	 * @param {string} sc The shortcode.
	 * @return {Object} An html object.
	 */
	static getWrapper( html, sc ) {
		if ( ! html.getAttribute( 'data-shortcode' ) ) {
			// See if the component has a wrapper element
			html = jQuery( html ).closest( '.' + sc + '-wrapper' )[ 0 ];
		}

		return html;
	}

	static getHTML( ed, shortcode, id, classes ) {
		// https://api.jquery.com/jQuery.ajax/
		jQuery.ajax(
			wp.ajax.settings.url,
			{
				data: {
					action: 'uri_cl_wysiwyg',
					sc: shortcode,
				},
				dataType: 'json',
				method: 'post',
				error( jqXHR, textStatus, errorThrown ) { // eslint-disable-line no-unused-vars
					//console.log( 'failed to retrieve shortcode HTML.' );
					//console.log( textStatus );
					//console.log( errorThrown );
				},
				beforeSend() {
					URIWYSIWYGoutStandingRequests++;
					jQuery( '#publish, #content-tmce, #content-html' ).attr( 'disabled', true );
					jQuery( '#publish' ).val( 'loading' );
				},
				success( data, textStatus, jqXHR ) { // eslint-disable-line no-unused-vars
					let placeHolder, d;

					if ( ed.$ ) {
						placeHolder = ed.$( '#' + id );
						d = document.createElement( 'div' );

						if ( data.match( 'class="cl-card' ) ) {
							// Replace the <a class="cl-card"> element with a <div>
							// Because TinyMCE doesn't like block-level elements inside of inline elements
							data = data.replace( '<a ', '<div ' );
							data = data.replace( '</a>', '</div>' );
						}

						if ( data.match( 'class="cl-button' ) ) {
							// Replace the <a class="cl-button"> element with a <span>
							// Buttons render funny when selected if they're an anchor
							data = data.replace( '<a ', '<span ' );
							data = data.replace( '</a>', '</span>' );
						}

						jQuery( d ).addClass( classes ).append( data );

						placeHolder.after( d.innerHTML );
						const el = placeHolder.next();

						el.attr(
							{
								'data-shortcode': window.encodeURIComponent( shortcode ),
								contenteditable: 'false',
							}
						);
						el.addClass( classes );

						placeHolder.remove();
					}
				},
				complete() {
					URIWYSIWYGoutStandingRequests--;
					if ( URIWYSIWYGoutStandingRequests < 1 ) {
						jQuery( '#publish, #content-tmce, #content-html' ).attr( 'disabled', null );
						jQuery( '#publish' ).val( URIWYSIWYGpublishButtonValue );
					}
				},
			}
		);
	}

	/**
	 * Replace shortcode with HTML
	 *
	 * @param {string} content The editor content.
	 * @param {string} shortcodeName The shortcode name.
	 * @param {boolean} selfclosing Whether or not the shortcode is self-closing.
	 * @param {Object} ed The editor.
	 */
	static replaceShortcodes( content, shortcodeName, selfclosing, ed ) {
		const re = selfclosing ? new RegExp( '\\[' + shortcodeName + '([^\\]]*)\\]', 'g' ) : new RegExp( '\\[' + shortcodeName + '[^]+?\\[/' + shortcodeName + '\\]', 'g' );

		return content.replace(
			re,
			function( match ) {
				const safeData = window.encodeURIComponent( match );
				const classes = URIWYSIWYG.generateNonEditableClasses( shortcodeName );

				const id = URIWYSIWYG.generateID();
				const out = URIWYSIWYG.generateLoadingDiv( safeData, id );

				URIWYSIWYG.getHTML( ed, match, id, classes );
				return out;
			}
		);
	}

	/**
	 * Insert/Replace multimedia content
	 *
	 * @param {Object} target The target component.
	 * @param {string} shortcode The shortcode.
	 * @param {Object} ed The editor instance.
	 * @param {string} cName The component name.
	 */
	static insertMultiMediaComponent( target, shortcode, ed, cName ) {
		let id;

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
	 * @param {string} name The shortcode name.
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
	 * @param {string} data The shortcode data.
	 * @param {string} id The random id.
	 */
	static generateLoadingDiv( data, id ) {
		return '<div class="cl-wysiwyg-loading" data-shortcode="' + data + '" id="' + id + '">Loading...</div>';
	}

	/**
	 * Parses a short code and returns an array of attributes
	 *
	 * @param {string} sc The shortcode.
	 */
	static parseShortCodeAttributes( sc ) {
		let x, key, value;

		const attributes = {};
		const atts = sc.match( /[\w-]+="[^"]*"/gi );

		for ( x in atts ) {
			key = atts[ x ].substr( 0, atts[ x ].indexOf( '=' ) );
			value = atts[ x ].substr( atts[ x ].indexOf( '=' ) + 1 );
			attributes[ key.toLowerCase() ] = value.replace( /"/gi, '' );
		}

		const innerContent = sc.match( /\][^]+?\[/gi );
		if ( innerContent ) {
			attributes.content = innerContent[ 0 ].replace( /^\]|\[$/gi, '' ).trim();
		}

		return attributes;
	}

	/**
	 * Replace HTML with shortcode
	 *
	 * @param {string} content The editor content.
	 * @param {string} sc The shortcode name.
	 */
	static restoreShortcodes( content, sc ) {
		let target, i, t;

		// Convert the content string into a DOM tree so we can parse it easily
		const html = document.createElement( 'div' );
		html.innerHTML = content;
		const componentElements = html.querySelectorAll( '.' + sc );

		// Var componentElements contains an array of the shortcodes
		for ( i = 0; i < componentElements.length; i++ ) {
			target = this.getWrapper( componentElements[ i ], sc );
			t = document.createTextNode( window.decodeURIComponent( target.getAttribute( 'data-shortcode' ) ) );
			target.parentNode.replaceChild( t, target );
		}

		// Return the DOM tree as a string
		const out = this.htmlUnescape( html.innerHTML );
		return out;
	}

	/**
	 * Invokes the wp media picker from a tinymce modal
	 *
	 * @param {Object} e An event.
	 */
	static mediaPicker( e ) {
		e.preventDefault();

		const picker = wp.media.frames.picker = wp.media(
			{
				title: 'Select an image',
				button: { text: 'Add an image' },
				library: { type: [ 'image' ] },
				multiple: false,
			}
		);

		picker.on(
			'select',
			function() {
				let alt;

				const imgurl = document.getElementById( 'img' );
				const altEl = document.getElementById( 'alt' );

				const attachment = picker.state().get( 'selection' ).first().toJSON();

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
		const preview = document.createElement( 'img' );
		preview.src = src;
		preview.alt = alt;
		document.getElementById( 'cl-wysiwyg-img-preview' ).innerHTML = '';
		document.getElementById( 'cl-wysiwyg-img-preview' ).appendChild( preview );
	}

	static openPopup( target, ed, cName, wName ) {
		let isTarget = false,
			sc, attributes;

		while ( false === isTarget && target.parentNode ) {
			if ( jQuery( target ).hasClass( cName ) ) {
				isTarget = true;
			} else if ( target.parentNode ) {
				target = target.parentNode;
			}
		}

		if ( isTarget ) {
			target = this.getWrapper( target, cName );

			sc = window.decodeURIComponent( target.getAttribute( 'data-shortcode' ) );
			attributes = URIWYSIWYG.parseShortCodeAttributes( sc );
			ed.execCommand( wName, target, attributes );
		}
	}

	static getPluginInfo() {
		return {
			longname: URIComponentLibrary.Name,
			author: URIComponentLibrary.Author,
			authorurl: URIComponentLibrary.AuthorURI,
			infourl: 'https://github.com/uriweb/uri-component-library',
			version: URIComponentLibrary.Version,
			path: URIComponentLibrary.Path,
		};
	}
}
