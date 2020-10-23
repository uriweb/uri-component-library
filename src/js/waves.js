/**
 * WAVES
 */

( function() {
	'use strict';

	window.addEventListener( 'load', initCLWaves, false );

	function initCLWaves() {
		const els = document.querySelectorAll( '.cl-wave' );
		const i = window.pageYOffset;

		window.addEventListener(
			'scroll',
			function() {
				moveWaves( els, i );
			}
		);
	}

	function moveWaves( els, i ) {
		let n, el;

		const offset = window.pageYOffset;
		const move = offset - i;

		for ( n = 0; n < els.length; n++ ) {
			el = els[ n ];
			el.firstElementChild.style.backgroundPositionX = move + 'px';
			el.lastElementChild.style.backgroundPositionX = move + 'px';
		}
	}
}() );
