/**
 * CL Video WYSIWYG Plugin
 *
 * @see https://code.tutsplus.com/tutorials/guide-to-creating-your-own-wordpress-editor-buttons--wp-30182
 * @package uri-component-library
 */

(function() {

	var cName = 'cl-video',
		wName = 'CLVideo';

	function generateVideoShortcode( params ) {

		var attributes = [], i;

		for ( i in params ) {
			attributes.push( i + '="' + URIWYSIWYG.htmlEscape( params[i] ) + '"' );
		}

		return '[' + cName + ' ' + attributes.join( ' ' ) + ']';

	}

	tinymce.create(
		'tinymce.plugins.uri_cl_wysiwyg_video', {
			/**
			 * Initializes the plugin, this will be executed after the plugin has been created.
			 * This call is done before the editor instance has finished it's initialization so use the onInit event
			 * of the editor instance to intercept that event.
			 *
			 * @param {tinymce.Editor} ed Editor instance that the plugin is initialized in.
			 * @param {string} url Absolute URL to where the plugin is located.
			 */
			init: function( ed, url ) {

				// Add the button that the WP plugin defined in the mce_buttons filter callback
				ed.addButton(
				wName, {
					title: 'Video',
					text: '',
					cmd: wName,
					image: url + '/i/video.png'
				}
				);

				// Add a js callback for the button
				ed.addCommand(
				wName, function( target, args ) {

					var possibleArgs, imageEl;

					// Create an empty object if args is empty
					if ( ! args ) {
						args = {};
					}

					// Create an empty property so nothing is null
					possibleArgs = ['img', 'vid', 'alt', 'aspect', 'id', 'title', 'excerpt'];
					possibleArgs.forEach(
					function( i ) {
						if ( ! args[i] ) {
							args[i] = '';
						}
					}
					);

					// Prevent nested quotes... escape / unescape instead?
					args = URIWYSIWYG.unEscapeQuotesDeep( args );

					imageEl = '';
					if ( args.img ) {
						imageEl = '<img src="' + args.img + '" alt="' + args.alt + '" />';
					}

					// Set an initial unique id for the video component, since it's required
					if ( ! args.id ) {
						args.id = URIWYSIWYG.generateID();
					}

					ed.windowManager.open(
					{
						title: 'Insert / Update Video',
						library: { type: 'image' },
						body: [
						{ type: 'container', label: ' ', html: '<div id="wysiwyg-img-preview">' + imageEl + '</div>' },
						{ type: 'button', label: 'Image (required)', text: 'Choose an image', onclick: URIWYSIWYG.mediaPicker },
						{ type: 'textbox', name: 'img', id: 'img', value: args.img, subtype: 'hidden' },
						{ type: 'textbox', name: 'alt', id: 'alt', label: 'Image Alt Text', value: args.alt },
						{ type: 'textbox', name: 'id', label: 'Unique ID', value: args.id },
						{ type: 'textbox', name: 'vid', label: 'YouTube ID', value: args.vid },
						{ type: 'textbox', name: 'aspect', label: 'Aspect Ratio', 'placeholder': '16:9', value: args.aspect },
						{ type: 'textbox', name: 'title', label: 'Title', value: args.title },
						{ type: 'textbox', name: 'excerpt', multiline: 'true', label: 'Excerpt', value: args.excerpt }
						],
						onsubmit: function( e ) {

							var shortcode;

							// Sanitize unique id
							if ( ! e.data.id ) {
								e.data.id = URIWYSIWYG.generateID();
							} else {
								e.data.id = e.data.id.replace( /\s/g, '' );
							}

							// Insert content when the window form is submitted
							shortcode = generateVideoShortcode( e.data );
							URIWYSIWYG.insertMultiMediaComponent( target, shortcode, ed, cName );

						}
					},
					{
						wp: wp
					}
					);

				}
				);

				ed.on(
				 'BeforeSetContent', function( event ) {
					event.content = URIWYSIWYG.replaceShortcodes( event.content, cName, true, ed );
				 }
				);

				ed.on(
				 'PostProcess', function( event ) {
					if ( event.get ) {
						event.content = URIWYSIWYG.restoreShortcodes( event.content, cName );
					}
				 }
				);

				// Open popup on placeholder double click
				ed.on(
				'DblClick', function( event ) {
					URIWYSIWYG.openPopup( event.target, ed, cName, wName );
				}
				);

			},

			/**
			 * Returns information about the plugin as a name/value array.
			 * The current keys are longname, author, authorurl, infourl and version.
			 *
			 * @return {Object} Name/value array containing information about the plugin.
			 */
			getInfo: function() {
				return URIWYSIWYG.getPluginInfo();
			}

	}
		);

	// Register plugin
	tinymce.PluginManager.add( 'uri_cl_wysiwyg_video', tinymce.plugins.uri_cl_wysiwyg_video );

})();
