/* ======= HEROS ======= */

(function(){
    
    'use strict';
    
    window.addEventListener('load', initCLHeros, false);
    
    function initCLHeros(){
        dynamicZoom();
        blurHeroControl();
        mobile();
    }

    
    /* 
     * Zooming for dynamic image heros
     */
    function dynamicZoom() {
        
        var heros = document.querySelectorAll('.cl-hero .dynamic');
        
        for(var i=0; i<heros.length; i++){
            heros[i].style.backgroundPositionX = '100%';
            heros[i].style.backgroundPositionY = 0;
        }
        
    }

    
    /* 
     * Blur header hero on scroll
     */
    function blurHeroControl() {
        
        var hero = document.getElementById('hero');
        
        if (hero) {

            var overlay = hero.querySelector('.overlay'),
                scroll = window.pageYOffset,
                offset = overlay.getBoundingClientRect().top + scroll,
                radius = 50; // Set the desired blur radius, in pixels

            //console.log('overlay', overlay);
            blurHero();

            window.addEventListener('scroll', function(){
                blurHero();
            });

        }

        function blurHero() {
            var p = window.pageYOffset,
                h = overlay.offsetHeight + offset,
                b = Math.min(p/h*radius, radius);
            
            overlay.style.webkitBackdropFilter = 'blur(' + b + 'px)';
        }
        
    }
    
    function mobile() {
        
        var els = document.querySelectorAll('.cl-hero .poster');
        
        window.addEventListener('resize', function(){
            var i, w = window.innerWidth;
            if (w < 750) {
                for(i=0; i<els.length; i++){
                    els[i].classList.remove('unveil');
                }
            } else {
                for(i=0; i<els.length; i++){
                    els[i].classList.add('unveil');
                }
            }
        });
    }

})();
/* ======= MENUS ======= */

(function(){
    
    'use strict';
    
    window.addEventListener('load', initCLMenus, false);
    
    function initCLMenus() {
        var i;
        
        // Since we have JS, let's hide any nested menus
        var uls = document.querySelectorAll('.cl-menu ul');
        for (i=0; i<uls.length; i++) {
            uls[i].style.display = 'none';
        }

        // Append dropdown arrows, bind click event to submenu triggers, and control the submenu                               
        var spans = document.querySelectorAll('.cl-menu span');
        for(i=0; i<spans.length; i++) {
            var el = spans[i];
            el.addEventListener('click', function() {
                var ul = this.parentNode.querySelector('ul'),
                    arrow = this.querySelector('.arrow');
                
                ul.style.display = ul.style.display === 'none' ? 'block' : 'none';
                
                if (arrow.classList.contains('on')) {
                    arrow.classList.remove('on');
                } else {
                    arrow.classList.add('on');
                }
                
            });
            
            var arrow = document.createElement('div');
            arrow.className = 'arrow';
            el.appendChild(arrow);
        }
        
    }
    
})();
/* ======= SLIDESHOW ======= */

/*
 * Turn WP image galleries into something pretty.
 * Hooks into WP full-size image galleries only.
 */


