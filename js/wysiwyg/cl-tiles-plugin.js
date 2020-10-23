/**
 * CL Tiles WYSIWYG Plugin
 *
 * @see https://code.tutsplus.com/tutorials/guide-to-creating-your-own-wordpress-editor-buttons--wp-30182
 */

( function() {
	const cName = 'cl-tiles',
		wName = 'CLTiles';

	function generateTilesHTML( params ) {
		let out, i;
		const classes = cName + ' ' + getTilesColumns( params.columns );
		out = '<div class="' + classes + '">';
		for ( i = 0; i < params.columns; i++ ) {
			out += '<div> </div>';
		}
		out += '</div>';

		// Add a line break after the tiles so the editor allows for adding content after tiles
		out += '<p class="cl-panel-spacer">&nbsp;</p>';
		return out;
	}

	function getTilesColumns( count ) {
		let columns;
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
		'tinymce.plugins.uri_cl_wysiwyg_tiles',
		{
			/**
			 * Initializes the plugin, this will be executed after the plugin has been created.
			 * This call is done before the editor instance has finished it's initialization so use the onInit event
			 * of the editor instance to intercept that event.
			 *
			 * @param {Object} ed Editor instance that the plugin is initialized in.
			 * @param {string} url Absolute URL to where the plugin is located.
			 */
			init( ed, url ) { // eslint-disable-line no-unused-vars
				// Add the button that the WP plugin defined in the mce_buttons filter callback
				ed.addButton(
					wName,
					{
						title: 'Tiles',
						text: '',
						cmd: wName,
						image: URIWYSIWYG.getPluginInfo().path + 'i/icons/tiles_wysiwyg.svg',
					}
				);

				// Add a js callback for the button
				ed.addCommand(
					wName,
					function( target, args ) {
						// Create an empty object if args is empty
						if ( ! args ) {
							args = {};
						}

						// Create an empty property so nothing is null
						const possibleArgs = [ 'columns' ];
						possibleArgs.forEach(
							function( i ) {
								if ( ! args[ i ] ) {
									args[ i ] = '';
								}
							}
						);

						// Prevent nested quotes... escape / unescape instead?
						args = URIWYSIWYG.unEscapeQuotesDeep( args );

						ed.windowManager.open(
							{
								title: 'Insert / Update Tiles',
								body: [
									{ type: 'listbox', name: 'columns', label: 'Columns', value: args.columns, values: [
										{ text: 'Two', value: '2' },
										{ text: 'Three', value: '3' },
										{ text: 'Four', value: '4' },
										{ text: 'Five', value: '5' },
									],
									},
								],
								onsubmit( e ) {
								// Insert content when the window form is submitted
									e.data = URIWYSIWYG.escapeQuotesDeep( e.data );
									const shortcode = generateTilesHTML( e.data );
									ed.execCommand( 'mceInsertContent', 0, shortcode );
								},
							},
							{
								wp,
							}
						);
					}
				);
			},

			/**
			 * Returns information about the plugin as a name/value array.
			 * The current keys are longname, author, authorurl, infourl and version.
			 *
			 * @return {Object} Name/value array containing information about the plugin.
			 */
			getInfo() {
				return URIWYSIWYG.getPluginInfo();
			},

		}
	);

	// Register plugin
	tinymce.PluginManager.add( 'uri_cl_wysiwyg_tiles', tinymce.plugins.uri_cl_wysiwyg_tiles );
}() );
