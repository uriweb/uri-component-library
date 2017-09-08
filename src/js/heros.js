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
        
        heros.forEach(function(el){
            el.style.backgroundPositionX = '100%';
            el.style.backgroundPositionY = 0;
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
            var p = window.pageYOffset,
                h = overlay.offsetHeight + offset,
                b = Math.min(p/h*radius, radius);
            
            overlay.style.webkitBackdropFilter = 'blur(' + b + 'px)';
        }
        
    }
    
    function mobile() {
        
        var els = document.querySelectorAll('.cl-hero .poster');
        
        window.addEventListener('resize', function(){
            var w = window.innerWidth;
            if (w < 750) {
                els.forEach(function(el){
                    el.style.display = 'block';
                });
            } else {
                els.forEach(function(el){
                    el.style.display = 'none';
                });
            }
        });
    }

})();