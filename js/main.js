/* General scripts for the playground */

'use strict';

/* MENU CONTROL */

$(function(){
        
    $(document).on('click', '#menu-button', function(event){
        event.stopPropagation();
        $('#globalnav').addClass('revealed');
        $('#window-mask').addClass('visible');
    });

    $(window).click(function(){
        $('#globalnav').removeClass('revealed');
        $('#window-mask').removeClass('visible');
    });

    $(document).on('click', '#globalnav', function(event){
        event.stopPropagation();
    });
    
    $(window).scroll(function(){
        $(document).scrollTop() > $('header').height() ? $('header').addClass('transparent') : $('header').removeClass('transparent');
    });
    
});


// Blur hero on scroll

$(function(){
        
    var overlay = $('#hero .overlay'),
        header = $('header'),
        blur = 0,
        h,r,p;
    
    blurHero();
    
    function blurHero() {
        p = $(document).scrollTop();
        h = overlay.height() + header.height();
        console.log(header.height());
        console.log(p,h);
        if (p < h) {
            r = p/h*50;
            console.log(r);
            overlay.css('backdrop-filter','blur('+r+'px)');
        } else {
            overlay.css('backdrop-filter','blur(50px)');
        }
    }
    
    $(window).scroll(function(){
        blurHero();
    });
});