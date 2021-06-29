/**
 * VIMEO API
 */

class CLVimeo { // eslint-disable-line no-unused-vars
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
		if ( CLA11y.hasNoMotion() ) {
			//console.log( '"' + data.parent.textContent.slice( 0, 10 ) + '" - user prefers no motion globally, pausing player' );
			data.player.pause();
			//data.parent.classList.add( 'paused' );
			return false;
		}

		if ( data.parent.parentNode.classList.contains( 'cl-accessibility-motion-paused' ) ) {
			return false;
		}

		const v = window.innerHeight,
			p = window.pageYOffset,
			h = data.parent.offsetHeight,
			o = data.parent.getBoundingClientRect().top + p;

		//debugging
		//const a = ( CLA11y.arePrefsSaved() ) ? 'user has saved prefs' : 'user has not saved prefs',
		//	b = ( CLA11y.isSystemMotionPaused() ) ? 'user prefers no motion' : 'user prefers motion';

		if ( v + p < o || p > o + h ) {
			//console.log( '"' + data.parent.textContent.slice( 0, 10 ) + '" - ' + a + ' | ' + b + ' | pausing based on viewport' );
			data.player.pause();
		} else {
			//console.log( '"' + data.parent.textContent.slice( 0, 10 ) + '" - ' + a + ' | ' + b + ' | pausing based on viewport' );
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
