/**
 * CL Hero WYSIWYG Plugin
 *
 * @see https://code.tutsplus.com/tutorials/guide-to-creating-your-own-wordpress-editor-buttons--wp-30182
 * @package uri-component-library
 */

( function() {
	const cName = 'cl-hero',
		wName = 'CLHero';

	function generateHeroShortcode( params ) {
		let i;
		const attributes = [];

		if ( ! params.button ) {
			params.button = 'Explore';
		}

		if ( true === params.use_caption ) {
			params.use_caption = 'true';
		} else {
			params.use_caption = 'false';
		}

		for ( i in params ) {
			attributes.push( i + '="' + URIWYSIWYG.htmlEscape( params[ i ] ) + '"' );
		}

		return '[' + cName + ' ' + attributes.join( ' ' ) + ']';
	}

	tinymce.create(
		'tinymce.plugins.uri_cl_wysiwyg_hero',
		{
			/**
			 * Initializes the plugin, this will be executed after the plugin has been created.
			 * This call is done before the editor instance has finished it's initialization so use the onInit event
			 * of the editor instance to intercept that event.
			 *
			 * @param {tinymce.Editor} ed Editor instance that the plugin is initialized in.
			 * @param {string} url Absolute URL to where the plugin is located.
			 */
			init( ed, url ) {
				// Add the button that the WP plugin defined in the mce_buttons filter callback
				ed.addButton(
					wName,
					{
						title: 'Hero',
						text: '',
						cmd: wName,
						image: URIWYSIWYG.getPluginInfo().path + 'i/icons/hero.png',
					}
				);

				// Add a js callback for the button
				ed.addCommand(
					wName,
					function( target, args ) {
						let imageEl;

						// Create an empty object if args is empty
						if ( ! args ) {
							args = {};
						}

						// Create an empty property so nothing is null
						const possibleArgs = [
							'img',
							'id',
							'vid',
							'headline',
							'subhead',
							'link',
							'button',
							'tooltip',
							'alt',
							'format',
							'animation',
							'use_caption',
							'caption',
							'credit',
							'class',
						];
						possibleArgs.forEach(
							function( i ) {
								if ( ! args[ i ] ) {
									args[ i ] = '';
								}
							}
						);

						imageEl = '';
						if ( args.img ) {
							imageEl = '<img src="' + args.img + '" alt="' + args.alt + '" />';
						}

						ed.windowManager.open(
							{
								title: 'Insert / Update Hero',
								library: { type: 'image' },
								body: [
									{ type: 'container', label: ' ', html: '<div id="cl-wysiwyg-img-preview">' + imageEl + '</div>' },
									{ type: 'button', label: 'Image', text: 'Choose an image', onclick: URIWYSIWYG.mediaPicker },
									{ type: 'textbox', name: 'alt', id: 'alt', value: args.alt, subtype: 'hidden' },
									{ type: 'textbox', name: 'img', id: 'img', value: args.img, subtype: 'hidden' },
									{ type: 'textbox', name: 'id', id: 'id', value: args.id, subtype: 'hidden' },
									{ type: 'textbox', name: 'vid', label: 'Video URL', value: args.vid },
									{ type: 'textbox', name: 'headline', label: 'Headline', value: args.headline },
									{ type: 'textbox', multiline: 'true', name: 'subhead', label: 'Subheader', value: args.subhead },
									{ type: 'checkbox', name: 'use_caption', label: 'Use WP Caption', checked: ( 'true' === args.use_caption ) },
									{ type: 'textbox', name: 'caption', label: 'Caption', value: args.caption },
									{ type: 'textbox', name: 'credit', label: 'Credit', value: args.credit },
									{ type: 'textbox', name: 'link', label: 'Link', value: args.link },
									{ type: 'textbox', name: 'button', label: 'Button Text', placeholder: 'Explore', value: args.button },
									{ type: 'textbox', name: 'tooltip', label: 'Tooltip', value: args.tooltip },
									{ type: 'textbox', name: 'class', id: 'class', value: args.class, subtype: 'hidden' },
									{ type: 'listbox', name: 'format', label: 'Format', value: args.format, values: [
										{ text: 'Default', value: '' },
										{ text: 'Full Width', value: 'fullwidth' },
										{ text: 'Super', value: 'super' },
									],
									},
									{ type: 'listbox', name: 'animation', label: 'Animation', value: args.animation, values: [
										{ text: 'None', value: '' },
										{ text: 'Shift', value: 'shift' },
									],
									},

								],
								onsubmit( e ) {
								// Insert content when the window form is submitted
									const shortcode = generateHeroShortcode( e.data );
									URIWYSIWYG.insertMultiMediaComponent( target, shortcode, ed, cName );
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
	tinymce.PluginManager.add( 'uri_cl_wysiwyg_hero', tinymce.plugins.uri_cl_wysiwyg_hero );
}() );
