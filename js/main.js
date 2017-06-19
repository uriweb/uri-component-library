/* General scripts for the playground */

/* MENU CONTROL */

$(function(){
    
    'use strict';
    
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
        header = $('#globalheader'),
        blur = 0,
        h,r,p;
    
    blurHero();
    
    function blurHero() {
        p = $(document).scrollTop();
        h = overlay.height() + header.height();
        if (p < h) {
            r = p/h*50;
            overlay.css('backdrop-filter','blur('+r+'px)');
        } else {
            overlay.css('backdrop-filter','blur(50px)');
        }
    }
    
    $(window).scroll(function(){
        blurHero();
    });
});