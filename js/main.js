/* General scripts for the playground */

/* MENU CONTROL */

$(function(){
    
    $('#menu-button').click(function(event){
        event.stopPropagation();
        $('#globalnav').addClass('revealed');
        $('#window-mask').addClass('visible');
    });

    $(window).click(function(){
        $('#globalnav').removeClass('revealed');
        $('#window-mask').removeClass('visible');
    });

    $('#globalnav').click(function(event){
        event.stopPropagation();
    });
    
});

$(window).scroll(function(){
    $(document).scrollTop() > $('header').height() ? $('header').addClass('transparent') : $('header').removeClass('transparent');
});