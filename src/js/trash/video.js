/* ======= VIDEOS ======= */


var uri_videos = [];

/*
 * Get video ID(s) and load the API
 */
$(function() {
    
    $('.video img').each(function(i,el) {
        
        var aspect = 9/16; // Set default aspect
        
        if ( $(el).data('aspect') ) {
            aspect = $(el).data('aspect').split(':');
            aspect = aspect[0]/aspect[1];
        }

        uri_videos.push({
            'poster' : el,
            'vidID' : $(el).attr('id'),
            'aspect' : aspect
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
        
    $(uri_videos).each(function(i,el){

        el.player = new YT.Player(el.vidID, {
            videoId: el.vidID,
            playerVars: {
                autoplay: 0,
                controls: 1,
                showinfo: 0,
                color: 'white',
                modestbranding: 1
            },
            events: {
                'onReady' : onPlayerReady(i),
                'onError' : onPlayerError(i)
            }
        });
        
    });
    
}


/*
 * Dynamically set the player height and position based on width
 */
function resizePlayer(i) {
    var el = $('#' + uri_videos[i].vidID),
        w = el.parent().width();
    
    el.css({
        'height' : w * uri_videos[i].aspect,
        'width' : '100%',
    });
}


/*
 * Do things with the player when it's loaded
 */
function onPlayerReady(i) {
    
    $(window).resize(function(){
        resizePlayer(i);
    });
    resizePlayer(i);

}


/*
 * Revert to poster if there's an error with the video
 * @param int i the index of the hero to manipulate
 */
function onPlayerError(i) {
    $('#' + uri_videos[i].vidID).replaceWith(uri_videos[i].poster);
}