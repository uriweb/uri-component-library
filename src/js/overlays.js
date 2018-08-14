/**
 * OVERLAYS
 *
 * @package uri-component-library
 */

( function() {

	'use strict';

	window.addEventListener( 'load', initCLOverlay, false );

	function initCLOverlay() {

		var things, i, block, div;

		things = document.querySelectorAll( '.cl-overlay' );
		for ( i = 0; i < things.length; i++ ) {

			div = document.createElement( 'div' );
			div.className = 'cl-overlay-slider';
			div.innerHTML = '<div class="cl-overlay-prompter"></div>';
			div.title = 'Hide story';

			div.addEventListener( 'click', handleClick.bind( null, div, things[i] ), false );

			things[i].querySelector( '.cl-overlay-block' ).appendChild( div );

		}

	}

	function handleClick( el, parent ) {

		var textblock;

		textblock = parent.querySelector( '.cl-overlay-block' );

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

})();
