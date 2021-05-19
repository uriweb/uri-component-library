/**
 * ACCESSIBILITY CONTROLS
 */

( function() {
	'use strict';

	window.addEventListener( 'load', init, false );

	function init() {
		let i;
		const els = document.querySelectorAll( '.cl-has-accessibility-controls' );
		const n = els.length;
		const body = document.getElementsByTagName( 'BODY' )[ 0 ];

		for ( i = 0; i < n; i++ ) {
			setupControls( els[ i ], body );
		}
	}

	function setupControls( el, body ) {
		const contrast = el.querySelector( '.cl-accessibility-contrast-control .cl-accessibility-control-button' );
		const contrastLabel = el.querySelector( '.cl-accessibility-contrast-control .cl-accessibility-syntax' );

		contrast.addEventListener( 'click', function( e ) {
			e.preventDefault();
			controlContrast( el, contrast, contrastLabel );
		}, false );

		const motion = el.querySelector( '.cl-accessibility-motion-control .cl-accessibility-control-button' );
		const motionLabel = el.querySelector( '.cl-accessibility-motion-control .cl-accessibility-syntax' );

		motion.addEventListener( 'click', function( e ) {
			e.preventDefault();
			controlMotion( el, motion, motionLabel );
		}, false );

		const system = el.querySelector( '.cl-accessibility-system-setting' );

		system.addEventListener( 'click', function( e ) {
			e.preventDefault();
			controlSystem( body );
		}, false );
	}

	function controlContrast( el, a, s ) {
		const className = 'cl-accessibility-contrast-improved';
		if ( el.classList.contains( className ) ) {
			el.classList.remove( className );
			a.setAttribute( 'title', 'Improve text contrast' );
			a.innerHTML = 'Improve text contrast';
			s.innerHTML = 'Standard';
		} else {
			el.classList.add( className );
			a.setAttribute( 'title', 'Reset contrast' );
			a.innerHTML = 'Reset contrast';
			s.innerHTML = 'High';
		}
	}

	function controlMotion( el, a, s ) {
		const className = 'cl-accessibility-motion-paused';
		if ( el.classList.contains( className ) ) {
			el.classList.remove( className );
			a.setAttribute( 'title', 'Pause motion' );
			a.innerHTML = 'Pause motion';
			s.innerHTML = 'On';
		} else {
			el.classList.add( className );
			a.setAttribute( 'title', 'Play motion' );
			a.innerHTML = 'Play motion';
			s.innerHTML = 'Off';
		}
	}

	function controlSystem( b ) {
		const className = 'cl-accessibility-applied-site-wide';
		b.classList.toggle( className );
	}
}() );
