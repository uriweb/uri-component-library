/* ======= HEROS ======= */

(function(){
    
    'use strict';
    
    window.addEventListener('load', initCLHeros, false);
    
    function initCLHeros(){
        dynamicZoom();
        blurHeroControl();
    }

    
    /* 
     * Zooming for dynamic image heros
     */
    function dynamicZoom() {
        
        var heros = document.querySelectorAll('.cl-hero .dynamic');
        
        heros.forEach(function(el){
            var zoom = el.getAttribute('data-zoom'),
                factor = zoom ? zoom : 1.25; // The default zoom factor
            el.style.width = factor*100 + '%';
            el.style.top = (1-factor)*100/4 + '%';
            el.style.left = (1-factor)*100/8 + '%';
        });
        
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

            console.log('overlay', overlay);
            blurHero();

            window.addEventListener('scroll', function(){
                blurHero();
            });

        }

        function blurHero() {
            //console.log('blur');
            var p = window.pageYOffset,
                h = overlay.offsetHeight + offset,
                b = Math.min(p/h*radius, radius);
            
            overlay.style.webkitBackdropFilter = 'blur(' + b + 'px)';
        }
        
    }

})();