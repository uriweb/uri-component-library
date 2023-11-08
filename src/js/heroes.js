/**
 * HEROES GENERAL FUNCTIONS
 */

let CLResizeSuperheroes;

( function() {
	'use strict';

	window.addEventListener( 'load', initCLHeroes, false );

	function initCLHeroes() {
		blurHeroControl();
		mobile();
		superhero();
	}

	/*
	 * Blur header hero on scroll
	 */
	function blurHeroControl() {
		let overlay, scroll, offset, radius;

		const hero = document.getElementById( 'hero' );

		if ( hero ) {
			overlay = hero.querySelector( '.overlay' );
			scroll = window.pageYOffset;
			offset = overlay.getBoundingClientRect().top + scroll;
			radius = 50; // Set the desired blur radius, in pixels

			blurHero();

			window.addEventListener(
				'scroll',
				function() {
					blurHero();
				}
			);
		}

		function blurHero() {
			const p = window.pageYOffset,
				h = overlay.offsetHeight + offset,
				b = Math.min( p / h * radius, radius );

			overlay.style.webkitBackdropFilter = 'blur(' + b + 'px)';
		}
	}

	function mobile() {
		let els;

		if ( URICL.checkSupport() ) {
			els = document.querySelectorAll( '.cl-hero .poster[data-platform=youtube]' );

			window.addEventListener(
				'resize',
				function() {
					let i;
					const w = window.innerWidth;
					if ( w < 750 ) {
						for ( i = 0; i < els.length; i++ ) {
							els[ i ].classList.remove( 'unveil' );
						}
					} else {
						for ( i = 0; i < els.length; i++ ) {
							els[ i ].classList.add( 'unveil' );
						}
					}
				}
			);
		}
	}

	function superhero() {
		let i;
		const H = [];
		const els = document.querySelectorAll( '.cl-hero.super .cl-hero-proper' );
		const n = els.length;

		for ( i = 0; i < n; i++ ) {
			// Save a list of superheroes and their initial offsets
			H.push(
				{
					el: els[ i ],
					offset: els[ i ].getBoundingClientRect().top,
				}
			);
		}

		CLResizeSuperheroes = function( getOffset ) {
			let h, p;

			const vh = window.innerHeight;
			const vw = window.innerWidth;
			const s = window.pageYOffset;

			for ( i = 0; i < n; i++ ) {
				h = H[ i ];

				if ( false !== getOffset ) {
					h.offset = h.el.getBoundingClientRect().top;
				}

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
		};

		// Trigger scroll event to refresh pageYOffset value on page reload (otherwise it'll be 0).
		window.dispatchEvent( new Event( 'scroll' ) );

		// Resize the superheroes.
		CLResizeSuperheroes( false );

		// Listen for any browser resizing.
		window.addEventListener( 'resize', CLResizeSuperheroes.bind( null, false ), false );
	}
}() );
