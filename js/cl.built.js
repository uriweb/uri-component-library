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
    
    var revealClass = 'reveal';
    
    window.addEventListener('load', initCLMenus, false);
    
    function initCLMenus() {
        var menus, uls, trigger, spans, i, a, li;
        
        // Since we have JS, let's add a unique css hook and submenu triggers
        
        menus = document.querySelectorAll('.cl-menu');
        for (i=0; i<menus.length; i++) {
            menus[i].classList.add('.cl-menu-js');
        }
        
        uls = document.querySelectorAll('.cl-menu-list ul');
        for (i=0; i<uls.length; i++) {
            a = uls[i].parentNode.querySelector('a');
            
            li = document.createElement('li');
            li.appendChild(a.cloneNode(true));
            
            uls[i].insertBefore(li, uls[i].firstChild);
            
            bindListeners(a, uls, uls[i]);
        }
        
    }
    
    function bindListeners(a, uls, ul) {
        a.addEventListener('click', function(e) {
            e.preventDefault();
            handleClick(uls, ul);
        });
    }
    
    function handleClick(els, el) {
        var toggle, i;
        
        toggle = el.classList.contains(revealClass);
        
        for (i=0; i<els.length; i++) {
            els[i].classList.remove(revealClass);
        }
        
        if (!toggle) {
            el.classList.add(revealClass);
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
        
    window.addEventListener('load', initCLSlideshow, false);
    
    function initCLSlideshow() {
        var g, i;
        
        g = document.querySelectorAll('.gallery.gallery-size-full');
        for (i=0; i<g.length; i++) {
            parseWPGallery(g[i]);
        } 
    }
    
    /*
     * Parse gallery element
     * @param el el the gallery element
     */
    function parseWPGallery(el) {
        
        var figs, i, parts, caption, parsed = [];
        
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
        
        buildSlideshowDOM(el, parsed);
                
    }
    
    
    /*
     * Build slideshow DOM
     * @param el el the gallery element
     * @param parsed obj the parsed gallery
     */
    function buildSlideshowDOM(el, parsed) {
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
        
        carouselWrapper.appendChild(makeControlButtons(carousel));
        
        setPosition(carousel, 0);
            
        el.parentNode.replaceChild(S, el);
        
    }
    
    
    /**
	 * Create controls
     * @param c el the carousel
	 */
	function makeControlButtons(c) {
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
        
        addTouchControls(controls, c);
        
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
        c.classList.remove('reboundLeft', 'reboundRight');
		
		if(direction == 'Next') {
			index++;
			if(index > count) {
                if (!mobile) {
                    void c.offsetWidth; // Trigger reflow to restart animation
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
                    void c.offsetWidth; // Trigger reflow to restart animation
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
    function addTouchControls(el, c) {
        
        var start, dist; 
        
        start = 0;
        dist = 0;

        el.addEventListener('touchstart', function(e){
            
            // Unhook CSS transitions during swipe event for smoother tracking
            c.classList.remove('transitions');
            
            // Reference first touch point
            var touchobj = e.changedTouches[0];
            
            // Get x position of touch point relative to left edge of browser
            start = parseInt(touchobj.clientX);
            
            e.preventDefault();
            
        }, false);

        el.addEventListener('touchmove', function(e){
            
            var touchobj, delta, move, t;
            
            // Reference first touch point for this event
            touchobj = e.changedTouches[0]; 
            
            delta = ( parseInt(touchobj.clientX) - start ) - dist;
            dist = parseInt(touchobj.clientX) - start;
            move =  delta < 0 ? -1 : 1;
            
            t = c.style.transform.replace('translateX(','').replace('%)','');
            c.style.transform = 'translateX(' + (parseInt(t) + move) + '%)';
                        
            e.preventDefault();
            
        }, false);

        el.addEventListener('touchend', function(e){
            
            // Rehook CSS transitions after the swipe is complete to animate snapping
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
(function () {

    'use strict';
        
    window.addEventListener('load', initCLTabs, false);
    
    var tablist, panels, tabs, numtabs = 0; // Keep these global so we don't have to keep passing from func to func
    
    function initCLTabs() {
        
        var els, i;
        
        els = document.querySelectorAll('.cl-tabs');
        for (i = 0; i<els.length; i++) {
            formatTabs(els[i]);
        }
        
    }
    
    
    /*
     * Restyle the component to make it look great
     * @param tabbed el the .cl-tabs element
     */
    function formatTabs(tabbed) {
    
        var header, href, li, a, i;
        
        // Add a hook for the js version styles
        tabbed.classList.add('cl-tabs-js');
        
        panels = tabbed.querySelectorAll('section');
        
        // Create tabs
        tablist = document.createElement('ul');
        tablist.setAttribute('role', 'tablist');
        
        for (i=0; i<panels.length; i++) {
            
            numtabs++;
            
            // Try to use panel h1 or h2 for tab names, otherwise use generic name
            header = panels[i].querySelector('h1');
            if (header) {
                header = header.innerHTML;
            } else {
                header = panels[i].querySelector('h2');
                if (header) {
                    header = header.innerHTML;
                } else {
                    header = 'Section ' + numtabs;
                }
            }
            
            // Try to use panel id for tab href, otherwise create generic id for panel and href.
            href = panels[i].id;
            if (href === '') {
                href = 'cl-tab-section-' + numtabs;
                panels[i].id = href;
            }
            
            li = document.createElement('li');
            li.setAttribute('role', 'presentation');
            
            a = document.createElement('a');
            a.href = '#' + href;
            a.id = ('cl-tabs-tab-' + numtabs);
            a.setAttribute('role', 'tab');
            a.setAttribute('tabindex', '-1');
            a.innerHTML = header;
            
            li.appendChild(a);
            tablist.appendChild(li);
        }
        
        tabbed.insertBefore(tablist, panels[0]);
        
        
        // Add event listeners to tabs
        tabs = tablist.querySelectorAll('a');
        for (i=0; i<tabs.length; i++) {
            tabs[i].addEventListener('click', handleClick);
            tabs[i].addEventListener('keydown', handleKeystroke);
        }


        // Add tab panel semantics and hide them all
        for (i=0; i<panels.length; i++) {
            
            panels[i].setAttribute('role', 'tabpanel');
            panels[i].setAttribute('tabindex', '-1');
            
            var id = panels[i].getAttribute('id');
            panels[i].setAttribute('aria-labelledby', tabs[i].id);
            panels[i].hidden = true;
            
        }

        // Initially activate the first tab and reveal the first tab panel
        tabs[0].removeAttribute('tabindex');
        tabs[0].setAttribute('aria-selected', 'true');
        panels[0].hidden = false;
        
    }
    
    
    /*
     * Handle tab clicking
     * @param e obj the event object
     */
    function handleClick(e) {
        e.preventDefault();
        var currentTab = tablist.querySelector('[aria-selected]');
        if (e.currentTarget !== currentTab) {
            switchTab(currentTab, e.currentTarget);
        }
    }
    
    
    /*
     * Handle key input
     * @param e obj the event object
     */
    function handleKeystroke(e) {
        // Get the index of the current tab in the tabs node list
        var index = Array.prototype.indexOf.call(tabs, e.currentTarget);

        // Work out which key the user is pressing and
        // Calculate the new tab's index where appropriate
        var dir = e.which === 37 ? index - 1 : e.which === 39 ? index + 1 : e.which === 40 ? 'down' : null;

        if (dir !== null) {
            e.preventDefault();

            // If the down key is pressed, move focus to the open panel,
            // otherwise switch to the adjacent tab
            if (dir === 'down') {
                panels[i].focus();
            } else if (tabs[dir]) {
                switchTab(e.currentTarget, tabs[dir]);
            } else {
                void 0;
            }

        }
    }
    
    
    /*
     * The tab switching function
     * @param oldTab el the current tab
     * @param newTab el the tab selected
     */
    function switchTab(oldTab, newTab) {

        newTab.focus();

        // Make the active tab focusable by the user (Tab key)
        newTab.removeAttribute('tabindex');

        // Set the selected state
        newTab.setAttribute('aria-selected', 'true');
        oldTab.removeAttribute('aria-selected');
        oldTab.setAttribute('tabindex', '-1');

        // Get the indices of the new and old tabs to find the correct
        // tab panels to show and hide
        var index = Array.prototype.indexOf.call(tabs, newTab);
        var oldIndex = Array.prototype.indexOf.call(tabs, oldTab);
        panels[oldIndex].hidden = true;
        panels[index].hidden = false;

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
                    'ytid' : el.getAttribute('data-id'),
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
            
            var aspect = 16/9; // Set default aspect
                
            if ( el.getAttribute('data-aspect') ) {
                aspect = el.getAttribute('data-aspect').split(':');
                aspect = aspect[0]/aspect[1];
            }
            
            uri_videos[key] = {
                'poster' : el,
                'ytid' : el.getAttribute('data-id'),
                'parent' : el.parentNode,
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

        var key, value;
        
        for (key in uri_vid_heros) {
            
            value = uri_vid_heros[key];

            value.player = new YT.Player(key, {
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
                    'onReady' : onHeroReady,
                    'onStateChange' : onHeroStateChange,
                    'onError' : onHeroError
                }
            });

        }
        
        for (key in uri_videos) {
                        
            value = uri_videos[key];

            value.player = new YT.Player(key, {
                videoId: value.ytid,
                playerVars: {
                    autoplay: 0,
                    controls: 1,
                    showinfo: 0,
                    color: 'white',
                    modestbranding: 1,
                    iv_load_policy: 3
                },
                events: {
                    'onReady' : onVideoReady,
                    'onStateChange' : onVideoStateChange,
                    'onError' : onVideoError
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
     * Revert to poster if there's an error with the hero video
     * @param str key the key of the hero in uri_vid_heros
     */
    function onHeroError(event) {
        //console.log('hero error', event);
        
        uri_vid_heros[event.target.a.id].poster.classList.remove('unveil');
        uri_vid_heros[event.target.a.id].parent.querySelector('.motionswitch').style.display = 'none';
    }
    
    
    /*
     * Link the poster to the video on YouTube if there's an error with the video
     * @param str key the key of the hero in uri_videos
     */
    function onVideoError(event) {
        //console.log('video error', event);
        
        var el, a, img, alt;
        
        el = uri_videos[event.target.a.id];
                
        a = document.createElement('a');
        a.href = "http://www.youtube.com/watch?v=" + el.ytid;
        a.title = "Try watching this video on YouTube";
        
        img = document.createElement('img');
        img.src = el.poster.getAttribute('src');
        alt = el.poster.getAttribute('alt');
        if (!alt) {
            alt = "Poster for video";
        }
        img.alt = alt;
        a.appendChild(img);
              
        var iframe = document.getElementById(event.target.a.id);
        if (iframe) {
            el.parent.replaceChild(a, iframe);
        }
    
    }
    
    
    /*
     * Get video state and decide what to do
     * @param obj event the video player
     */
    function onVideoStateChange(event) {
        
        var state = event.target.getPlayerState(),
            key = event.target.a.id,
            overlay = uri_videos[key].parent.querySelector('.overlay');
        
        switch (state) {
            case 1:
            case 3:
                overlay.classList.add('hidden');
                break;
            default:
                overlay.classList.remove('hidden');
        }
    }
    
})();