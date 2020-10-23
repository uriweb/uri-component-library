/**
 * VIDEOS
 */

class CLVideoVimeo { // eslint-disable-line no-unused-vars
	/**
	 * Do things with the video when it's loaded
	 *
	 * @param {Object} data The player data.
	 */
	static onReady( data ) {
		data.poster.querySelector( 'img' ).style.display = 'none';

		// Store aspect ratio
		data.ratio = data.player.element.width / data.player.element.height;

		window.addEventListener(
			'resize',
			function() {
				CLVimeo.resizeProportionate( data );
			}
		);
		CLVimeo.resizeProportionate( data );

		if ( data.parent.classList.contains( 'cl-card-feature-video' ) ) {
			CLCardVimeo.theatreControl( data );
		}
	}

	/**
	 * Link the poster to the video on YouTube if there's an error with the video
	 *
	 * @param {Object} data The player data.
	 */
	static onError( data ) {
		let alt;

		const a = document.createElement( 'a' );
		a.href = data.src;
		a.title = 'Try watching this video on Vimeo';

		const img = document.createElement( 'img' );
		img.src = data.poster.getAttribute( 'src' );
		alt = data.poster.getAttribute( 'alt' );
		if ( ! alt ) {
			alt = 'Poster for video';
		}
		img.alt = alt;
		a.appendChild( img );

		data.parent.replaceChild( a, data.player.element );
	}

	/**
	 * Get video state and decide what to do
	 *
	 * @param {Object} data The player data.
	 */
	static onStateChange( data ) {
		const overlay = data.parent.querySelector( '.overlay' );

		switch ( data.state ) {
			case 'playing':
			case 'buffering':
				overlay.classList.add( 'hidden' );
				break;
			default:
				overlay.classList.remove( 'hidden' );
		}
	}
}
