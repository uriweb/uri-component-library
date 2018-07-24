// https://code.tutsplus.com/tutorials/guide-to-creating-your-own-wordpress-editor-buttons--wp-30182

(function() {
    
	var cNames = ['cl-card', 'cl-dcard'],
		wName = 'CLCard';
	
	function generateCardShortcode(params) {

		var attributes = [];
		if(!params.button) {
			params.button = 'Explore';
		}
		      
		for(i in params) {
			if(i == 'style') {
				continue;
			}
			attributes.push(i + '="' + URIWYSIWYG.htmlEscape( params[i] ) + '"');
		}
		
		return '[' + params.style + ' ' + attributes.join(' ') + ']';

	}





	tinymce.create('tinymce.plugins.uri_cl_wysiwyg_card', {
		/**
		 * Initializes the plugin, this will be executed after the plugin has been created.
		 * This call is done before the editor instance has finished it's initialization so use the onInit event
		 * of the editor instance to intercept that event.
		 *
		 * @param {tinymce.Editor} ed Editor instance that the plugin is initialized in.
		 * @param {string} url Absolute URL to where the plugin is located.
		 */
		init : function(ed, url) {
			
			var style;

			// add the button that the WP plugin defined in the mce_buttons filter callback
			ed.addButton(wName, {
				title : 'Card',
				text : '',
				cmd : wName,
				image : url + '/i/card.png'
			});
		
			// add a js callback for the button
			ed.addCommand(wName, function( target, args ) {
							
				// create an empty object if args is empty
				if(!args) {
					args = {style:'', title:'', body:'', link:''}
				}
				// create an empty property so nothing is null
				var possibleArgs = ['title', 'body', 'link', 'button', 'img', 'alt', 'tooltip', 'float'];
				if(!args.title) {
					args.title = '';
				}
				possibleArgs.forEach(function(i){
					if(!args[i]) {
						args[i] = '';
					}
				});
				
				var imageEl = '';
				if(args.img) {
					imageEl = '<img src="' + args.img + '" alt="' + args.alt + '" />';
				}

				ed.windowManager.open({
					title: 'Insert / Update Card',
					library: {type: 'image'},
					body: [
						{type: 'listbox', name: 'style', label: 'Card Style', value: args.style, 'values': [
							{text: 'Standard', value: 'cl-card'},
							{text: 'Detail', value: 'cl-dcard'}
						]
						},
						{type: 'textbox', name: 'title', label: 'Title', value: args.title},
						{type: 'textbox', name: 'body', multiline: 'true', label: 'Body', value: args.body},
						{type: 'textbox', name: 'link', label: 'Link', value: args.link},
						{type: 'textbox', name: 'button', label: 'Button Text', 'placeholder':'Explore', value: args.button},
						{type: 'container', label: ' ', html: 'Only standard cards display button text.'},
						{type: 'textbox', name: 'alt', id: 'alt', value: args.alt, subtype: 'hidden'},
						{type: 'textbox', name: 'img', id: 'img', value: args.img, subtype: 'hidden'},
						{type: 'container', label: ' ', html: '<div id="wysiwyg-img-preview">' + imageEl + '</div>'},
						{type: 'button', label: 'Image', text: 'Choose an image', onclick: URIWYSIWYG.mediaPicker},
						{type: 'listbox', name: 'float', label: 'Alignment', value: args.float, 'values': [
							{text: 'Auto', value: ''},
							{text: 'Left', value: 'left'},
							{text: 'Right', value: 'right'}
						]
						},
					],
					onsubmit: function(e) {
						// Insert content when the window form is submitted
						var shortcode = generateCardShortcode(e.data);
						URIWYSIWYG.insertMultiMediaComponent( target, shortcode, ed, cNames );
					}
				},
				{
					wp: wp,
				});

			});

			ed.on( 'BeforeSetContent', function( event ) {
				for (var i=0; i<cNames.length; i++) {
					event.content = URIWYSIWYG.replaceShortcodes( event.content, cNames[i], true, ed );
				}
			});

			ed.on( 'PostProcess', function( event ) {
				if ( event.get ) {
					for (var i=0; i<cNames.length; i++) {
						event.content = URIWYSIWYG.restoreShortcodes( event.content, cNames[i] );
					}
				}
			});

			//open popup on placeholder double click
			ed.on('DblClick',function( event ) {
				for (var i=0; i<cNames.length; i++) {
					URIWYSIWYG.openPopup( event.target, ed, cNames[i], wName);
				}
			});

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
		createControl : function(n, cm) {
			return null;
		},

		/**
		 * Returns information about the plugin as a name/value array.
		 * The current keys are longname, author, authorurl, infourl and version.
		 *
		 * @return {Object} Name/value array containing information about the plugin.
		 */
		getInfo : function() {
			return {
				longname : 'URI WYSIWYG',
				author : 'John Pennypacker',
				authorurl : 'https://today.uri.edu',
				infourl : 'https://www.uri.edu/communications',
				version : "0.1"
			};
		}


	});

	// Register plugin
	tinymce.PluginManager.add( 'uri_cl_wysiwyg_card', tinymce.plugins.uri_cl_wysiwyg_card );


})();

