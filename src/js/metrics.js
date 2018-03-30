/**
 * METRICS
 *
 * @package uri-component-library
 */

( function() {

	'use strict';

	window.addEventListener( 'load', initCLMetrics, false );

	function initCLMetrics() {

		var metrics, fontSize, i;

		metrics = document.querySelectorAll( '.cl-metric' );

		if ( metrics.length > 0 ) {

			for ( i = 0; i < metrics.length; i++ ) {
				metrics[i].setAttribute( 'data-font-max', window.getComputedStyle( metrics[i].querySelector( 'span' ) ).getPropertyValue( 'font-size' ).match( /\d+/ )[0] );
			}

			fitMetricsToContainer( metrics );

			window.addEventListener( 'resize', fitMetricsToContainer.bind( null, metrics ) );

		}

	}

	function fitMetricsToContainer(metrics) {

		var i, m;

		for ( i = 0; i < metrics.length; i++ ) {

			m = {};

			m.el = metrics[i];
			m.num = m.el.querySelector( 'span' );
			m.w = m.num.clientWidth;
			m.fs = window.getComputedStyle( m.num ).getPropertyValue( 'font-size' ); // Instantaneous computed font size
			m.sw = m.num.scrollWidth;
			m.mfs = m.el.getAttribute( 'data-font-max' ); // Original font size set by CSS
			m.nfs = m.fs.match( /\d+/ )[0]; // Trim units off font-size

			if ( m.sw > m.w ) {
				m.num.classList.add( 'autosized' );
				while ( m.sw > m.w ) {
					m.nfs--;
					m.num.style.fontSize = m.nfs + 'px';
					m.sw = m.num.scrollWidth;
				}
			} else if ( m.num.classList.contains( 'autosized' ) ) {
				while ( m.sw == m.w && m.nfs < m.mfs ) {
					m.nfs++;
					m.num.style.fontSize = m.nfs + 'px';
					m.sw = m.num.scrollWidth;
				}
			}

		}

	}

})();
