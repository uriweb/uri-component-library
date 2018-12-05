const { RichText, MediaUpload, PlainText } = wp.editor;
const { registerBlockType } = wp.blocks;
const { Button } = wp.components;

/**
 * Render the shortcode
 */
function buildShortCode( args ) {
	// var attributes = Object.keys(args).map(e => (`${e}="${args[e]}"`));
	// var as = attributes.join(' ');
	// return '[cl-card ' + as + ']';
	// unfortunately, Gutenberg cares a lot about the order in which attributes appear,
	// so this process is best done manually.
	var shortcode = '[cl-card ';
	if (args.title) {
		shortcode += ' title="' + args.title + '"';
	}
	
	if (args.body) {
		shortcode += ' body="' + args.body + '"';
		//shortcode += ' body="' + wp.element.renderToString( args.body ) + '"';
	}
	if (args.link) {
		shortcode += ' link="' + args.link + '"';
	}
	if (args.mediaID) {
		shortcode += ' img="' + args.mediaID + '"';
	} else {
		if (args.img) {
			shortcode += ' img="' + args.img + '"';
		}
		if (args.alt) {
			shortcode += ' alt="' + args.alt + '"';
		}
	}
	if (args.button) {
		shortcode += ' button="' + args.button + '"';
	}
	if (args.className) {
		shortcode += ' class="' + args.className + '"';
	}
	if (args.alignment == 'left' || args.alignment == 'right' ) {
		shortcode += ' float="' + args.alignment + '"';
	}

	shortcode += ']';

	return shortcode;

}

registerBlockType('card-block/main', {   

  title: 'Card',
  icon: 'heart',
  category: 'common',

	// the mediaID is what goes into the shortcode for front-end display
	// the img and alt are for editor placeholders
	attributes: {
		title: {
			type: 'string',
		},
		body: {
			type: 'string',
		},
		link: {
			type: 'string',
		},
		mediaID: {
			type: 'number',
		},
		img: {
			type: 'string',
		},
		alt: {
			type: 'string',
		},
		button: {
			type: 'string',
		},
		alignment: {
			type: 'string',
		}
	},
	
	
	edit({ attributes, className, setAttributes }) {

		const getImageButton = (openEvent) => {
			if(attributes.img) {
				return (
					<img 
						src={ attributes.img }
						onClick={ openEvent }
						className="image"
					/>
				);
			}
			else {
				return (
					<div className="button-container">
						<Button 
							onClick={ openEvent }
							className="button button-large"
						>
							Pick an image
						</Button>
					</div>
				);
			}
		};

  	return (
			<div className="container">
				<div class="cl-card">
					<MediaUpload
						onSelect={ media => { setAttributes({
							alt: media.alt,
							img: media.url,
							mediaID: media.id
						}); } }
						type="image"
						value={ attributes.mediaID }
						render={ ({ open }) => getImageButton(open) }
					/>
					<PlainText
						onChange={ content => setAttributes({ title: content }) }
						value={ attributes.title }
						placeholder="Your card title"
						className="heading"
					/>
					<RichText
						onChange={ content => setAttributes({ body: content }) }
						value={ attributes.body }
						multiline="p"
						placeholder="Your card text"
					/>
					<PlainText
						onChange={ content => setAttributes({ button: content }) }
						value={ attributes.button }
						placeholder="Your button text"
						className="cl-button"
					/>
				</div>
				<PlainText
					onChange={ content => setAttributes({ link: content }) }
					value={ attributes.link }
					placeholder="Links To"
				/>
			</div>
  	);
  	
	}, // end edit
	
	save({ attributes }) {

		var o = wp.element.createElement( wp.element.RawHTML, null, buildShortCode( attributes ) );
		// console.log(o);
		return o;
		
	}
	
	
});

