/**
 * HERO VIDS / VIDEOS
 *
 * @package uri-component-library
 */

// Create this in the global scope so the YouTube API can call it locally.
let CLCreateYouTubePlayers,
	CLCreateVimeoPlayers;
function onYouTubePlayerAPIReady() {
	CLCreateYouTubePlayers();
}

( function() {
	'use strict';

	const data = {
		heroes: {
			vimeo: {},
			yt: {},
		},
		videos: {
			vimeo: {},
			yt: {},
		},
		cards: {
			vimeo: {},
		},
		cardFeatures: {
			vimeo: {},
		},
	};

	window.addEventListener( 'load', getVids, false );

	/*
	 * Get video ID(s) and load the API
	 */
	function getVids() {
		let requireYouTube = false,
			requireVimeo = false,
			i, el, id, parent, atts, src, host, placeholder;

		const heroes = document.querySelectorAll( '.cl-hero .poster' );
		const vids = document.querySelectorAll( '.cl-video .poster' );
		const cards = document.querySelectorAll( '.cl-card .poster' );
		const cardFeatures = document.querySelectorAll( '.cl-card .feature' );

		if ( URICL.checkSupport() ) {
			for ( i = 0; i < heroes.length; i++ ) {
				el = heroes[ i ];
				parent = el.parentNode;

				atts = {
					parent,
					poster: el,
					state: 'init',
					w: parent.offsetWidth,
					h: parent.offsetHeight,
				};

				src = el.getAttribute( 'data-video' );
				host = el.getAttribute( 'data-platform' );
				id = el.getAttribute( 'id' );

				if ( 'youtube' === host ) {
					requireYouTube = true;
					data.heroes.yt[ id ] = atts;
					data.heroes.yt[ id ].src = src;
				}

				if ( 'vimeo' === host ) {
					requireVimeo = true;
					data.heroes.vimeo[ id ] = atts;
					data.heroes.vimeo[ id ].src = src;
				}

				// Remove poster id and create a new placeholder for the video
				el.removeAttribute( 'id' );
				placeholder = document.createElement( 'div' );
				placeholder.id = id;
				parent.appendChild( placeholder );
			}
		}

		for ( i = 0; i < vids.length; i++ ) {
			el = vids[ i ];

			atts = {
				parent: el.parentNode,
				poster: el,
				state: 'init',
			};

			src = el.getAttribute( 'data-video' );
			host = el.getAttribute( 'data-platform' );
			id = el.getAttribute( 'id' );

			if ( 'youtube' === host ) {
				data.videos.yt[ id ] = atts;
				data.videos.yt[ id ].src = src;
				requireYouTube = true;
			}

			if ( 'vimeo' === host ) {
				data.videos.vimeo[ id ] = atts;
				data.videos.vimeo[ id ].src = src;
				data.videos.vimeo[ id ].showinfo = el.getAttribute( 'data-showinfo' );
				requireVimeo = true;
			}
		}

		for ( i = 0; i < cards.length; i++ ) {
			el = cards[ i ];
			parent = el.parentNode;

			atts = {
				parent,
				poster: el,
				state: 'init',
			};

			src = el.getAttribute( 'data-video' );
			host = el.getAttribute( 'data-platform' );
			id = el.getAttribute( 'id' );

			requireVimeo = true;
			data.cards.vimeo[ id ] = atts;
			data.cards.vimeo[ id ].src = src;

			// Remove poster id and create a new placeholder for the video
			el.removeAttribute( 'id' );
			placeholder = document.createElement( 'div' );
			placeholder.id = id;
			parent.appendChild( placeholder );
		}

		for ( i = 0; i < cardFeatures.length; i++ ) {
			el = cardFeatures[ i ];
			parent = el.parentNode;

			atts = {
				parent,
				poster: el,
				state: 'init',
			};

			src = el.getAttribute( 'data-video' );
			host = el.getAttribute( 'data-platform' );
			id = el.getAttribute( 'id' );

			requireVimeo = true;
			data.cardFeatures.vimeo[ id ] = atts;
			data.cardFeatures.vimeo[ id ].src = src;
			data.cardFeatures.vimeo[ id ].showinfo = el.getAttribute( 'data-showinfo' );
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
		let id, value, options, showinfo, callbacks;

		/* Heroes */
		for ( id in data.heroes.vimeo ) {
			value = data.heroes.vimeo[ id ];

			options = {
				url: value.src,
				background: true,
				autoplay: true,
				width: value.w,
				height: value.h,
			};

			callbacks = {
				onReady: CLVimeo.onHeroReady,
				onStateChange: CLVimeo.onHeroStateChange,
				onError: CLVimeo.onHeroError,
			};

			createVimeoPlayer( id, value, options, callbacks );
		}

		/* Videos */
		for ( id in data.videos.vimeo ) {
			value = data.videos.vimeo[ id ];

			showinfo = ( '1' === value.showinfo ) ? true : false;

			options = {
				url: value.src,
				byline: showinfo,
				title: showinfo,
				portrait: showinfo,
			};

			callbacks = {
				onReady: CLVimeo.onVideoReady,
				onStateChange: CLVimeo.onVideoStateChange,
				onError: CLVimeo.onVideoError,
			};

			createVimeoPlayer( id, value, options, callbacks );
		}

		/* Cards */
		for ( id in data.cards.vimeo ) {
			value = data.cards.vimeo[ id ];

			options = {
				url: value.src,
				background: true,
				autoplay: true,
			};

			callbacks = {
				onReady: CLVimeo.onCardReady,
				onStateChange: CLVimeo.onHeroStateChange,
				onError: CLVimeo.onCardError,
			};

			createVimeoPlayer( id, value, options, callbacks );
		}

		/* Card Features */
		for ( id in data.cardFeatures.vimeo ) {
			value = data.cardFeatures.vimeo[ id ];

			options = {
				url: value.src,
				byline: showinfo,
				title: showinfo,
				portrait: showinfo,
			};

			callbacks = {
				onReady: CLVimeo.onVideoReady,
				onStateChange: CLVimeo.onVideoStateChange,
				onError: CLVimeo.onVideoError,
			};

			createVimeoPlayer( id, value, options, callbacks );
		}
	};

	function createVimeoPlayer( id, value, options, callbacks ) {
		value.player = new Vimeo.Player( id, options );

		value.player.on(
			'loaded',
			function( e ) {
				value.state = 'loaded';
				callbacks.onReady( value );
			}
		);

		value.player.on(
			'bufferstart',
			function( e ) {
				value.state = 'buffering';
				callbacks.onStateChange( value );
			}
		);

		value.player.on(
			'play',
			function( e ) {
				value.state = 'playing';
				callbacks.onStateChange( value );
			}
		);

		value.player.on(
			'pause',
			function( e ) {
				value.state = 'paused';
				callbacks.onStateChange( value );
			}
		);

		value.player.on(
			'ended',
			function( e ) {
				value.state = 'ended';
				callbacks.onStateChange( value );
			}
		);

		value.player.on( 'error', callbacks.onError.bind( null, value ) );
	}

	/*
	 * Create the YouTube player(s)
	 */
	CLCreateYouTubePlayers = function() {
		let id, value;

		for ( id in data.heroes.yt ) {
			value = data.heroes.yt[ id ];

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
						rel: 0,
					},
					events: {
						onReady: CLYT.onHeroReady,
						onStateChange: CLYT.onHeroStateChange,
						onError: CLYT.onHeroError,
					},
				}
			);
		}

		for ( id in data.videos.yt ) {
			value = data.videos.yt[ id ];

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
						rel: 0,
					},
					events: {
						onReady: CLYT.onVideoReady,
						onStateChange: CLYT.onVideoStateChange,
						onError: CLYT.onVideoError,
					},
				}
			);
		}
	};
}() );
