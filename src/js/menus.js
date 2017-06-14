/* ======= MENUS ======= */

$(function(){
    
    'use strict';
    
    // Since we have JS, let's hide any nested menus
    $('.menu ul').each(function(){
        console.log('ok');
        $(this).hide();
    });
    
    $('.menu span').append('<div class="arrow"></div>');
    
    // Bind click event to nested menu triggers
    $('.menu span').click(function(){
        submenuControl($(this).parent());
    });
    
    
    /*
     * Toggle submenu visibility
     * @param obj el the li containing the submenu
     */
    function submenuControl(el) {
        $(el).find('.arrow').toggleClass('up');
        $(el).find('ul').slideToggle(150);
    }
    
});