/* General scripts for the playground */

'use strict';

/* MENU CONTROL */

$(function(){
            
    $(document).on('click', '#menu-button', function(event){
        event.stopPropagation();
        $('#globalnav').addClass('revealed');
        $('#window-mask').addClass('visible');
    });

    $(window).on('click', function(){
        $('#globalnav').removeClass('revealed');
        $('#window-mask').removeClass('visible');
    });

    $(document).on('click', '#globalnav', function(event){
        event.stopPropagation();
    });
    
    $(document).on('click', '#gn>li', function(){
        $(this).find('ul').slideToggle('fast');
    });
    
});