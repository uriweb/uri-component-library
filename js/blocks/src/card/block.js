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
		
		console.log(args);
				
		if (args.body) {
			shortcode += ' body="' + wp.element.renderToString( args.body ) + '"';
		}
		if (args.link) {
			shortcode += ' link="' + args.link + '"';
		}
		if (args.mediaID) {
			shortcode += ' mediaID="' + args.mediaID + '"';
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

	attributes: {
		title: {
			source: 'text',
			selector: '.card__title'
		},
		body: {
			type: 'array',
			source: 'children',
			selector: '.card__body'
		},
		imageAlt: {
			attribute: 'alt',
			selector: '.card__image'
		},
		imageUrl: {
			attribute: 'src',
			selector: '.card__image'
		}
	},
	
	
	edit({ attributes, className, setAttributes }) {

		const getImageButton = (openEvent) => {
			if(attributes.imageUrl) {
				return (
					<img 
						src={ attributes.imageUrl }
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
							imageAlt: media.alt,
							imageUrl: media.url,
							mediaID: media.id
						}); } }
						type="image"
						value={ attributes.imageID }
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
		console.log(o);
		return o;
		
		const cardImage = (src, alt) => {
			if(!src) return null;

			if(alt) {
				return (
					<img 
						className="card__image" 
						src={ src }
						alt={ alt }
					/> 
				);
			}
		
			// No alt set, so let's hide it from screen readers
			return (
				<img 
					className="card__image" 
					src={ src }
					alt=""
					aria-hidden="true"
				/> 
			);
		};
	
		return (
			<div className="card">
				{ cardImage(attributes.imageUrl, attributes.imageAlt) }
				<div className="card__content">
					<h3 className="card__title">{ attributes.title }</h3>
					<div className="card__body">
						{ attributes.body }
					</div>
				</div>
			</div>
		);
	}
	
	
});

