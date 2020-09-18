/**
 * CL Metric WYSIWYG Plugin
 *
 * @see https://code.tutsplus.com/tutorials/guide-to-creating-your-own-wordpress-editor-buttons--wp-30182
 */

( function() {
	const cName = 'cl-metric',
		wName = 'CLMetric';

	function generateMetricShortcode( params ) {
		let i;
		const attributes = [];

		for ( i in params ) {
			attributes.push( i + '="' + URIWYSIWYG.htmlEscape( params[ i ] ) + '"' );
		}

		return '[' + cName + ' ' + attributes.join( ' ' ) + ']';
	}

	tinymce.create(
		'tinymce.plugins.uri_cl_wysiwyg_metric',
		{
			/**
			 * Initializes the plugin, this will be executed after the plugin has been created.
			 * This call is done before the editor instance has finished it's initialization so use the onInit event
			 * of the editor instance to intercept that event.
			 *
			 * @param {Object} ed Editor instance that the plugin is initialized in.
			 * @param {string} url Absolute URL to where the plugin is located.
			 */
			init( ed, url ) {
				// Add the button that the WP plugin defined in the mce_buttons filter callback
				ed.addButton(
					wName,
					{
						title: 'Metric',
						text: '',
						cmd: wName,
						image: URIWYSIWYG.getPluginInfo().path + 'i/icons/metric.png',
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
						const possibleArgs = [ 'metric', 'caption', 'style', 'float', 'class' ];
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
								title: 'Insert / Update Metric',
								body: [
									{ type: 'textbox', name: 'metric', label: 'Metric', value: args.metric },
									{ type: 'textbox', name: 'caption', label: 'Caption', value: args.caption },
									{ type: 'textbox', name: 'class', id: 'class', value: args.class, subtype: 'hidden' },
									{ type: 'listbox', name: 'style', label: 'Style', value: args.style, values: [
										{ text: 'Default', value: '' },
										{ text: 'Dark', value: 'dark' },
										{ text: 'Clear', value: 'clear' },
										{ text: 'Overlay', value: 'overlay' },
									],
									},
									{ type: 'listbox', name: 'float', label: 'Alignment', value: args.float, values: [
										{ text: 'Auto', value: '' },
										{ text: 'Left', value: 'left' },
										{ text: 'Right', value: 'right' },
									],
									},
								],
								onsubmit( e ) {
								// Insert content when the window form is submitted
									shortcode = generateMetricShortcode( e.data );
									ed.execCommand( 'mceInsertContent', 0, shortcode );
								},
							},
							{
								wp,
							}
						);
					}
				);

				ed.on(
					'BeforeSetContent',
					function( event ) {
						event.content = URIWYSIWYG.replaceShortcodes( event.content, cName, true, ed );
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
			getInfo() {
				return URIWYSIWYG.getPluginInfo();
			},

		}
	);

	// Register plugin
	tinymce.PluginManager.add( 'uri_cl_wysiwyg_metric', tinymce.plugins.uri_cl_wysiwyg_metric );
}() );
