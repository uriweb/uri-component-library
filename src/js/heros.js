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