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
     * @param el obj the gallery element
     */
    function parse(el) {
        
        var figs, i, parts, a, img, caption, parsed = [];
        
        figs = el.querySelectorAll('figure');
        
        for (i=0; i<figs.length; i++) {
            
            parts = {};
            
            img = figs[i].querySelector('img');
            if(img) {
                parts.img = img.getAttribute('src');
            }
            
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
     * @param el obj the gallery element
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
        carousel.className = 'carousel';
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
            li.style.backgroundImage = 'url(' + parsed[i].img + ')';
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
	 * Create controlls
     * @param c obj the carousel
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
			target.addEventListener('click', controlDirection.bind(null, c, types[x]) );
            
            button = document.createElement('div');
            button.className = 'controller';
            target.appendChild(button);
            
			controls.appendChild(target);
		}
        
        return controls;
        
	}
    
    
    /*
     * Control direction of movement
     * @param c obj the carousel
     * @param direction str the direction to move in
     */
    function controlDirection(c, direction) {
		var index, count;
		index = c.getAttribute('data-position');
		count = c.children.length -1;
		
		if(direction == 'Next') {
			index++;
			if(index > count) {
				index = 0;
			}
		} else {
			index--;
			if(index < 0) {
				index = count;
			}
		}
        
		setPosition(c, index);
	}
    
    
    /*
     * Set position of slideshow
     * @param c obj the carousel
     * @param index int the index to move to
     */
    function setPosition(c, index) {
        
        var S, captions, counter, i;
                        
        c.style.transform = 'translateX(-' + (index * 100) + '%)';
        c.setAttribute('data-position', index);
        
        S = c.parentNode.parentNode;
        
        captions = S.querySelectorAll('.caption');        
        for (i=0; i<captions.length; i++) {
            captions[i].classList.remove('active');
        }
        
        captions[index].classList.add('active');
        
        counter = S.querySelector('.counter span');
        counter.innerHTML = index + 1;
        
    
    }
    
    
})();