(function(){
    
    'use strict';
        
    window.addEventListener('load', init, false);
    
    function init() {
        var g, i;
        
        g = document.querySelectorAll('.gallery.gallery-size-full');
        for (i=0; i<g.length; i++) {
            parse(g[i]);
        } 
    }
    
    /*
     * Parse gallery element
     * @param el el the gallery element
     */
    function parse(el) {
        
        var figs, i, parts, a, caption, parsed = [];
        
        figs = el.querySelectorAll('figure');
        
        for (i=0; i<figs.length; i++) {
            
            parts = {};
            
            parts.img = figs[i].querySelector('img');
            
            caption = figs[i].querySelector('figcaption');
            if(caption) {
                parts.caption = caption.innerHTML;
            }
            
            parsed.push(parts);
            
        }
        
        build(el, parsed);
                
    }
    
    
    /*
     * Build slideshow DOM
     * @param el el the gallery element
     * @param parsed obj the parsed gallery
     */
    function build(el, parsed) {
        var S, carouselWrapper, carousel, captions, counter, li, cap, i;
                
        S = document.createElement('div');
        S.className = 'cl-slideshow';
        
        carouselWrapper = document.createElement('div');
        carouselWrapper.className = 'carousel-wrapper';
        S.appendChild(carouselWrapper);
        
        carousel = document.createElement('ul');
        carousel.className = 'carousel transitions';
        carouselWrapper.appendChild(carousel);
        
        captions = document.createElement('ul');
        captions.className = 'captions';
        S.appendChild(captions);
        
        counter = document.createElement('div');
        counter.className = 'counter';
        counter.innerHTML = '<span></span> of ' + parsed.length;
        S.appendChild(counter);
        
                
        for (i=0; i<parsed.length; i++) {
                        
            li = document.createElement('li');
            li.className = 'slide';
            li.appendChild(parsed[i].img);
            carousel.appendChild(li);
            
            cap = document.createElement('li');
            cap.className = 'caption';
            cap.innerHTML = parsed[i].caption ? parsed[i].caption : '';
            captions.appendChild(cap);
                     
        }
        
        carouselWrapper.appendChild(initButtons(carousel));
        
        setPosition(carousel, 0);
            
        el.parentNode.replaceChild(S, el);
        
    }
    
    
    /**
	 * Create controls
     * @param c el the carousel
	 */
	function initButtons(c) {
		var controls, types, target, button, x;
        
		controls = document.createElement('div');
        controls.className = 'controls';
        
		types = ['Previous', 'Next'];
        
        for (x in types) {
			target = document.createElement('div');
			target.className = 'target ' + types[x].toLowerCase();
            target.title = types[x];
			target.addEventListener('click', controlDirection.bind(null, c, types[x], false) );
            
            button = document.createElement('div');
            button.className = 'controller';
            target.appendChild(button);
            
			controls.appendChild(target);
		}
        
        touchControl(controls, c);
        
        return controls;
        
	}
    
    
    /*
     * Control direction of movement
     * @param c el the carousel
     * @param direction str the direction to move in
     * @param mobile bool called from mobile device
     */
    function controlDirection(c, direction, mobile) {
		var index, count;
		index = c.getAttribute('data-position');
		count = c.children.length - 1;
        
        // Reset the endslide animation
        var controls =  c.parentElement.querySelector('.controls');
        c.classList.remove('reboundLeft', 'reboundRight');
		
		if(direction == 'Next') {
			index++;
			if(index > count) {
                if (!mobile) {
                    void c.offsetWidth;
                    c.classList.add('reboundRight');
                    return;
                } else {
                    index--;
                }
			}
		} else {
			index--;
			if(index < 0) {
                if (!mobile) {
                    void c.offsetWidth;
                    c.classList.add('reboundLeft');
                    return;
                } else {
                    index++;
                }
			}
		}
        
		setPosition(c, index);
	}
    
    
    /*
     * Set position of slideshow
     * @param c el the carousel
     * @param index int the index to move to
     */
    function setPosition(c, index) {
        
        var S, active, captions, counter, i;
                        
        c.style.transform = 'translateX(-' + (index * 100) + '%)';
        c.setAttribute('data-position', index);
        
        S = c.parentNode.parentNode;
        
        active = S.querySelector('.captions .active');
        if (active) {
            active.classList.remove('active');
        }
        
        captions = S.querySelectorAll('.caption');
        captions[index].classList.add('active');
        
        counter = S.querySelector('.counter span');
        counter.innerHTML = index + 1;
        
    
    }
    
    
    /*
     * Add touch controls
     * @param el el the control div
     * @param c el the carousel
     */
    function touchControl(el, c) {
        
        var start, dist; 
        
        start = 0;
        dist = 0;

        el.addEventListener('touchstart', function(e){
            
            c.classList.remove('transitions');
            
            // reference first touch point (ie: first finger)
            var touchobj = e.changedTouches[0];
            
            // get x position of touch point relative to left edge of browser
            start = parseInt(touchobj.clientX);
            
            e.preventDefault();
            
        }, false);

        el.addEventListener('touchmove', function(e){
            
            var touchobj, delta, move, t;
            
            // reference first touch point for this event
            touchobj = e.changedTouches[0]; 
            
            delta = (parseInt(touchobj.clientX) - start) - dist;
            dist = parseInt(touchobj.clientX) - start;
            move =  delta < 0 ? -1 : 1;
            
            t = c.style.transform.replace('translateX(','').replace('%)','');
            c.style.transform = 'translateX(' + (parseInt(t) + move) + '%)';
            
            console.log(dist);
            
            e.preventDefault();
            
        }, false);

        el.addEventListener('touchend', function(e){
            
            c.classList.add('transitions');
            
            var w = c.offsetWidth,
                i = parseInt(c.getAttribute('data-position')),
                tolerance = 0.25; // Set the distance of a valid swipe as a percent of the carousel width
                                    
            if (dist > w * tolerance) { 
                controlDirection(c, 'Previous', true);
            } else if (dist < w * -tolerance) {
                controlDirection(c, 'Next', true);
            } else {
                setPosition(c, parseInt( c.getAttribute('data-position') ) );
            }
            
            e.preventDefault();
            
        }, false);
        
    }
    
    
})();
/* ======= WAVES ======= */

