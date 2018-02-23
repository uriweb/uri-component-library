/* ======= HEROS ======= */

(function(){
    
    'use strict';
    
    window.addEventListener('load', initCLHeros, false);
    
    function initCLHeros(){
        animate();
        blurHeroControl();
        mobile();
        superhero();
    }

    
    /* 
     * Animation control for animated image heros
     */
    function animate() {
        
        var heros = document.querySelectorAll('.cl-hero .animate.shift');
        
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
    
    function superhero() {
        
        var els, el, vh, offset, i;
        
        els = document.querySelectorAll('.cl-hero.super');
        
        resize();
        
        window.addEventListener('resize', resize, false);
        
        function resize() {
        
            for (i=0; i<els.length; i++) {

                el = els[i];
                offset = el.getBoundingClientRect().top;
                vh = window.innerHeight;

                var p = offset / vh;

                console.log(vh, offset, p);

                if (p > 0.3) {
                    el.style.height = '90vh';
                } else {
                    el.style.height = 95 - p * 100 + 'vh';
                }

            }
            
        }
        
        
    }

})();