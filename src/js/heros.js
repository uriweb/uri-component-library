/* ======= HEROS ======= */


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



/* ======= VIDEO HEROS ======= */

var uri_vid_heros = [];

/*
 * Get video ID(s) and load the API
 */
$(function() {
    
    $('.hero .poster').each(function(i,el) {

        uri_vid_heros.push({
            'poster' : el,
            'w' : $(el).parent().width(),
            'h' : $(el).parent().height(),
            'vidID' : $(el).attr('id'),
            'start' : $(el).data('start') ? $(el).data('start') : 0,
            'end' : $(el).data('end') ? $(el).data('end') : -1
        });
                        
    });
    
    loadYouTubeAPI();
    
});


/*
 * Load the API
 */
function loadYouTubeAPI() {
    var tag = document.createElement('script');
    tag.src = "https://www.youtube.com/player_api";
    var firstScriptTag = document.getElementsByTagName('script')[0];
    firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
}
  

/*
 * Create the player
 */
function onYouTubePlayerAPIReady() {
        
    $(uri_vid_heros).each(function(i,el){

        el.player = new YT.Player(el.vidID, {
            width: el.w,
            height: el.h,
            videoId: el.vidID,
            playerVars: {
                autoplay: 1,
                controls: 0,
                showinfo: 0,
                start: el.start,
                end: el.end,
                modestbranding: 1,
            },
            events: {
                'onReady' : onPlayerReady,
                'onStateChange' : onPlayerStateChange,
                'onError' : onPlayerError(i)
            }
        });
        
    });
    
}


/*
 * Dynamically set the player height and position based on width
 */
function resizePlayer(event) {
    var el = $('#' + event.target.a.id),
        w = el.parent().width(),
        h = el.parent().innerHeight();
    
    if (w/h > 16/9) {
        el.css({
            'height' : w * 9 / 16,
            'width' : '100%',
            'left' : 0,
            'top' : (h - (w*9/16)) / 2,
            'margin-left' : 0,
        });
    } else {
        w = h * 16 / 9;
        el.css({
            'height' : '100%',
            'width' : w,
            'left' : 0 - w / 2,
            'top' : 0,
            'margin-left' : '50%',
        });
    }
}


/*
 * Pause the video when it's completely out of the viewport
 */
function determinePlayState(event) {
    
    var parent = $('#' + event.target.a.id).parent();
    
    var h = parent.innerHeight(),
        o = parent.offset().top,
        v = $(window).height(),
        p = $(document).scrollTop();
    
    v + p < o || p > o + h ? event.target.pauseVideo() : event.target.playVideo();
    
}


/*
 * Do things with the player when it's loaded
 */
function onPlayerReady(event) {
    console.log(event);
    event.target.mute();
    
    $(window).resize(function(){
        resizePlayer(event);
    });
    resizePlayer(event);

    $(window).scroll(function(){
        determinePlayState(event);
    });
    determinePlayState(event);
}


/*
 * Get player state and decide what to do
 */
function onPlayerStateChange(event) {
    if (event.target.getPlayerState() === 0) {
        event.target.playVideo();
    }
}


/*
 * Revert to poster if there's an error with the video
 * @param int i the index of the hero to manipulate
 */
function onPlayerError(i) {
    $('#' + uri_vid_heros[i].vidID).replaceWith(uri_vid_heros[i].poster);
}



/* ======= DYNAMIC IMAGE HEROS ======= */

$(function(){
    
    $('.hero .dynamic').each(function(i,el){
            
        factor = $(el).data('zoom') ? $(el).data('zoom') : 1.25; // The default zoom factor
        $(el).css('position','relative');
        
        $(el).animate({
            width: factor*100 + '%',
            top: (1-factor)*100/4 + '%',
            left: (1-factor)*100/8 + '%'
        }, 10000);
        
    });
    
});
