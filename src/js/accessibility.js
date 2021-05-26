/**
 * ACCESSIBILITY CONTROLS
 */

( function() {
	'use strict';

	let data;

	window.addEventListener( 'load', init, false );

	function init() {
		data = {
			body: document.getElementsByTagName( 'BODY' )[ 0 ],
			els: document.querySelectorAll( '.cl-has-accessibility-controls' ),
			settings: {
				saved: { key: 'uri-cl-accessibility-saved' },
				motion: { key: 'uri-cl-accessibility-motion' },
				contrast: { key: 'uri-cl-accessibility-contrast' },
			},
		};

		data.settings.saved.value = URICL.getCookie( data.settings.saved.key );
		data.settings.motion.value = URICL.getCookie( data.settings.motion.key );
		data.settings.contrast.value = URICL.getCookie( data.settings.contrast.key );

		if ( isSystemWide() ) {
			toggleSystemClass();
		}

		let i;
		const n = data.els.length;
		for ( i = 0; i < n; i++ ) {
			setupControls( data.els[ i ] );
		}
	}

	function setupControls( el ) {
		const system = el.querySelector( '.cl-accessibility-system-setting' );

		system.addEventListener( 'click', function( e ) {
			e.preventDefault();
			controlSystem();
		}, false );

		const contrast = el.querySelector( '.cl-accessibility-contrast-control' );

		if ( isSystemWide() && '1' === data.settings.contrast.value ) {
			controlContrast( el, system );
		}

		contrast.addEventListener( 'click', function( e ) {
			e.preventDefault();
			controlContrast( el, system );
		}, false );

		const motion = el.querySelector( '.cl-accessibility-motion-control' );

		if ( isSystemWide() && '1' === data.settings.motion.value ) {
			controlMotion( el, system );
		}

		motion.addEventListener( 'click', function( e ) {
			e.preventDefault();
			controlMotion( el, system );
		}, false );
	}

	function controlContrast( el, s ) {
		let val = '0';

		if ( el.classList.toggle( 'cl-accessibility-contrast-improved' ) ) {
			val = '1';
		}

		s.setAttribute( 'data-contrast', val );

		if ( isSystemWide() ) {
			URICL.setCookie( data.settings.contrast.key, val, 365 );
		}
	}

	function controlMotion( el, s ) {
		let val = '0';

		if ( el.classList.toggle( 'cl-accessibility-motion-paused' ) ) {
			val = '1';
		}

		s.setAttribute( 'data-motion', val );

		if ( isSystemWide() ) {
			URICL.setCookie( data.settings.motion.key, val, 365 );
		}
	}

	function isSystemWide() {
		let a = false;
		if ( '1' === data.settings.saved.value ) {
			a = true;
		}
		return a;
	}

	function controlSystem() {
		data.settings.saved.value = ( '1' === data.settings.saved.value ) ? '0' : '1';
		URICL.setCookie( data.settings.saved.key, data.settings.saved.value, 365 );
		toggleSystemClass();
	}

	function toggleSystemClass() {
		data.body.classList.toggle( 'cl-accessibility-applied-site-wide' );
	}
}() );