(function(){
    
    'use strict';
    
    window.addEventListener('load', initCLWaves, false);
               
    function initCLWaves() {
        var els, i;

        els = document.querySelectorAll('.cl-wave');
        i = window.pageYOffset;

        window.addEventListener('scroll', function() {
            moveWaves(els, i);
        });
        
    }
    
    function moveWaves(els, i) {
        var offset, move, pos, n, el;

        offset = window.pageYOffset;
        move = offset - i;

        for(n=0; n<els.length; n++){
            el = els[n];
            pos = el.firstElementChild.style.backgroundPositionX.split('px')[0];
            pos += move;

            el.firstElementChild.style.backgroundPositionX = move + 'px';
            el.lastElementChild.style.backgroundPositionX = move + 'px';
        }
    }

})();
/* ======= HERO VIDS / VIDEOS ======= */

// Create this in the global scope so the YouTube API can call it locally.
var uriCreateYouTubePlayers;
function onYouTubePlayerAPIReady() {
    uriCreateYouTubePlayers();
}

(function() {
    
    'use strict';

    var uri_vid_heros = {},
        uri_videos = {};

    window.addEventListener('load', getVids, false);

    
    /*
     * Get video ID(s) and load the API
     */
    function getVids() {
        
        var requireYouTube = false,
            heroSupport = checkSupport(),
            heros = document.querySelectorAll('.cl-hero .poster'),
            el, key, parent, i;
        
        if (heroSupport) {
        
            for (i=0; i<heros.length; i++) {

                el = heros[i];
                key = el.getAttribute('id');
                parent = el.parentNode;
                
                var start = el.getAttribute('data-start'),
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

            }
            
        }
                

        var vids = document.querySelectorAll('.cl-video img');
        
        for (i=0; i<vids.length; i++) {

            el = vids[i];
            key = el.getAttribute('id');
            parent = el.parentNode;
            
            var aspect = 16/9; // Set default aspect
                

            if ( el.getAttribute('data-aspect') ) {
                aspect = el.getAttribute('data-aspect').split(':');
                aspect = aspect[0]/aspect[1];
            }
            
            uri_videos[key] = {
                'poster' : el,
                'parent' : parent,
                'aspect' : aspect
            };

            requireYouTube = true;

        }
        
        if ( requireYouTube ) { loadYouTubeAPI(); }

    }
    
    /*
     * Check browser support (essentially anything but IE)
     * @return bool
     */
    function checkSupport() {
        var support = true,
            ua = navigator.userAgent,
            msie = ua.indexOf('MSIE '),
            trident = ua.indexOf('Trident/');
        
        if (navigator.appName == 'Microsoft Internet Explorer' || msie > 0 || trident > 0) {
            support = false;
        }
            
        return support;
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
            
        if (v + p < o || p > o + h) {
            event.target.pauseVideo();
        } else { 
            event.target.playVideo();
        }

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
                    uri_vid_heros[event.target.a.id].poster.classList.add('unveil');
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
        
        uri_vid_heros[event.target.a.id].poster.classList.remove('unveil');
        uri_vid_heros[event.target.a.id].parent.querySelector('.motionswitch').style.display = 'none';
    }
    
})();