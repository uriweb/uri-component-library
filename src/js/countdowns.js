/**
 * COUNTDOWNS
 *
 * @todo: let js takeover the countdown in real time to help defeat caching
 * @package uri-component-library
 */

( function() {

  'use strict';

  window.addEventListener( 'load', init, false );

  function init() {

    var countdowns, i;

    countdowns = document.querySelectorAll( '.cl-countdown' );

    for ( i = 0; i < countdowns.length; i++ ) {
      setupCountdown( countdowns[i] );
    }

  }

  function setupCountdown( countdown ) {

    var d, cvalue, hash;

    d = countdown.querySelector( '.dismiss' );

    if ( null === d ) {
      return;
    }

    d.addEventListener( 'click', dismiss.bind( null, countdown ), false );
    hash = countdown.getAttribute( 'data-hash' );
    cvalue = getCookie( 'uri-cl-countdown-' + hash );

    if ( 'dismissed' == cvalue ) {
      dismiss( countdown );
    }

  }

  function dismiss( countdown ) {

    var hash;

    hash = countdown.getAttribute( 'data-hash' );

    countdown.classList.add( 'dismissed' );
    setCookie( 'uri-cl-countdown-' + hash, 'dismissed', 30 );

  }

  function setCookie( cname, cvalue, exdays ) {

    var d, expires;

    d = new Date();
    d.setTime( d.getTime() + ( exdays * 24 * 60 * 60 * 1000 ) );

    expires = 'expires=' + d.toUTCString();
    document.cookie = cname + '=' + cvalue + ';' + expires + ';path=/';

  }

  function getCookie( cname ) {

    var name, ca, i, c;

    name = cname + '=';
    ca = document.cookie.split( ';' );

    for ( i = 0; i < ca.length; i++ ) {

      c = ca[i];

      while ( ' ' == c.charAt( 0 ) ) {
        c = c.substring( 1 );
      }

      if ( 0 == c.indexOf( name ) ) {
        return c.substring( name.length, c.length );
      }

    }

    return '';

  }

})();
