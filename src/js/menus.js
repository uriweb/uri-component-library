/**
 * MENUS
 */

( function() {
	'use strict';

	const revealClass = 'reveal';

	window.addEventListener( 'load', initCLMenus, false );

	function initCLMenus() {
		let toggle, list, i, a, span, li;

		// Since we have JS, let's add a unique css hook and submenu triggers
		const menus = document.querySelectorAll( '.cl-menu' );
		for ( i = 0; i < menus.length; i++ ) {
			toggle = document.createElement( 'span' );
			toggle.className = 'cl-menu-toggle';
			if ( '0' === menus[ i ].getAttribute( 'data-show-title' ) ) {
				toggle.classList.add( 'hidden' );
			}
			toggle.innerHTML = menus[ i ].getAttribute( 'data-name' );
			toggle.addEventListener(
				'click',
				function() {
					if ( this.classList.contains( 'active' ) ) {
						this.classList.remove( 'active' );
					} else {
						this.classList.add( 'active' );
					}
				}
			);

			list = menus[ i ].querySelector( '.cl-menu-list' );
			list.classList.remove( 'cl-menu-list-no-js' );

			menus[ i ].insertBefore( toggle, list );
			menus[ i ].classList.add( 'cl-menu-js' );
		}

		const uls = document.querySelectorAll( '.cl-menu-list ul' );
		for ( i = 0; i < uls.length; i++ ) {
			span = document.createElement( 'span' );
			span.className = 'cl-menu-arrow';
			uls[ i ].parentNode.append( span );

			a = uls[ i ].parentNode.querySelector( 'a' );

			li = document.createElement( 'li' );
			li.appendChild( a.cloneNode( true ) );
			uls[ i ].insertBefore( li, uls[ i ].firstChild );

			a.classList.add( 'cl-menu-trigger' );

			bindListeners( a, uls, uls[ i ] );
		}
	}

	function bindListeners( a, uls, ul ) {
		a.addEventListener(
			'click',
			function( e ) {
				e.preventDefault();
				handleClick( uls, ul );
			}
		);
	}

	function handleClick( els, el ) {
		let i;
		const toggle = el.classList.contains( revealClass );

		for ( i = 0; i < els.length; i++ ) {
			els[ i ].classList.remove( revealClass );
		}

		if ( ! toggle ) {
			el.classList.add( revealClass );
		}
	}
}() );
