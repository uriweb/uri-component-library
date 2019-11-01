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
		var S, carouselWrapper, carousel, captions, counter, slide, fig, cap, i, obj;

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
		counter.innerHTML = '<span></span> of ' + parsed.length;
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

		var S, p, active, captions, counter;

		c.el.scroll({
      top: 0,
      left: c.el.offsetWidth * index,
      behavior: behavior
    });

		c.el.setAttribute( 'data-position', index );

		/*
    S = c.parentNode.parentNode;

		active = S.querySelector( '.captions .active' );
		if ( active ) {
			active.classList.remove( 'active' );
		}

		captions = S.querySelectorAll( '.caption' );
		captions[index].classList.add( 'active' );

		counter = S.querySelector( '.counter span' );
		counter.innerHTML = index + 1;
    */

	}

  function handleScroll( c ) {

    var p, s;

    p = c.el.getAttribute( 'data-position' );
    s = c.el.scrollLeft;
    if ( Number.isInteger( s / c.el.offsetWidth ) ) {
      c.el.setAttribute( 'data-position', s / c.el.offsetWidth );
    }

  }

  function handleResize() {

    console.log( 'resized ');

    var i;

    for ( i = 0; i < carousels.length; i++ ) {
      setPosition( carousels[i], carousels[i].el.getAttribute( 'data-position' ), 'auto' );
    }

  }

})();
