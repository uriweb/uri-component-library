/**
 * HERO VIDS / VIDEOS
 *
 * @package uri-component-library
 */

// Create this in the global scope so the YouTube API can call it locally.
var CLCreateYouTubePlayers,
		CLCreateVimeoPlayers;
function onYouTubePlayerAPIReady() {
	CLCreateYouTubePlayers();
}

( function() {

	'use strict';

	var data = {
		heroes: {
			vimeo: {},
			yt: {}
		},
		videos: {
			vimeo: {},
			yt: {}
		}
	};

	window.addEventListener( 'load', getVids, false );

	/*
	 * Get video ID(s) and load the API
	 */
	function getVids() {

		var requireYouTube = false,
				requireVimeo = false,
				heroes = document.querySelectorAll( '.cl-hero .poster' ),
				vids = document.querySelectorAll( '.cl-video img' ),
				i, el, id, parent, atts, src, host, placeholder;

		if ( URICL.checkSupport() ) {

			for ( i = 0; i < heroes.length; i++ ) {

				el = heroes[i];
				parent = el.parentNode;

				atts = {
					'parent': parent,
					'poster': el,
					'w': parent.offsetWidth,
					'h': parent.offsetHeight
				};

				src = el.getAttribute( 'data-video' );
				host = URICL.getVideoHost( src );
				id = el.getAttribute( 'id' );

				if ( 'youtube' == host ) {
					requireYouTube = true;
					data.heroes.yt[id] = atts;
					data.heroes.yt[id].src = CLYT.getVideoID( src );
				}

				if ( 'vimeo' == host ) {
					requireVimeo = true;
					data.heroes.vimeo[id] = atts;
					data.heroes.vimeo[id].src = src;
				}

				// Remove poster id and create a new placeholder for the video
				el.removeAttribute( 'id' );
				placeholder = document.createElement( 'div' );
				placeholder.id = id;
				parent.appendChild( placeholder );

			}

		}

		for ( i = 0; i < vids.length; i++ ) {

			el = vids[i];
			id = el.getAttribute( 'id' );

			atts = {
				'poster': el
			}

			src = el.getAttribute( 'data-video' );
			host = URICL.getVideoHost( src );

			if ( 'youtube' == host ) {
				data.videos.yt[id] = atts;
				data.heroes.yt[id].src = CLYT.getVideoID( src );
				requireYouTube = true;
			}

			if ( 'vimeo' == host ) {
				data.videos.vimeo[id] = atts;
				data.videos.yt[id].src = src;
				requireVimeo = true;
			}

		}

		if ( requireYouTube ) {
			CLYT.loadYouTubeAPI();
		}

		if ( requireVimeo ) {
			CLVimeo.loadVimeoAPI();
		}

	}

	/*
	 * Create the Vimeo player(s)
	 */
	CLCreateVimeoPlayers = function() {

		var id, value;

		for ( id in data.heroes.vimeo ) {

			value = data.heroes.vimeo[id];

			var options = {
				url: value.src,
				background: true,
				autoplay: true,
				width: value.w,
				height: value.h
			};

			value.player = new Vimeo.Player( id, options );

			value.player.on( 'loaded', CLVimeo.onHeroReady.bind( null, value ) );
			value.player.on( 'error', CLVimeo.onHeroError.bind( null, value ) );

		}

	}

	/*
	 * Create the YouTube player(s)
	 */
	CLCreateYouTubePlayers = function() {

		var id, value;

		for ( id in data.heroes.yt ) {

			value = data.heroes.yt[id];

			value.player = new YT.Player(
				id,
				{
					width: value.w,
					height: value.h,
					videoId: value.src,
					playerVars: {
						autoplay: 1,
						controls: 0,
						showinfo: 0,
						modestbranding: 1,
						iv_load_policy: 3,
						rel: 0
					},
					events: {
						'onReady': CLYT.onHeroReady,
						'onStateChange': CLYT.onHeroStateChange,
						'onError': CLYT.onHeroError
					}
			}
				);

		}

		for ( id in data.videos.yt ) {

			value = data.videos.yt[id];

			value.player = new YT.Player(
				id,
				{
					videoId: value.src,
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
						'onReady': CLYT.onVideoReady,
						'onStateChange': CLYT.onVideoStateChange,
						'onError': CLYT.onVideoError
					}
			}
				);

		}

	};

})();
