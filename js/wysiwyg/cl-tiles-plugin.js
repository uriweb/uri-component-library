/**
 * CL Tiles WYSIWYG Plugin
 *
 * @see https://code.tutsplus.com/tutorials/guide-to-creating-your-own-wordpress-editor-buttons--wp-30182
 * @package uri-component-library
 */

(function() {

	var cName = 'cl-tiles',
		wName = 'CLTiles';

	function generateTilesHTML( params ) {
		var classes, out, i;
		classes = cName + ' ' + getTilesColumns( params.columns );
		out = '<div class="' + classes + '">';
		for ( i = 0; i < params.columns; i++ ) {
			out += '<div> </div>';
		}
		out += '</div>';
		return out;
	}

	function getTilesColumns( count ) {
		var columns;
		switch ( count ) {
			case '2':
				columns = 'halves';
			break;
			case '3':
				columns = 'thirds';
			break;
			case '4':
				columns = 'fourths';
			break;
			case '5':
				columns = 'fifths';
			break;
		}
		return columns;
	}

	tinymce.create(
		'tinymce.plugins.uri_cl_wysiwyg_tiles', {
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
					title: 'Tiles',
					text: '',
					cmd: wName,
					image: url + '/i/tiles.png'
				}
				);

				// Add a js callback for the button
				ed.addCommand(
				wName, function( target, args ) {

					var possibleArgs;

					// Create an empty object if args is empty
					if ( ! args ) {
						args = {};
					}

					// Create an empty property so nothing is null
					possibleArgs = ['columns'];
					possibleArgs.forEach(
					function( i ) {
						if ( ! args[i] ) {
							args[i] = '';
						}
					}
					);

					// Prevent nested quotes... escape / unescape instead?
					args = URIWYSIWYG.unEscapeQuotesDeep( args );

					ed.windowManager.open(
					{
						title: 'Insert / Update Tiles',
						body: [
						{ type: 'listbox', name: 'columns', label: 'Columns', value: args.columns, 'values': [
								{ text: 'Two', value: '2' },
								{ text: 'Three', value: '3' },
								{ text: 'Four', value: '4' },
								{ text: 'Five', value: '5' }
								]
						}
						],
						onsubmit: function( e ) {

							// Insert content when the window form is submitted
							e.data = URIWYSIWYG.escapeQuotesDeep( e.data );
							shortcode = generateTilesHTML( e.data );
							ed.execCommand( 'mceInsertContent', 0, shortcode );

						}
					},
					{
						wp: wp
					}
					);

				}
				);
			},

			/**
			 * Creates control instances based in the incomming name. This method is normally not
			 * needed since the addButton method of the tinymce.Editor class is a more easy way of adding buttons
			 * but you sometimes need to create more complex controls like listboxes, split buttons etc then this
			 * method can be used to create those.
			 *
			 * @param {String} n Name of the control to create.
			 * @param {tinymce.ControlManager} cm Control manager to use inorder to create new control.
			 * @return {tinymce.ui.Control} New control instance or null if no control was created.
			 */
			createControl: function( n, cm ) {
				return null;
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
	tinymce.PluginManager.add( 'uri_cl_wysiwyg_tiles', tinymce.plugins.uri_cl_wysiwyg_tiles );

})();
