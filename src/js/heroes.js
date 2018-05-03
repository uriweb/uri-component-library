/**
 * HEROS
 *
 * @package uri-component-library
 */

var CLResizeSuperheroes;

( function() {

	'use strict';

	window.addEventListener( 'load', initCLHeros, false );

	function initCLHeros() {
		animate();
		blurHeroControl();
		mobile();
		superhero();
	}

	/*
	 * Animation control for animated image heroes
	 */
	function animate() {

		var heroes, i;

		heroes = document.querySelectorAll( '.cl-hero .animate.shift' );

		for ( i = 0; i < heroes.length; i++ ) {
			heroes[i].style.backgroundPositionX = '100%';
			heroes[i].style.backgroundPositionY = 0;
		}

	}

	/*
	 * Blur header hero on scroll
	 */
	function blurHeroControl() {

		var hero, overlay, scroll, offset, radius;

		hero = document.getElementById( 'hero' );

		if ( hero ) {

			overlay = hero.querySelector( '.overlay' );
			scroll = window.pageYOffset;
			offset = overlay.getBoundingClientRect().top + scroll;
			radius = 50; // Set the desired blur radius, in pixels

			blurHero();

			window.addEventListener(
				'scroll', function() {
					blurHero();
				}
			);

		}

		function blurHero() {
			var p = window.pageYOffset,
				h = overlay.offsetHeight + offset,
				b = Math.min( p / h * radius, radius );

			overlay.style.webkitBackdropFilter = 'blur(' + b + 'px)';
		}

	}

	function mobile() {

		var els = document.querySelectorAll( '.cl-hero .poster' );

		window.addEventListener(
			'resize', function() {
				var i, w = window.innerWidth;
				if ( w < 750 ) {
					for ( i = 0; i < els.length; i++ ) {
						els[i].classList.remove( 'unveil' );
					}
				} else {
					for ( i = 0; i < els.length; i++ ) {
						els[i].classList.add( 'unveil' );
					}
				}
			}
		);
	}

	function superhero() {

		var H = [], els, n, i, div;

		els = document.querySelectorAll( '.cl-hero.super' );
		n = els.length;

		for ( i = 0; i < n; i++ ) {

			// Create the scroll prompter
			div = document.createElement( 'div' );
			div.className = 'prompter';
			div.innerHTML = 'Scroll down';
			els[i].appendChild( div );

			// Save a list of superheroes, their initial offsets, and prompter divs
			H.push(
				{
					el: els[i],
					offset: els[i].getBoundingClientRect().top,
					prompt: div
			}
				);

		}

		CLResizeSuperheroes = function( getOffset ) {

			var vh, vw, s, p;

			vh = window.innerHeight;
			vw = window.innerWidth;
			s = window.pageYOffset;

			for ( i = 0; i < n; i++ ) {

				if ( false !== getOffset ) {
					H[i].offset = els[i].getBoundingClientRect().top;
				}

				p = ( H[i].offset + s ) / vh;

				/**
				 * IF the browser aspect ratio is at least 4:3 and the browser is less than 675px high
				 * OR the top of the hero is greater than 30% from the top of the page
				 * THEN set the hero height to 90% of the browser height or 500px, whichever is greater
				 */
				if ( ( vh < vw * 0.75 && vh < 675 ) || ( p > 0.3 ) ) {
					H[i].el.style.height = Math.max( 0.9 * vh, 500 ) + 'px';
					H[i].prompt.style.display = 'none';
				} else {

					/**
					 * ELSE set the hero height to 98% of the browser height,
					 * less the distance between the top of the page and the top of the hero
					 */
					H[i].el.style.height = 98 - p * 100 + 'vh';

					if ( H[i].offset < vh ) {
						H[i].prompt.style.display = 'block';
					} else {
						H[i].prompt.style.display = 'none';
					}

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

})();
