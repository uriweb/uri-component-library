( function() {
	'use strict';

	window.addEventListener( 'load', init, false );

	function init() {
		let i;
		const H = [];
		const els = document.querySelectorAll( '.cl-generic-hero .cl-generic-hero-proper' );
		const n = els.length;

		for ( i = 0; i < n; i++ ) {
			// Save a list of generic heroes and their initial offsets
			H.push(
				{
					el: els[ i ],
					offset: els[ i ].getBoundingClientRect().top,
				}
			);
		}

		// Trigger scroll event to refresh pageYOffset value on page reload (otherwise it'll be 0).
		window.dispatchEvent( new Event( 'scroll' ) );

		// Resize the generic heroes.
		resize( H, n );

		// Listen for any browser resizing.
		window.addEventListener( 'resize', resize.bind( null, H, n ), false );
	}

	function resize( H, n ) {
		let i, h, p;

		const vh = window.innerHeight;
		const vw = window.innerWidth;
		const s = window.pageYOffset;

		for ( i = 0; i < n; i++ ) {
			h = H[ i ];
			p = ( h.offset + s ) / vh;

			/**
			 * IF the browser aspect ratio is at least 4:3 and the browser is less than 675px high
			 * OR the top of the hero is greater than 30% from the top of the page
			 * THEN set the hero height to 90% of the browser height or 500px, whichever is greater
			 */
			if ( ( vh < vw * 0.75 && vh < 675 ) || ( p > 0.3 ) ) {
				h.el.style.height = Math.max( 0.9 * vh, 500 ) + 'px';
			} else {
				/**
				 * ELSE set the hero height to 98% of the browser height,
				 * less the distance between the top of the page and the top of the hero
				 */
				h.el.style.height = 98 - ( p * 100 ) + 'vh';
			}
		}
	}
}() );
