/* ======= HERO VIDS / VIDEOS ======= */

// Create this in the global scope so the YouTube API can call it locally.
var uriCreateYouTubePlayers;
function onYouTubePlayerAPIReady() {
    uriCreateYouTubePlayers();
}

(function() {
    
    'use strict';

    var uri_vid_heros = {},
        uri_videos = {},
        requireYouTube;

    window.addEventListener('load', getVids, false);

    
    /*
     * Get video ID(s) and load the API
     */
    function getVids() {
        
        document.querySelectorAll('.cl-hero .poster').forEach(function(el) {
            
            var key = el.getAttribute('id'),
                parent = el.parentNode,
                start = el.getAttribute('data-start'),
                end = el.getAttribute('data-end');

            uri_vid_heros[key] = {
                'poster' : el,
                'parent' : parent,
                'w' : parent.offsetWidth,
                'h' : parent.offsetHeight,
                'start' : start ? start : 0,
                'end' : end ? end : -1
            };
            
            // Remove poster id and create a new placeholder for the video
            el.removeAttribute('id');
            var placeholder = document.createElement('div');
            placeholder.id = key;
            parent.appendChild(placeholder);

            requireYouTube = true;

        });
        
        //console.log('heros', uri_vid_heros);
        

        document.querySelectorAll('.cl-video img').forEach(function(el) {

            var aspect = 16/9; // Set default aspect

            if ( el.getAttribute('data-aspect') ) {
                aspect = el.getAttribute('data-aspect').split(':');
                aspect = aspect[0]/aspect[1];
            }
            
            var key = el.getAttribute('id'),
                parent = el.parentNode;

            uri_videos[key] = {
                'poster' : el,
                'parent' : parent,
                'aspect' : aspect
            };

            requireYouTube = true;

        });

        //console.log('videos', uri_videos);
        
        if ( requireYouTube ) { loadYouTubeAPI(); }

    }


    /*
     * Load the API
     */
    function loadYouTubeAPI() {
        var tag = document.createElement('script');
        tag.src = "https://www.youtube.com/player_api";
        var firstScriptTag = document.getElementsByTagName('script')[0];
        firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
    }


    /*
     * Create the player(s)
     */
    uriCreateYouTubePlayers = function() {

        var key;
        
        for (key in uri_vid_heros) {
            //console.log('key', key);

            uri_vid_heros[key].player = new YT.Player(key, {
                width: key.w,
                height: key.h,
                videoId: key,
                playerVars: {
                    autoplay: 1,
                    controls: 0,
                    showinfo: 0,
                    start: key.start,
                    end: key.end,
                    modestbranding: 1,
                    iv_load_policy: 3,
                    rel: 0
                },
                events: {
                    'onReady' : onHeroReady,
                    'onStateChange' : onHeroStateChange,
                    'onError' : onHeroError
                }
            });

        }

        for (key in uri_videos) {

            uri_videos[key].player = new YT.Player(key, {
                videoId: key,
                playerVars: {
                    autoplay: 0,
                    controls: 1,
                    showinfo: 0,
                    color: 'white',
                    modestbranding: 1,
                    iv_load_policy: 3
                },
                events: {
                    'onReady' : onVideoReady
                }
            });

        }
        
    };


    /*
     * Dynamically set the hero height and position based on width
     * @param el el the hero
     * @param el parent the hero parent container
     */
    function resizeHero(el, parent) {
        //console.log('hero resize', el.getAttribute('id'));
        
        var w = parent.offsetWidth,
            h = parent.offsetHeight,
            style;
        
        if (w/h > 16/9) {
            el.style.height = w * 9 / 16 + 'px';
            el.style.width = '100%';
            el.style.left = 0;
            el.style.top = (h - (w*9/16)) / 2 + 'px';
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
     * @param str key the key of the video in uri_videos
     * @param el el the video
     * @param el parent the video parent container
     */
    function resizeVideo(key, el, parent) {
        //console.log('video resize', key, parent.offsetWidth / uri_videos[key].aspect); 
        el.style.height =  parent.offsetWidth / uri_videos[key].aspect + 'px';
    }


    /*
     * Pause the hero when it's completely out of the viewport
     * @param obj event the hero player
     * @param el parent the hero parent container
     */
    function determinePlayState(event, parent) {
        //console.log('hero play state', event.target.a.id);
        var v = window.innerHeight,
            p = window.pageYOffset,
            h = parent.offsetHeight,
            o = parent.getBoundingClientRect().top + p;
            
        v + p < o || p > o + h ? event.target.pauseVideo() : event.target.playVideo();

    }


    /*
     * Do things with the hero when it's loaded
     * @param obj event the hero player
     */
    function onHeroReady(event) {
        //console.log('hero ready',event.target.a.id);
        
        // Mute the vid
        event.target.mute();

        var el = event.target.getIframe(),
            parent = uri_vid_heros[event.target.a.id].parent;

        // Listen for browser resizing
        window.addEventListener('resize', function(){
            resizeHero(el, parent);
        });
        resizeHero(el, parent);

        // Listen for scrolling
        window.addEventListener('scroll', function(){
            if(!parent.classList.contains('paused')) {
                determinePlayState(event, parent);
            }
        });
        determinePlayState(event, parent);
        
        // Add play/pause button
        var overlay = parent.querySelector('.overlay'),
            button = document.createElement('div');
        
        button.className = 'motionswitch';
        button.title = 'Pause';
        button.addEventListener('click', function(){
            heroControl(event, parent, this);
        });
        
        overlay.appendChild(button);

    }


    /*
     * Do things with the video when it's loaded
     * @param str id the id of the video
     */
    function onVideoReady(event) {
        //console.log('video ready', id);
        
        var el = event.target.getIframe(),
            key = event.target.a.id,
            parent = uri_videos[key].parent;
            

        window.addEventListener('resize', function(){
            resizeVideo(key,el,parent);
        });
        resizeVideo(key,el,parent);
        
    }


    /*
     * User control of the hero video
     * @param obj event the hero player
     * @param el parent the hero parent container
     * @param el el the .motionswitch element
     */
    function heroControl(event, parent, el) {
        //console.log('hero control', event.target.a.id);
        
        switch (event.target.getPlayerState()) {
            default:
            case 1:
                event.target.pauseVideo();
                parent.classList.add('paused');
                el.setAttribute('title','Play');
                break;
            case 2: 
                event.target.playVideo();
                parent.classList.remove('paused');
                el.setAttribute('title','Pause');
                break;
        } 
    }


    /*
     * Get hero state and decide what to do
     * @param obj event the hero player
     */
    function onHeroStateChange(event) {
        var state = event.target.getPlayerState();
        //console.log('hero state change', event.target.a.id, state);
        
        switch (state) {
            case 0:
                event.target.playVideo();
                break;
            case -1:
            case 1:
                if (window.innerWidth > 750) {
                    uri_vid_heros[event.target.a.id].poster.style.display = 'none';
                }
                break;
        }
    }


    /*
     * Revert to poster if there's an error with the video
     * @param str key the key of the hero in uri_vid_heros
     */
    function onHeroError(event) {
        //console.log('hero error', event);
        
        uri_vid_heros[event.target.a.id].poster.style.display = 'block';
        uri_vid_heros[event.target.a.id].parent.querySelector('.motionswitch').style.display = 'none';
    }
    
})();