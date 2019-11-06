/**
 * SLIDESHOW
 *
 * Turn WP image galleries into something pretty.
 * Hooks into WP full-size image galleries only.
 *
 * @package uri-component-library
 */

( function() {

	'use strict';

	window.addEventListener( 'load', initCLSlideshow, false );

	var carousels = [];

	function initCLSlideshow() {

		var g, i;

		g = document.querySelectorAll( '.gallery.gallery-size-full' );
		for ( i = 0; i < g.length; i++ ) {
			parseWPGallery( g[i] );
		}

		window.addEventListener( 'resize', handleResize, false );

	}

	/*
	 * Parse gallery element
	 * @param el el the gallery element
	 */
	function parseWPGallery( el ) {

		var figs, i, parts, caption, parsed = [];

		figs = el.querySelectorAll( 'figure' );

		for ( i = 0; i < figs.length; i++ ) {

			parts = {};

			parts.img = figs[i].querySelector( 'img' );

			caption = figs[i].querySelector( 'figcaption' );
			if ( caption ) {
				parts.caption = caption.innerHTML;
			}

			parsed.push( parts );

		}

		buildSlideshowDOM( el, parsed );

	}

	/*
	 * Build slideshow DOM
	 * @param el el the gallery element
	 * @param parsed obj the parsed gallery
	 */
	function buildSlideshowDOM( el, parsed ) {
		var S, carouselWrapper, carousel, counter, slide, fig, cap, i, obj;

		S = document.createElement( 'div' );
		S.className = 'cl-slideshow';

		carouselWrapper = document.createElement( 'div' );
		carouselWrapper.className = 'carousel-wrapper';
		S.appendChild( carouselWrapper );

		carousel = document.createElement( 'div' );
		carousel.className = 'carousel transitions';
		carousel.setAttribute( 'style', 'grid-template-columns: repeat(' + parsed.length + ',100%)' );
		carouselWrapper.appendChild( carousel );

		counter = document.createElement( 'div' );
		counter.className = 'counter';
		S.appendChild( counter );

		for ( i = 0; i < parsed.length; i++ ) {

			slide = document.createElement( 'div' );
			slide.className = 'slide';

			fig = document.createElement( 'figure' );
			fig.appendChild( parsed[i].img );
			slide.appendChild( fig );

			cap = document.createElement( 'figcaption' );
			cap.innerHTML = parsed[i].caption ? parsed[i].caption : '';
			slide.appendChild( cap );

			carousel.appendChild( slide );

		}

		obj = {
			el: carousel,
			counter: counter,
			n: parsed.length
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
	 * @param c obj the carousel object
	 */
	function makeControlButtons( c ) {
		var controls, types, target, button, x;

		controls = document.createElement( 'div' );
		controls.className = 'controls';

		types = ['Previous', 'Next'];

		for ( x in types ) {
			target = document.createElement( 'div' );
			target.className = 'target ' + types[x].toLowerCase();
			target.title = types[x];
			target.addEventListener( 'click', controlDirection.bind( null, c, types[x], false ) );

			button = document.createElement( 'div' );
			button.className = 'controller';
			target.appendChild( button );

			controls.appendChild( target );
		}

		return controls;

	}

	/*
	 * Control direction of movement
	 * @param c obj the carousel object
	 * @param direction str the direction to move in
	 * @param mobile bool called from mobile device
	 */
	function controlDirection( c, direction, mobile ) {
		var index, count;
		index = c.el.getAttribute( 'data-position' );
		count = c.el.children.length - 1;

		// Reset the endslide animation
		c.el.classList.remove( 'reboundLeft', 'reboundRight' );

		if ( 'Next' === direction ) {
			index++;
			if ( index > count ) {
				if ( ! mobile ) {
					void c.el.offsetWidth; // Trigger reflow to restart animation
					c.el.classList.add( 'reboundRight' );
					return;
				} else {
					index--;
				}
			}
		} else {
			index--;
			if ( index < 0 ) {
				if ( ! mobile ) {
					void c.el.offsetWidth; // Trigger reflow to restart animation
					c.el.classList.add( 'reboundLeft' );
					return;
				} else {
					index++;
				}
			}
		}

		setPosition( c, index, 'smooth' );

	}

	/*
	 * Set position of slideshow
	 * @param c obj the carousel object
	 * @param index int the index to move to
	 */
	function setPosition( c, index, behavior ) {

		c.el.scroll(
			{
				top: 0,
				left: c.el.offsetWidth * index,
				behavior: behavior
		}
			);

		c.el.setAttribute( 'data-position', index );

		updateCounter( c, index );
		updateActive( c, index );

	}

	function updateCounter( c, index ) {
		c.counter.innerHTML = '<span>' + ( index * 1 + 1 ) + '</span> of ' + c.n;
	}

	function updateActive( c, index ) {

		var i, slide;

		slide = c.el.querySelectorAll( '.slide' );
		for ( i = 0; i < c.n; i++ ) {
			slide[i].classList.remove( 'active' );
		}

		slide[index].classList.add( 'active' );

	}

	function handleScroll( c ) {

		var s, i;

		s = c.el.scrollLeft;
		i = s / c.el.offsetWidth;
		if ( Number.isInteger( i ) ) {
			c.el.setAttribute( 'data-position', i );
			updateCounter( c, i );
			updateActive( c, i );
		}

	}

	function handleResize() {

		var i;

		for ( i = 0; i < carousels.length; i++ ) {
			setPosition( carousels[i], carousels[i].el.getAttribute( 'data-position' ), 'auto' );
		}

	}

})();
