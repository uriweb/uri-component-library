/**
 * HEROS
 *
 * @package uri-component-library
 */

var CLResizeSuperheros;

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
	 * Animation control for animated image heros
	 */
	function animate() {

		var heros, i;

		heros = document.querySelectorAll( '.cl-hero .animate.shift' );

		for ( i = 0; i < heros.length; i++ ) {
			heros[i].style.backgroundPositionX = '100%';
			heros[i].style.backgroundPositionY = 0;
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

			// Save a list of superheros, their initial offsets, and prompter divs
			H.push(
				{
					el: els[i],
					offset: els[i].getBoundingClientRect().top,
					prompt: div
			}
				);

		}

		CLResizeSuperheros = function( getOffset ) {

			var vh, vw, p;

			for ( i = 0; i < n; i++ ) {

				if ( false !== getOffset ) {
					H[i].offset = els[i].getBoundingClientRect().top;
				}

				vh = window.innerHeight;
				vw = window.innerWidth;
				p = Math.max( H[i].offset / vh, 0 );
                
                console.log(p);

				if ( ( vh < vw * 0.75 && vh * 0.9 < 600 ) || ( p > 0.3 ) ) {
					H[i].el.style.height = Math.max( 0.9 * vh, 500 ) + 'px';
					H[i].prompt.style.display = 'none';

				} else {
					H[i].el.style.height = 98 - p * 100 + 'vh';

					if ( H[i].offset < vh ) {
						H[i].prompt.style.display = 'block';
					} else {
						H[i].prompt.style.display = 'none';
					}

				}

			}

		};

		CLResizeSuperheros( false );

		window.addEventListener( 'resize', CLResizeSuperheros.bind( null, false ), false );

	}

})();
