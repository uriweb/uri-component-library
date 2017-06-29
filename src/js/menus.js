/* ======= MENUS ======= */

$(function(){
    
    'use strict';
    
    // Since we have JS, let's hide any nested menus
    $('.cl-menu ul').each(function(){
        console.log('ok');
        $(this).hide();
    });
    
    // Append dropdown arrows, bind click event to submenu triggers, and control the submenu
    $('.cl-menu span').append('<div class="arrow"></div>')
        .click(function(){
            var el = $(this).parent();
            $(el).find('.arrow').eq(0).toggleClass('on');
            $(el).find('ul').eq(0).slideToggle(150);
        });
    
});