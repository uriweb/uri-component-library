/**
 * ACCESSIBILITY CONTROLS
 */

class CLA11y { // eslint-disable-line no-unused-vars
	static hasNoMotion() {
		let a = false;
		if ( CLA11y.arePrefsSaved() && CLA11y.isSystemMotionPaused() ) {
			a = true;
		}
		return a;
	}
	static hasNoContrast() {
		let a = false;
		if ( CLA11y.arePrefsSaved() && CLA11y.isSystemContrastImproved() ) {
			a = true;
		}
		return a;
	}
	static arePrefsSaved() {
		let a = false;
		if ( '1' === URICL.getCookie( 'uri-cl-accessibility-saved' ) ) {
			a = true;
		}
		return a;
	}
	static isSystemMotionPaused() {
		let a = false;
		if ( '1' === URICL.getCookie( 'uri-cl-accessibility-motion' ) ) {
			a = true;
		}
		return a;
	}
	static isSystemContrastImproved() {
		let a = false;
		if ( '1' === URICL.getCookie( 'uri-cl-accessibility-contrast' ) ) {
			a = true;
		}
		return a;
	}
}

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
			classes: {
				system: 'cl-accessibility-applied-site-wide',
				motion: 'cl-accessibility-motion-paused',
				contrast: 'cl-accessibility-contrast-improved',
			},
		};

		if ( CLA11y.arePrefsSaved() ) {
			data.body.classList.add( data.classes.system );
		}

		if ( CLA11y.isSystemMotionPaused() ) {
			data.body.classList.add( data.classes.motion );
		}

		if ( CLA11y.isSystemContrastImproved() ) {
			data.body.classList.add( data.classes.contrast );
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
			controlSystem( el );
		}, false );

		const motion = el.querySelector( '.cl-accessibility-motion-control' );

		if ( CLA11y.hasNoMotion() ) {
			el.classList.toggle( data.classes.motion );
		}

		motion.addEventListener( 'click', function( e ) {
			e.preventDefault();
			controlMotion( el );
		}, false );

		const contrast = el.querySelector( '.cl-accessibility-contrast-control' );

		if ( CLA11y.hasNoContrast() ) {
			el.classList.toggle( data.classes.contrast );
		}

		contrast.addEventListener( 'click', function( e ) {
			e.preventDefault();
			controlContrast( el );
		}, false );
	}

	function controlMotion( el ) {
		let val = '0',
			applied = false;

		el.classList.toggle( data.classes.motion );

		if ( el.classList.contains( data.classes.motion ) ) {
			applied = true;
		}

		if ( CLA11y.arePrefsSaved() ) {
			if ( data.body.classList.toggle( data.classes.motion ) ) {
				val = '1';
			}

			for ( const e of data.els ) {
				e.classList.toggle( data.classes.motion, applied );
			}

			URICL.setCookie( data.settings.motion.key, val, 365 );
			//console.log( 'ally - global setting saved (motion, ' + val + ')' );
		}
	}

	function controlContrast( el ) {
		let val = '0',
			applied = false;

		el.classList.toggle( data.classes.contrast );

		if ( el.classList.contains( data.classes.contrast ) ) {
			applied = true;
		}

		if ( CLA11y.arePrefsSaved() ) {
			if ( data.body.classList.toggle( data.classes.contrast ) ) {
				val = '1';
			}

			for ( const e of data.els ) {
				e.classList.toggle( data.classes.contrast, applied );
			}

			URICL.setCookie( data.settings.contrast.key, val, 365 );
			//console.log( 'ally - global setting saved (contrast, ' + val + ')' );
		}
	}

	function controlSystem( el ) {
		let val;
		const keys = [ 'motion', 'contrast' ];

		if ( CLA11y.arePrefsSaved() ) {
			URICL.setCookie( data.settings.saved.key, '0', 365 );
			for ( const k of keys ) {
				URICL.setCookie( data.settings[ k ].key, '0', 365 );
			}
			//console.log( 'ally - user turned off global settings (reset)' );
			el.classList.toggle( data.classes.motion, data.body.classList.contains( data.classes.motion ) );
			el.classList.toggle( data.classes.contrast, data.body.classList.contains( data.classes.contrast ) );
		} else {
			URICL.setCookie( data.settings.saved.key, '1', 365 );
			for ( const k of keys ) {
				val = ( el.classList.contains( data.classes[ k ] ) ) ? '1' : '0';
				URICL.setCookie( data.settings[ k ].key, val, 365 );
				//console.log( 'a11y - user saved global settings (' + k + ', ' + val + ')' );
				if ( '1' === val ) {
					data.body.classList.add( data.classes[ k ] );
				} else {
					data.body.classList.remove( data.classes[ k ] );
				}
			}
		}

		data.body.classList.toggle( data.classes.system );
	}
}() );
