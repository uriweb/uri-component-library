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
        
        var els, n, i, div;
        
        els = document.querySelectorAll('.cl-hero.super');
        n = els.length;
        
        for (i=0; i<n; i++) {
            div = document.createElement('div');
            div.className = 'prompter';
            div.innerHTML = 'Scroll down';
            els[i].appendChild(div);
        }
        
        resize();
        
        window.addEventListener('resize', resize, false);
        
        function resize() {
            
            var el, prompter, vh, vw, offset;
        
            for (i=0; i<n; i++) {

                el = els[i];
                prompter = el.querySelector('.prompter');
                offset = el.getBoundingClientRect().top;
                vh = window.innerHeight;
                vw = window.innerWidth;

                var p = offset / vh;

                console.log(vh, vw, vh*0.9, offset, p);

                if ( (vh < vw * 0.75 && vh * 0.9 < 600) || (p > 0.3) ) {
                    el.style.height = '90vh';
                    
                    prompter.style.display = 'none';
                    
                } else {
                    el.style.height = 98 - p * 100 + 'vh';
                    
                    if ( offset < vh ) {
                        console.log('display prompter');
                        prompter.style.display = 'block';
                    } else {
                        prompter.style.display = 'none';
                    }
                    
                }

            }
            
        }
        
        
    }

})();