/**
 * YOUTUBE API
 *
 * @package uri-component-library
 */

// jshint esversion: 6
// jscs:disable requireVarDeclFirst
class CLYT {

	/*
	 * Load the API
	 */
	static loadYouTubeAPI() {

		var tag, firstScriptTag;

		tag = document.createElement( 'script' );
		tag.src = 'https://www.youtube.com/player_api';
		firstScriptTag = document.getElementsByTagName( 'script' )[0];
		firstScriptTag.parentNode.insertBefore( tag, firstScriptTag );

	}

	/*
	 * Dynamically set the hero height and position based on width
	 * @param el el the hero
	 * @param el parent the hero parent container
	 */
	static resizeHero( el, parent ) {
		var w = parent.offsetWidth,
			h = parent.offsetHeight;

		if ( w / h > 16 / 9 ) {
			el.style.height = w * 9 / 16 + 'px';
			el.style.width = '100%';
			el.style.left = 0;
			el.style.top = ( h - ( w * 9 / 16 ) ) / 2 + 'px';
			el.style.marginLeft = 0;
		} else {
			w = h * 16 / 9;
			el.style.height = '100%';
			el.style.width = w + 'px';
			el.style.left = 0 - w / 2 + 'px';
			el.style.top = 0;
			el.style.marginLeft = '50%';
		}
	}

	/*
	 * Dynamically set the video height and position based on width
	 * @param obj event the event
	 * @param el el the video
	 * @param el parent the video parent container
	 */
	static resizeVideo( event, el, parent ) {
		el.style.height = parent.offsetWidth / ( event.target.a.offsetWidth / event.target.a.offsetHeight ) + 'px';
	}

	/*
	 * Pause the hero when it's completely out of the viewport
	 * @param obj event the hero player
	 * @param el parent the hero parent container
	 */
	static determinePlayState( event, parent ) {
		var v = window.innerHeight,
			p = window.pageYOffset,
			h = parent.offsetHeight,
			o = parent.getBoundingClientRect().top + p;

		if ( v + p < o || p > o + h ) {
			event.target.pauseVideo();
		} else {
			event.target.playVideo();
		}

	}

	/*
	 * Do things with the hero when it's loaded
	 * @param obj event the hero player
	 */
	static onHeroReady( event ) {

		var el, parent, overlay, button;

		// Mute the vid
		event.target.mute();

		el = event.target.getIframe();
		parent = event.target.a.parentNode;

		// Listen for browser resizing
		window.addEventListener(
			'resize',
			function() {
				CLYT.resizeHero( el, parent );
			}
		);
		CLYT.resizeHero( el, parent );

		// Listen for scrolling
		window.addEventListener(
			'scroll',
			function() {
				if ( ! parent.classList.contains( 'paused' ) ) {
					CLYT.determinePlayState( event, parent );
				}
			}
		);
		CLYT.determinePlayState( event, parent );

		// Add play/pause button
		overlay = parent.querySelector( '.overlay' );
		button = document.createElement( 'div' );

		button.className = 'motionswitch';
		button.title = 'Pause';
		button.addEventListener(
			'click',
			function() {
				CLYT.heroControl( event, parent, this );
			}
		);

		overlay.appendChild( button );

	}

	/*
	 * Do things with the video when it's loaded
	 * @param str id the id of the video
	 */
	static onVideoReady( event ) {
		var el = event.target.getIframe(),
			key = event.target.a.id,
			parent = event.target.a.parentNode;

		window.addEventListener(
			'resize',
			function() {
				CLYT.resizeVideo( event, el, parent );
			}
		);
		CLYT.resizeVideo( event, el, parent );

	}

	/*
	 * User control of the hero video
	 * @param obj event the hero player
	 * @param el parent the hero parent container
	 * @param el el the .motionswitch element
	 */
	static heroControl( event, parent, el ) {
		switch ( event.target.getPlayerState() ) {
			default:
			case 1:
				event.target.pauseVideo();
				parent.classList.add( 'paused' );
				el.setAttribute( 'title', 'Play' );
				break;
			case 2:
				event.target.playVideo();
				parent.classList.remove( 'paused' );
				el.setAttribute( 'title', 'Pause' );
				break;
		}
	}

	/*
	 * Get hero state and decide what to do
	 * @param obj event the hero player
	 */
	static onHeroStateChange( event ) {
		var state = event.target.getPlayerState();
		switch ( state ) {
			case 0:
				event.target.playVideo();
				break;
			case -1:
			case 1:
				if ( window.innerWidth > 750 ) {
					event.target.a.previousSibling.classList.add( 'unveil' );
				}
				break;
		}
	}

	/*
	 * Revert to poster if there's an error with the hero video
	 * @param obj event the event
	 */
	static onHeroError( event ) {
		event.target.a.previousSibling.classList.remove( 'unveil' );
		event.target.a.parentNode.querySelector( '.motionswitch' ).style.display = 'none';
	}

	/*
	 * Link the poster to the video on YouTube if there's an error with the video
	 * @param obj event the event
	 */
	static onVideoError( event ) {
		var poster, a, img, alt, iframe;

		poster = event.target.a.previousSibling;

		a = document.createElement( 'a' );
		a.href = 'http://www.youtube.com/watch?v=' + event.target.a.id;
		a.title = 'Try watching this video on YouTube';

		img = document.createElement( 'img' );
		img.src = poster.getAttribute( 'src' );
		alt = poster.getAttribute( 'alt' );
		if ( ! alt ) {
			alt = 'Poster for video';
		}
		img.alt = alt;
		a.appendChild( img );

		iframe = document.getElementById( event.target.a.id );
		if ( iframe ) {
			event.target.a.parentNode.replaceChild( a, iframe );
		}

	}

	/*
	 * Get video state and decide what to do
	 * @param obj event the video player
	 */
	static onVideoStateChange( event ) {

		var state = event.target.getPlayerState(),
			key = event.target.a.id,
			overlay = event.target.a.parentNode.querySelector( '.overlay' );

		switch ( state ) {
			case 1:
			case 3:
				overlay.classList.add( 'hidden' );
				break;
			default:
				overlay.classList.remove( 'hidden' );
		}
	}

}
