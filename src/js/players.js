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
				el, id, parent, i, placeholder;

		if ( URICL.checkSupport() ) {

			for ( i = 0; i < heroes.length; i++ ) {

				el = heroes[i];
				id = el.getAttribute( 'id' );
				parent = el.parentNode;

				data.heroes.yt[id] = {
					'poster': el,
					'ytid': URICL.getVideoHost( el.getAttribute( 'data-id' ) ),
					'w': parent.offsetWidth,
					'h': parent.offsetHeight
				};

				// Remove poster id and create a new placeholder for the video
				el.removeAttribute( 'id' );
				placeholder = document.createElement( 'div' );
				placeholder.id = id;
				parent.appendChild( placeholder );

				requireYouTube = true;

			}

		}

		for ( i = 0; i < vids.length; i++ ) {

			el = vids[i];
			id = el.getAttribute( 'id' );

			data.videos.yt[id] = {
				'poster': el,
				'ytid': el.getAttribute( 'data-id' )
			};

			requireYouTube = true;

		}

		if ( requireYouTube ) {
			CLYT.loadYouTubeAPI();
		}

	}

	/*
	 * Create the player(s)
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
					videoId: value.ytid,
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
						'onReady': CLYT.onVideoReady,
						'onStateChange': CLYT.onVideoStateChange,
						'onError': CLYT.onVideoError
					}
			}
				);

		}

	};

})();
