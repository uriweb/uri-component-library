/* General scripts for the playground */

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
    
});

$(window).scroll(function(){
    $(document).scrollTop() > $('header').height() ? $('header').addClass('transparent') : $('header').removeClass('transparent');
});