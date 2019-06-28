/**
 * CL Button WYSIWYG Plugin
 *
 * @see https://code.tutsplus.com/tutorials/guide-to-creating-your-own-wordpress-editor-buttons--wp-30182
 * @package uri-component-library
 */

(function() {

	var cName = 'cl-button',
		wName = 'CLButton';

	function generateButtonShortcode( params ) {

		var attributes = [], i;

		if ( ! params.text ) {
			params.text = 'Explore';
		}

		for ( i in params ) {
			attributes.push( i + '="' + URIWYSIWYG.htmlEscape( params[i] ) + '"' );
		}

		return '[' + cName + ' ' + attributes.join( ' ' ) + ']';

	}

	tinymce.create(
		'tinymce.plugins.uri_cl_wysiwyg_button',
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
						title: 'Button',
						text: '',
						cmd: wName,
						image: url + '/i/button.png'
				}
				);

				// Add a js callback for the button
				ed.addCommand(
				wName,
					function( target, args ) {

						var possibleArgs;

						// Create an empty object if args is empty
						if ( ! args ) {
							args = {};
						}

						// Create an empty property so nothing is null
						possibleArgs = ['link', 'text', 'tooltip', 'style', 'class'];
						possibleArgs.forEach(
						function( i ) {
							if ( ! args[i] ) {
								args[i] = '';
							}
						}
						);

						ed.windowManager.open(
						{
							title: 'Insert / Update Button',
							body: [
							{ type: 'textbox', name: 'link', label: 'Link', value: args.link },
							{ type: 'textbox', name: 'text', label: 'Text', 'placeholder':'Explore', value: args.text },
							{ type: 'textbox', name: 'tooltip', label: 'Tooltip', value: args.tooltip },
							{ type: 'listbox', name: 'style', label: 'Style', value: args.style, 'values': [
								{ text: 'Default', value: '' },
								{ text: 'Prominent', value: 'prominent' },
								{ text: 'Disabled', value: 'disabled' }
								]
							}
							],
							onsubmit: function( e ) {

								// Insert content when the window form is submitted
								shortcode = generateButtonShortcode( e.data );
								ed.execCommand( 'mceInsertContent', 0, shortcode );

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
						event.content = URIWYSIWYG.replaceShortcodes( event.content, cName, true, this );
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
	tinymce.PluginManager.add( 'uri_cl_wysiwyg_button', tinymce.plugins.uri_cl_wysiwyg_button );

})();
