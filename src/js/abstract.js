/**
 * ABSTRACTS
 */

( function() {
	'use strict';

	window.addEventListener( 'load', init, false );

	function init() {
		let i;
		let proper;
		const A = [];
		const els = document.querySelectorAll( '.cl-abstract' );
		const n = els.length;

		for ( i = 0; i < n; i++ ) {
			setupControls( els[ i ] );

			proper = els[ i ].querySelector( '.cl-abstract-proper' );
			A.push(
				{
					proper,
					offset: proper.getBoundingClientRect().top,
				}
			);
		}

		// Trigger scroll event to refresh pageYOffset value on page reload (otherwise it'll be 0).
		window.dispatchEvent( new Event( 'scroll' ) );

		// Resize the generic heroes.
		resize( A, n );

		// Listen for any browser resizing.
		window.addEventListener( 'resize', resize.bind( null, A, n ), false );
	}

	function setupControls( el ) {
		const contrast = el.querySelector( '.contrast-control .control-button' );
		const contrastLabel = el.querySelector( '.contrast-control .syntax' );
		const motion = el.querySelector( '.motion-control .control-button' );
		const motionLabel = el.querySelector( '.motion-control .syntax' );

		contrast.addEventListener( 'click', controlContrast.bind( null, el, contrast, contrastLabel ), false );
		motion.addEventListener( 'click', controlMotion.bind( null, el, motion, motionLabel ), false );
	}

	function controlContrast( el, a, s ) {
		const className = 'contrast-improved';
		if ( el.classList.contains( className ) ) {
			el.classList.remove( className );
			a.setAttribute( 'title', 'Improve text contrast' );
			a.innerHTML = 'Improve text contrast';
			s.innerHTML = 'Normal';
		} else {
			el.classList.add( className );
			a.setAttribute( 'title', 'Reset contrast' );
			a.innerHTML = 'Reset contrast';
			s.innerHTML = 'Improved';
		}
	}

	function controlMotion( el, a, s ) {
		const className = 'motion-paused';
		if ( el.classList.contains( className ) ) {
			el.classList.remove( className );
			a.setAttribute( 'title', 'Pause motion' );
			a.innerHTML = 'Pause motion';
			s.innerHTML = 'On';
		} else {
			el.classList.add( className );
			a.setAttribute( 'title', 'Play motion' );
			a.innerHTML = 'Play motion';
			s.innerHTML = 'Off';
		}
	}

	function resize( A, n ) {
		let i, a, p;

		const vh = window.innerHeight;
		const vw = window.innerWidth;
		const s = window.pageYOffset;

		for ( i = 0; i < n; i++ ) {
			a = A[ i ];
			p = ( a.offset + s ) / vh;

			/**
			 * IF the browser aspect ratio is at least 4:3 and the browser is less than 675px high
			 * OR the top of the hero is greater than 30% from the top of the page
			 * THEN set the hero height to 90% of the browser height or 500px, whichever is greater
			 */
			if ( ( vh < vw * 0.75 && vh < 675 ) || ( p > 0.3 ) ) {
				a.proper.style.height = Math.max( 0.9 * vh, 500 ) + 'px';
			} else {
				/**
				 * ELSE set the hero height to 98% of the browser height,
				 * less the distance between the top of the page and the top of the hero
				 */
				a.proper.style.height = 98 - ( p * 100 ) + 'vh';
			}
		}
	}
}() );
