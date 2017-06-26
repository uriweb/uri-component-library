/* ======= DYNAMIC IMAGE HEROS ======= */

$(function(){
    
    $('.hero .dynamic').each(function(i,el){
            
        var factor = $(el).data('zoom') ? $(el).data('zoom') : 1.25; // The default zoom factor
        $(el).css('position','relative');
        
        $(el).animate({
            width: factor*100 + '%',
            top: (1-factor)*100/4 + '%',
            left: (1-factor)*100/8 + '%'
        }, 10000);
        
    });
    
});



/* ======= FULL-WIDTH HEROS ======= */


/* 
 * Blur header hero on scroll
 */
$(function(){
        
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
    
});


/*
 * Add reduce motion button
 */
$(function(){
    
    $('.hero .poster').each(function(){
        $(this).parent().find('.overlay').append('<div class="motionswitch">Pause Motion</div>');
    });
    
});