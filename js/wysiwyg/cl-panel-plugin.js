/**
 * CL Panel WYSIWYG Plugin
 *
 * @see https://code.tutsplus.com/tutorials/guide-to-creating-your-own-wordpress-editor-buttons--wp-30182
 * @package uri-component-library
 */

(function() {

	var cName = 'cl-panel',
		wName = 'CLPanel';

	function generatePanelShortcode( params ) {

		var attributes = [], i;

		if ( ! params.img ) {
			alert( 'Image is required for panels' );
			return false;
		}

		if ( true == params.reverse ) {
			params.reverse = 'true';
		} else {
			params.reverse = 'false';
		}

		for ( i in params ) {
			if ( 'content' != i ) {
				attributes.push( i + '="' + URIWYSIWYG.htmlEscape( params[i] ) + '"' );
			}
		}

		return '[' + cName + ' ' + attributes.join( ' ' ) + ']' + params.content + '[/' + cName + ']';

	}

	tinymce.create(
		'tinymce.plugins.uri_cl_wysiwyg_panel',
		{
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
				wName,
					{
						title: 'Panel',
						text: '',
						cmd: wName,
						image: url + '/i/panel.png'
				}
				);

				// Add a js callback for the button
				ed.addCommand(
				wName,
					function( target, args ) {

						var possibleArgs, imageEl;

						// Create an empty object if args is empty
						if ( ! args ) {
							args = {};
						}

						// Create an empty property so nothing is null
						possibleArgs = ['img', 'alt', 'title', 'reverse', 'content', 'class'];
						if ( ! args.title ) {
							args.title = '';
						}
						possibleArgs.forEach(
						function( i ) {
							if ( ! args[i] ) {
								args[i] = '';
							}
						}
						);

						imageEl = '';
						if ( args.img ) {
							imageEl = '<img src="' + args.img + '" alt="' + args.alt + '" />';
						}

						ed.windowManager.open(
						{
							title: 'Insert / Update Panel',
							body: [
							{ type: 'textbox', name: 'alt', id: 'alt', value: args.alt, subtype: 'hidden' },
							{ type: 'textbox', name: 'img', id: 'img', value: args.img, subtype: 'hidden' },
							{ type: 'container', label: ' ', html: '<div id="cl-wysiwyg-img-preview">' + imageEl + '</div>' },
							{ type: 'button', label: 'Image', text: 'Choose an image', onclick: URIWYSIWYG.mediaPicker },
							{ type: 'textbox', name: 'title', label: 'Title', value: args.title },
							{ type: 'textbox', multiline: 'true', name: 'content', label: 'Content', value: args.content, rows: 7, style: '' },
							{ type: 'checkbox', name: 'reverse', label: 'Reverse', checked: ( 'true' == args.reverse ) }
							],
							onsubmit: function( e ) {

								// Insert content when the window form is submitted
								var shortcode = generatePanelShortcode( e.data );
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
				 'BeforeSetContent',
					function( event ) {
						event.content = URIWYSIWYG.replaceShortcodes( event.content, cName, false, ed );
					}
				);

				ed.on(
				 'PostProcess',
					function( event ) {
						if ( event.get ) {
							event.content = URIWYSIWYG.restoreShortcodes( event.content, cName );
						}
					}
				);

				// Open popup on placeholder double click
				ed.on(
				'DblClick',
					function( event ) {
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
	tinymce.PluginManager.add( 'uri_cl_wysiwyg_panel', tinymce.plugins.uri_cl_wysiwyg_panel );

})();
