( function() {

	'use strict';

	window.addEventListener( 'load', initCLThing, false );

	function initCLThing() {

		var things, i, block, div;

		things = document.querySelectorAll( '.cl-thing' );
		for ( i = 0; i < things.length; i++ ) {

			div = document.createElement( 'div' );
			div.className = 'cl-thing-slider';
			div.innerHTML = '<div class="prompter"></div>';
			div.title = 'Hide story';

			div.addEventListener( 'click', handleClick.bind( null, div, things[i] ), false );

			things[i].querySelector( '.block' ).appendChild( div );

		}

	}

	function handleClick( el, parent ) {

		var textblock;

		textblock = parent.querySelector( '.block' );

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
