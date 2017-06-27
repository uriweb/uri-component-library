/* ======= HERO VIDS / VIDEOS ======= */

var uri_vid_heros = [],
    uri_videos = [],
    requireYouTube;


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
        
        requireYouTube = true;
                        
    });
    
    $('.video img').each(function(i,el) {
        
        var aspect = 16/9; // Set default aspect
        
        if ( $(el).data('aspect') ) {
            aspect = $(el).data('aspect').split(':');
            aspect = aspect[0]/aspect[1];
        }

        uri_videos.push({
            'poster' : el,
            'vidID' : $(el).attr('id'),
            'aspect' : aspect
        });
        
        requireYouTube = true;
                        
    });
    
    if ( requireYouTube ) { loadYouTubeAPI(); }
    
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
 * Create the player(s)
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
                iv_load_policy: 3,
                rel: 0
            },
            events: {
                'onReady' : onHeroReady,
                'onStateChange' : onHeroStateChange,
                'onError' : onHeroError(i)
            }
        });
        
    });
    
    $(uri_videos).each(function(i,el){

        el.player = new YT.Player(el.vidID, {
            videoId: el.vidID,
            playerVars: {
                autoplay: 0,
                controls: 1,
                showinfo: 0,
                color: 'white',
                modestbranding: 1,
                iv_load_policy: 3
            },
            events: {
                'onReady' : onVideoReady(i),
                'onError' : onVideoError(i)
            }
        });
        
    });
    
}


/*
 * Dynamically set the hero height and position based on width
 */
function resizeHero(event) {
    var el = $('#' + event.target.a.id),
        w = el.parent().width(),
        h = el.parent().innerHeight();
    
    if (w/h > 16/9) {
        el.css({
            'height' : w * 9 / 16,
            'width' : '100%',
            'left' : 0,
            'top' : (h - (w*9/16)) / 2,
            'margin-left' : 0
        });
    } else {
        w = h * 16 / 9;
        el.css({
            'height' : '100%',
            'width' : w,
            'left' : 0 - w / 2,
            'top' : 0,
            'margin-left' : '50%'
        });
    }
}


/*
 * Dynamically set the video height and position based on width
 */
function resizeVideo(i) {
    var el = $('#' + uri_videos[i].vidID),
        w = el.parent().width();
    
    el.css({
        'width' : '100%',
        'height' : w / uri_videos[i].aspect
    });
}


/*
 * Pause the hero when it's completely out of the viewport
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
 * Do things with the hero when it's loaded
 */
function onHeroReady(event) {
    event.target.mute();
    
    $(window).resize(function(){
        resizeHero(event);
    });
    resizeHero(event);

    $(window).scroll(function(){
        determinePlayState(event);
    });
    determinePlayState(event);
    
    $('#' + event.target.a.id).parent().find('.motionswitch').click(function(){
        heroControl(event,$(this));
    });
    
}


/*
 * Do things with the video when it's loaded
 */
function onVideoReady(i) {
    
    $(window).resize(function(){
        resizeVideo(i);
    });
    resizeVideo(i);

}


/*
 * Control the hero video
 * @param obj event the hero player to control
 * @param el el the .motionswitch element
 */
function heroControl(event,el) {
    switch (event.target.getPlayerState()) {
        default:
        case 1:
            event.target.pauseVideo();
            $(el).addClass('paused');
            $(el).attr('title','Play');
            break;
        case 2: 
            event.target.playVideo();
            $(el).removeClass('paused');
            $(el).attr('title','Pause');
            break;
    } 
}


/*
 * Get hero state and decide what to do
 */
function onHeroStateChange(event) {
    if (event.target.getPlayerState() === 0) {
        event.target.playVideo();
    }
}


/*
 * Revert to poster if there's an error with the video
 * @param int i the index of the hero to manipulate
 */
function onHeroError(i) {
    $('#' + uri_vid_heros[i].vidID).replaceWith(uri_vid_heros[i].poster);
}


/*
 * Revert to poster if there's an error with the video
 * @param int i the index of the video to manipulate
 */
function onVideoError(i) {
    $('#' + uri_videos[i].vidID).replaceWith(uri_videos[i].poster);
}