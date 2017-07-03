/* ======= HEROS ======= */

(function($){
    
    'use strict';
    
    window.addEventListener('load', initCLHeros, false);
    
    function initCLHeros(){
        dynamicZoom();
        blurHeroControl();
        heroControlButton();
    }

    
    /* 
     * Zooming for dynamic image heros
     */
    function dynamicZoom() {
        $('.cl-hero .dynamic').each(function(i,el){

            var factor = $(el).data('zoom') ? $(el).data('zoom') : 1.25; // The default zoom factor
            $(el).css('position','relative');
            $(el).animate({
                width: factor*100 + '%',
                top: (1-factor)*100/4 + '%',
                left: (1-factor)*100/8 + '%'
            }, 10000);

        });
    }

    
    /* 
     * Blur header hero on scroll
     */
    function blurHeroControl() {
        if ($('#hero').length) {

            var overlay = $('#hero .overlay'),
                offset = overlay.offset().top,
                radius = 50, // Set the desired blur radius, in pixels
                h,b,p;

            blurHero();

            $(window).scroll(function(){
                blurHero();
            });

        }

        function blurHero() {
            p = $(document).scrollTop();
            h = overlay.height() + offset;
            b = Math.min(p/h*radius, radius);
            overlay.css('backdrop-filter','blur(' + b + 'px)');
        }
    }

    
    /*
     * Add play/pause button
     */
    function heroControlButton() {
        var html;

        html = '<div class="motionswitch" title="Pause">';
        html += '<div></div><div></div>';
        html += '</div>';

        $('.cl-hero .poster').each(function(i, el){
            $(this).parent().find('.overlay').append(html);
        });
    };

})(jQuery);