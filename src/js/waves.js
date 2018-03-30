/**
 * WAVES
 *
 * @package uri-component-library
 */

( function() {

	'use strict';

	window.addEventListener( 'load', initCLWaves, false );

	function initCLWaves() {
		var els, i;

		els = document.querySelectorAll( '.cl-wave' );
		i = window.pageYOffset;

		window.addEventListener(
			'scroll', function() {
				moveWaves( els, i );
			}
		);

	}

	function moveWaves( els, i ) {
		var offset, move, pos, n, el;

		offset = window.pageYOffset;
		move = offset - i;

		for ( n = 0; n < els.length; n++ ) {
			el = els[n];
			pos = el.firstElementChild.style.backgroundPositionX.split( 'px' )[0];
			pos += move;

			el.firstElementChild.style.backgroundPositionX = move + 'px';
			el.lastElementChild.style.backgroundPositionX = move + 'px';
		}
	}

})();
