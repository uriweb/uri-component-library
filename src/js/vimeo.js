/**
 * VIMEO API
 */

class CLVimeo {
	/*
	 * Load the API
	 */
	static loadVimeoAPI() {
		const tag = document.createElement( 'script' );
		tag.src = 'https://player.vimeo.com/api/player.js';

		const firstScriptTag = document.getElementsByTagName( 'script' )[ 0 ];
		firstScriptTag.parentNode.insertBefore( tag, firstScriptTag );

		tag.addEventListener( 'load', CLCreateVimeoPlayers, false );
	}

	static determinePlayState( data ) {
		const v = window.innerHeight,
			p = window.pageYOffset,
			h = data.parent.offsetHeight,
			o = data.parent.getBoundingClientRect().top + p;

		if ( v + p < o || p > o + h ) {
			data.player.pause();
		} else {
			data.player.play();
		}
	}

	/**
	 * Dynamically set the hero height and position based on width
	 *
	 * @param {Object} data The player data.
	 */
	static resizeRelative( data ) {
		let w = data.parent.offsetWidth;
		const el = data.parent.querySelector( 'iframe' );
		const h = data.parent.offsetHeight;

		if ( w / h > 16 / 9 ) {
			el.style.height = ( w * 9 / 16 ) + 'px';
			el.style.width = '100%';
			el.style.left = 0;
			el.style.top = ( ( h - ( w * 9 / 16 ) ) / 2 ) + 'px';
			el.style.marginLeft = 0;
		} else {
			w = h * 16 / 9;
			el.style.height = '100%';
			el.style.width = w + 'px';
			el.style.left = 0 - ( w / 2 ) + 'px';
			el.style.top = 0;
			el.style.marginLeft = '50%';
		}
	}

	/**
	 * Dynamically set the video height and position based on width
	 *
	 * @param {Object} data The player data.
	 */
	static resizeProportionate( data ) {
		data.player.element.setAttribute( 'height', data.parent.offsetWidth / data.ratio );
	}
}
