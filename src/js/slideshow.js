/**
 * SLIDESHOW
 *
 * Turn WP image galleries into something pretty.
 * Hooks into WP full-size image galleries only.
 */

( function() {
	'use strict';

	const carousels = [];

	window.addEventListener( 'load', initCLSlideshow, false );

	function initCLSlideshow() {
		let i;
		const g = document.querySelectorAll( '.gallery.gallery-size-full' );

		for ( i = 0; i < g.length; i++ ) {
			parseWPGallery( g[ i ] );
		}

		window.addEventListener( 'resize', handleResize, false );
	}

	/**
	 * Parse gallery element
	 *
	 * @param {Object} el The gallery element.
	 */
	function parseWPGallery( el ) {
		let i, parts, caption;

		const parsed = [];
		const figs = el.querySelectorAll( 'figure' );

		for ( i = 0; i < figs.length; i++ ) {
			parts = {};

			parts.img = figs[ i ].querySelector( 'img' );

			caption = figs[ i ].querySelector( 'figcaption' );
			if ( caption ) {
				parts.caption = caption.innerHTML;
			}

			parsed.push( parts );
		}

		buildSlideshowDOM( el, parsed );
	}

	/**
	 * Build slideshow DOM
	 *
	 * @param {Object} el The gallery element.
	 * @param {Object} parsed The parsed gallery.
	 */
	function buildSlideshowDOM( el, parsed ) {
		let slide, fig, cap, i;

		const S = document.createElement( 'div' );
		S.className = 'cl-slideshow';

		const carouselWrapper = document.createElement( 'div' );
		carouselWrapper.className = 'carousel-wrapper';
		S.appendChild( carouselWrapper );

		const carousel = document.createElement( 'div' );
		carousel.className = 'carousel transitions';
		carousel.setAttribute( 'style', 'grid-template-columns: repeat(' + parsed.length + ',100%)' );
		carouselWrapper.appendChild( carousel );

		const counter = document.createElement( 'div' );
		counter.className = 'counter';
		S.appendChild( counter );

		for ( i = 0; i < parsed.length; i++ ) {
			slide = document.createElement( 'div' );
			slide.className = 'slide';

			fig = document.createElement( 'figure' );
			fig.appendChild( parsed[ i ].img );

			cap = document.createElement( 'figcaption' );
			cap.innerHTML = parsed[ i ].caption ? parsed[ i ].caption : '';
			fig.appendChild( cap );

			slide.appendChild( fig );
			carousel.appendChild( slide );
		}

		const obj = {
			el: carousel,
			counter,
			n: parsed.length,
		};

		carousel.addEventListener( 'scroll', handleScroll.bind( null, obj ), false );
		carouselWrapper.appendChild( makeControlButtons( obj ) );
		carousels.push( obj );

		setPosition( obj, 0, 'auto' );

		el.parentNode.replaceChild( S, el );
	}

	/**
	 * Create controls
	 *
	 * @param {Object} c The carousel object.
	 */
	function makeControlButtons( c ) {
		let target, button, x;
		const controls = document.createElement( 'div' );

		controls.className = 'controls';

		const types = [ 'Previous', 'Next' ];

		for ( x in types ) {
			target = document.createElement( 'div' );
			target.className = 'target ' + types[ x ].toLowerCase();
			target.title = types[ x ];
			target.addEventListener( 'click', controlDirection.bind( null, c, types[ x ], false ) );

			button = document.createElement( 'div' );
			button.className = 'controller';
			target.appendChild( button );

			controls.appendChild( target );
		}

		return controls;
	}

	/**
	 * Control direction of movement
	 *
	 * @param {Object} c The carousel object.
	 * @param {string} direction The direction to move in.
	 * @param {boolean} mobile Called from mobile device.
	 */
	function controlDirection( c, direction, mobile ) {
		let index;
		index = c.el.getAttribute( 'data-position' );

		const count = c.el.children.length - 1;

		// Reset the endslide animation
		c.el.classList.remove( 'reboundLeft', 'reboundRight' );

		if ( 'Next' === direction ) {
			index++;
			if ( index > count ) {
				if ( ! mobile ) {
					void c.el.offsetWidth; // Trigger reflow to restart animation
					c.el.classList.add( 'reboundRight' );
					return;
				}
				index--;
			}
		} else {
			index--;
			if ( index < 0 ) {
				if ( ! mobile ) {
					void c.el.offsetWidth; // Trigger reflow to restart animation
					c.el.classList.add( 'reboundLeft' );
					return;
				}
				index++;
			}
		}

		setPosition( c, index, 'smooth' );
	}

	/**
	 * Set position of slideshow
	 *
	 * @param {Object} c The carousel object.
	 * @param {number} index The index to move to.
	 * @param {string} behavior The scroll behavior.
	 */
	function setPosition( c, index, behavior ) {
		c.el.scroll(
			{
				top: 0,
				left: c.el.offsetWidth * index,
				behavior,
			}
		);

		c.el.setAttribute( 'data-position', index );

		updateCounter( c, index );
		updateActive( c, index );
	}

	function updateCounter( c, index ) {
		c.counter.innerHTML = '<span>' + ( ( index * 1 ) + 1 ) + '</span> of ' + c.n;
	}

	function updateActive( c, index ) {
		let i;

		const slide = c.el.querySelectorAll( '.slide' );
		for ( i = 0; i < c.n; i++ ) {
			slide[ i ].classList.remove( 'active' );
		}

		slide[ index ].classList.add( 'active' );
	}

	function handleScroll( c ) {
		const s = c.el.scrollLeft;
		const i = s / c.el.offsetWidth;
		if ( Number.isInteger( i ) ) {
			c.el.setAttribute( 'data-position', i );
			updateCounter( c, i );
			updateActive( c, i );
		}
	}

	function handleResize() {
		let i;

		for ( i = 0; i < carousels.length; i++ ) {
			setPosition( carousels[ i ], carousels[ i ].el.getAttribute( 'data-position' ), 'auto' );
		}
	}
}() );
