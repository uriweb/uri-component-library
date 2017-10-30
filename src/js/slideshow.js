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