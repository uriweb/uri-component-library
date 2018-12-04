/**
 * HERO VIDS / VIDEOS
 *
 * @package uri-component-library
 */

// Create this in the global scope so the YouTube API can call it locally.
var CLCreateYouTubePlayers;
function onYouTubePlayerAPIReady() {
	CLCreateYouTubePlayers();
}

( function() {

	'use strict';

	var uriVidHeroes = {},
		uriVideos = {};

	window.addEventListener( 'load', getVids, false );

	/*
	 * Get video ID(s) and load the API
	 */
	function getVids() {

		var requireYouTube = false,
			heroSupport = checkSupport(),
			heroes = document.querySelectorAll( '.cl-hero .poster' ),
			vids = document.querySelectorAll( '.cl-video img' ),
			el, key, parent, i, start, end, placeholder, aspect;

		if ( heroSupport ) {

			for ( i = 0; i < heroes.length; i++ ) {

				el = heroes[i];
				key = el.getAttribute( 'id' );
				parent = el.parentNode;
				start = el.getAttribute( 'data-start' );
				end = el.getAttribute( 'data-end' );

				uriVidHeroes[key] = {
					'poster': el,
					'parent': parent,
					'ytid': el.getAttribute( 'data-id' ),
					'w': parent.offsetWidth,
					'h': parent.offsetHeight,
					'start': start ? start : 0,
					'end': end ? end : -1
				};

				// Remove poster id and create a new placeholder for the video
				el.removeAttribute( 'id' );
				placeholder = document.createElement( 'div' );
				placeholder.id = key;
				parent.appendChild( placeholder );

				requireYouTube = true;

			}

		}

		for ( i = 0; i < vids.length; i++ ) {

			el = vids[i];
			key = el.getAttribute( 'id' );

			aspect = 16 / 9; // Set default aspect

			if ( el.getAttribute( 'data-aspect' ) ) {
				aspect = el.getAttribute( 'data-aspect' ).split( ':' );
				aspect = aspect[0] / aspect[1];
			}

			uriVideos[key] = {
				'poster': el,
				'ytid': el.getAttribute( 'data-id' ),
				'parent': el.parentNode,
				'aspect': aspect
			};

			requireYouTube = true;

		}

		if ( requireYouTube ) {
			loadYouTubeAPI();
		}

	}

	/*
	 * Check browser support (essentially anything but IE)
	 * @return bool
	 */
	function checkSupport() {
		var support = true,
			ua = navigator.userAgent,
			msie = ua.indexOf( 'MSIE ' ),
			trident = ua.indexOf( 'Trident/' );

		if ( 'Microsoft Internet Explorer' === navigator.appName || msie > 0 || trident > 0 ) {
			support = false;
		}

		return support;
	}

	/*
	 * Load the API
	 */
	function loadYouTubeAPI() {
		var tag, firstScriptTag;

		tag = document.createElement( 'script' );
		tag.src = 'https://www.youtube.com/player_api';
		firstScriptTag = document.getElementsByTagName( 'script' )[0];
		firstScriptTag.parentNode.insertBefore( tag, firstScriptTag );
	}

	/*
	 * Create the player(s)
	 */
	CLCreateYouTubePlayers = function() {

		var key, value;

		for ( key in uriVidHeroes ) {

			value = uriVidHeroes[key];

			value.player = new YT.Player(
				key,
				{
					width: value.w,
					height: value.h,
					videoId: value.ytid,
					playerVars: {
						autoplay: 1,
						controls: 0,
						showinfo: 0,
						start: value.start,
						end: value.end,
						modestbranding: 1,
						iv_load_policy: 3,
						rel: 0
					},
					events: {
						'onReady': onHeroReady,
						'onStateChange': onHeroStateChange,
						'onError': onHeroError
					}
			}
				);

		}

		for ( key in uriVideos ) {

			value = uriVideos[key];

			value.player = new YT.Player(
				key,
				{
					videoId: value.ytid,
					playerVars: {
						autoplay: 0,
						controls: 1,
						showinfo: 0,
						color: 'white',
						modestbranding: 1,
						iv_load_policy: 3,
						rel: 0
					},
					events: {
						'onReady': onVideoReady,
						'onStateChange': onVideoStateChange,
						'onError': onVideoError
					}
			}
				);

		}

	};

	/*
	 * Dynamically set the hero height and position based on width
	 * @param el el the hero
	 * @param el parent the hero parent container
	 */
	function resizeHero( el, parent ) {
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
	 * @param str key the key of the video in uriVideos
	 * @param el el the video
	 * @param el parent the video parent container
	 */
	function resizeVideo( key, el, parent ) {
		el.style.height = parent.offsetWidth / uriVideos[key].aspect + 'px';
	}

	/*
	 * Pause the hero when it's completely out of the viewport
	 * @param obj event the hero player
	 * @param el parent the hero parent container
	 */
	function determinePlayState( event, parent ) {
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
	function onHeroReady( event ) {

		var el, parent, overlay, button;

		// Mute the vid
		event.target.mute();

		el = event.target.getIframe();
		parent = uriVidHeroes[event.target.a.id].parent;

		// Listen for browser resizing
		window.addEventListener(
			'resize',
			function() {
				resizeHero( el, parent );
			}
		);
		resizeHero( el, parent );

		// Listen for scrolling
		window.addEventListener(
			'scroll',
			function() {
				if ( ! parent.classList.contains( 'paused' ) ) {
					determinePlayState( event, parent );
				}
			}
		);
		determinePlayState( event, parent );

		// Add play/pause button
		overlay = parent.querySelector( '.overlay' );
		button = document.createElement( 'div' );

		button.className = 'motionswitch';
		button.title = 'Pause';
		button.addEventListener(
			'click',
			function() {
				heroControl( event, parent, this );
			}
		);

		overlay.appendChild( button );

	}

	/*
	 * Do things with the video when it's loaded
	 * @param str id the id of the video
	 */
	function onVideoReady( event ) {
		var el = event.target.getIframe(),
			key = event.target.a.id,
			parent = uriVideos[key].parent;

		window.addEventListener(
			'resize',
			function() {
				resizeVideo( key, el, parent );
			}
		);
		resizeVideo( key, el, parent );

	}

	/*
	 * User control of the hero video
	 * @param obj event the hero player
	 * @param el parent the hero parent container
	 * @param el el the .motionswitch element
	 */
	function heroControl( event, parent, el ) {
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
	function onHeroStateChange( event ) {
		var state = event.target.getPlayerState();
		switch ( state ) {
			case 0:
				event.target.playVideo();
				break;
			case -1:
			case 1:
				if ( window.innerWidth > 750 ) {
					uriVidHeroes[event.target.a.id].poster.classList.add( 'unveil' );
				}
				break;
		}
	}

	/*
	 * Revert to poster if there's an error with the hero video
	 * @param str key the key of the hero in uriVidHeroes
	 */
	function onHeroError( event ) {
		uriVidHeroes[event.target.a.id].poster.classList.remove( 'unveil' );
		uriVidHeroes[event.target.a.id].parent.querySelector( '.motionswitch' ).style.display = 'none';
	}

	/*
	 * Link the poster to the video on YouTube if there's an error with the video
	 * @param str key the key of the hero in uriVideos
	 */
	function onVideoError( event ) {
		var el, a, img, alt, iframe;

		el = uriVideos[event.target.a.id];

		a = document.createElement( 'a' );
		a.href = 'http://www.youtube.com/watch?v=' + el.ytid;
		a.title = 'Try watching this video on YouTube';

		img = document.createElement( 'img' );
		img.src = el.poster.getAttribute( 'src' );
		alt = el.poster.getAttribute( 'alt' );
		if ( ! alt ) {
			alt = 'Poster for video';
		}
		img.alt = alt;
		a.appendChild( img );

		iframe = document.getElementById( event.target.a.id );
		if ( iframe ) {
			el.parent.replaceChild( a, iframe );
		}

	}

	/*
	 * Get video state and decide what to do
	 * @param obj event the video player
	 */
	function onVideoStateChange( event ) {

		var state = event.target.getPlayerState(),
			key = event.target.a.id,
			overlay = uriVideos[key].parent.querySelector( '.overlay' );

		switch ( state ) {
			case 1:
			case 3:
				overlay.classList.add( 'hidden' );
				break;
			default:
				overlay.classList.remove( 'hidden' );
		}
	}

})();
