/**
 * OVERLAYS
 */

( function() {
	'use strict';

	window.addEventListener( 'load', initCLOverlay, false );

	function initCLOverlay() {
		let i, div;
		const els = document.querySelectorAll( '.cl-overlay' );

		for ( i = 0; i < els.length; i++ ) {
			div = document.createElement( 'div' );
			div.className = 'cl-overlay-slider';
			div.innerHTML = '<div class="cl-overlay-prompter"></div>';
			div.title = 'Hide story';

			div.addEventListener( 'click', handleClick.bind( null, div, els[ i ] ), false );

			els[ i ].querySelector( '.cl-overlay-block' ).appendChild( div );
		}
	}

	function handleClick( el, parent ) {
		const textblock = parent.querySelector( '.cl-overlay-block' );

		if ( textblock.classList.contains( 'hidden' ) ) {
			textblock.classList.remove( 'hidden' );
			parent.style.height = 'auto';
			el.title = 'Hide story';
		} else {
			parent.style.height = parent.offsetHeight + 'px';
			textblock.classList.add( 'hidden' );
			el.title = 'Show story';
		}
	}
}() );
