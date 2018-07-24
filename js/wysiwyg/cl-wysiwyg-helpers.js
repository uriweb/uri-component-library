/**
 * WYSIWYG Helper Function
 *
 * @package uri-component-library
 */

class URIWYSIWYG {

	// escapes quotes on every element in an array (if element is a string)
	static escapeQuotesDeep(a) {
		for (i in a) {
			if (typeof a[i] === 'string') {
				a[i] = this.escapeQuotes( a[i] );
			}
		}
		return a;
	}

	// replace quotes with curly quotes
	static escapeQuotes(s) {
		s = s.replace( /"\b/g, "&#8220;" );
		s = s.replace( /"/g, "&#8221;" );
		return s;
		return s.replace( /"/g, '%25' );
	}

	// unescapes quotes on every element in an array (if element is a string)
	static unEscapeQuotesDeep(a) {
		for (i in a) {
			if (typeof a[i] === 'string') {
				a[i] = this.unEscapeQuotes( a[i] );
			}
		}
		return a;
	}

	// replace %25 with "
	static unEscapeQuotes(s) {
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
	static htmlEscape(s) {
		// tend to quotes... using the entities here will cause the visual editor to
		// display them literally, that's why this doesn't call escapeQuotes()
		// replace all quotes before a word boundary with an opening curly quote
		s = s.replace( /"\b/g, "“" );
		// replace the rest of the quotes with a closing curly quote
		s = s.replace( /"/g, "”" );

		// replace single prime with curly apostrophe
		s = s.replace( /'\b/g, "‘" );
		s = s.replace( /'/g, "’" );

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
	static htmlUnescape(s) {
		return s
			.replace( /&#34;/g, '"' )
			.replace( /&#39;/g, "'" )
			.replace( /&lt;/g, '<' )
			.replace( /&gt;/g, '>' )
			.replace( /&amp;/g, '&' );
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

						if (ed.$) {

							var placeHolder = ed.$( '#' + id );
							var d = document.createElement( 'div' );

							if ( data.match( 'class="cl-card' ) || data.match( 'class="cl-dcard' ) ) {
								// replace the <a class="cl-card"> element with a <div>
								// because TinyMCE doesn't like block-level elements inside of inline elements
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


	/* Replace shortcode with HTML
	 * @param content string The editor content
	 * @param shortcodeName string The shortcode name
	 * @param selfclosing bool Whether or not the shortcode is self-closing
	 * @param ed obj The editor
	 */
	static replaceShortcodes( content, shortcodeName, selfclosing, ed ) {

		var re = selfclosing ? new RegExp( '\\[' + shortcodeName + '([^\\]]*)\\]', 'g' ) : new RegExp( '\\[' + shortcodeName + '[^]+?\\[/' + shortcodeName + '\\]', 'g' );

		return content.replace(
			 re, function( match ) {

				var safeData, classes, out;

				safeData = window.encodeURIComponent( match );
				classes = URIWYSIWYG.generateNonEditableClasses( shortcodeName );

				var id = URIWYSIWYG.generateID();
				out = URIWYSIWYG.generateLoadingDiv( safeData, id );

				URIWYSIWYG.getHTML( ed, match, id, classes );
				return out;

			 }
			);
	}


	/* Insert/Replace multimedia content
	 * @param target obj The target component
	 * @param shortcode str The shortcode
	 * @param ed obj The editor instance
	 * @param cNames mixed The component name(s)
	 */
	static insertMultiMediaComponent( target, shortcode, ed, cNames ) {

		var id, i;

		if ( target ) {
			id = URIWYSIWYG.generateID();
			jQuery( target ).replaceWith( URIWYSIWYG.generateLoadingDiv( window.encodeURIComponent( shortcode ), id ) );

			if ( Array.isArray( cNames ) ) {
				for ( i = 0; i < cNames.length; i++ ) {
					URIWYSIWYG.getHTML( ed, shortcode, id, URIWYSIWYG.generateNonEditableClasses( cNames[i] ) );
				}
			} else {
				URIWYSIWYG.getHTML( ed, shortcode, id, URIWYSIWYG.generateNonEditableClasses( cNames ) );
			}

		} else {
			ed.execCommand( 'mceInsertContent', 0, shortcode );
		}
	}


	/* Generates the mceNonEditable classes
	 * @param name str The shortcode name
	 */
	static generateNonEditableClasses( name ) {
		return 'mceNonEditable ' + name + '-noneditable';
	}


	/* Generates a random ID
	 */
	static generateID() {
		return '_' + Math.random().toString( 36 ).substr( 2, 9 );
	}


	/* Generates the loading div
	 * @param data str The shortcode data
	 * @param id The random id
	 */
	static generateLoadingDiv( data, id ) {
		return '<div class="loading" data-shortcode="' + data + '" id="' + id + '">Loading...</div>';
	}


	/* Parses a short code and returns an array of attributes
	 * @param sc string The shortcode
	 */
	static parseShortCodeAttributes(sc) {

		var attributes, atts, innerContent, x, t;

		attributes = {};
		atts = sc.match( /[\w-]+="[^"]*"/gi );

		for ( x in atts ) {
			t = atts[x].split( '=' );
			t[1] = t[1].replace( /\"/gi, '' );
			attributes[t[0]] = t[1];
		}

		innerContent = sc.match( /\][^]+?\[/gi );
		if (innerContent) {
			attributes['content'] = innerContent[0].replace( /^\]|\[$/gi,'' ).trim();
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
		var html, componentElements, i, t, wrapper;

		// convert the content string into a DOM tree so we can parse it easily
		html = document.createElement( 'div' );
		html.innerHTML = content;
		componentElements = html.querySelectorAll( '.' + sc + '-noneditable' );

		// componentElements contains an array of the shortcodes
		for (i = 0; i < componentElements.length; i++) {
			t = document.createTextNode( window.decodeURIComponent( componentElements[i].getAttribute( 'data-shortcode' ) ) );
			componentElements[i].parentNode.replaceChild( t, componentElements[i] );
		}

		// return the DOM tree as a string
		var out = this.htmlUnescape( html.innerHTML );
		return out;
		// return html.innerHTML;
	}


	// invokes the wp media picker from a tinymce modal
	static mediaPicker(e) {
		e.preventDefault();
		var picker;

		picker = wp.media.frames.picker = wp.media(
			{
				title: 'Select an image',
				button: {text: 'Add an image'},
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

				if (attachment.alt) {
					alt = attachment.alt;
				} else if (attachment.title) {
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


	static mediaPickerPreview(src, alt) {
		var preview;
		preview = document.createElement( 'img' );
		preview.src = src;
		preview.alt = alt;
		document.getElementById( 'wysiwyg-img-preview' ).innerHTML = '';
		document.getElementById( 'wysiwyg-img-preview' ).appendChild( preview );
	}

	static openPopup(target, ed, cName, wName) {

		var isTarget = false, sc, attributes;

		while ( isTarget === false && target.parentNode ) {
			if ( jQuery( target ).hasClass( cName ) ) {
				isTarget = true;
			} else {
				if (target.parentNode) {
					target = target.parentNode;
				}
			}
		}

		if ( isTarget ) {

			if ( ! target.getAttribute( 'data-shortcode' ) ) {
				// see if the component has a wrapper element
				target = jQuery( target ).closest( '.' + cName + '-wrapper' )[0];
			}

			sc = window.decodeURIComponent( target.getAttribute( 'data-shortcode' ) );
			attributes = URIWYSIWYG.parseShortCodeAttributes( sc );
			console.log( attributes );
			ed.execCommand( wName, target, attributes );
		}
	}

}
