/* ======= HEROS ======= */

var hero = {
    poster:'',
    vidID:'', 
    player:''
};


/*
 * Get video ID and determine the API to load
 */
$(function() {
    hero.poster = document.querySelector('#hero .youtube');
    if(hero.poster) { 
        // Use the target img id as the vid ID
        hero.vidID = hero.poster.getAttribute('id');
        loadYouTubeAPI();
    };
});


/*
 * Load the YT API
 */
function loadYouTubeAPI() {
    var tag = document.createElement('script');
    tag.src = "https://www.youtube.com/player_api";
    var firstScriptTag = document.getElementsByTagName('script')[0];
    firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
}
  

/*
 * Create the YT player
 */
function onYouTubePlayerAPIReady() {
    hero.player = new YT.Player(hero.vidID, {
        width: '0',
        height: '0',
        videoId: hero.vidID,
        playerVars: {
            autoplay: 1,
            //end: 30,
            controls: 0,
            showinfo: 0,
            modestbranding: 1,
        },
        events: {
            'onReady': onPlayerReady,
            'onStateChange' : onPlayerStateChange,
            'onError' : onPlayerError
        }
    });
    
    $(window).resize(function(){
        resizePlayer();
    }); resizePlayer();
    
}


/*
 * Set the YT player height and position based on width
 */
function resizePlayer() {
    var w = $('#hero').width();
    var h = $('#hero').height();
    console.log(w/h);
    if (w/h > 16/9) {
        $('#' + hero.vidID).css({
            'height' : w * 9 / 16,
            'width' : '100%',
            'left' : 0,
            'margin-left' : 0
        });
    } else {
        w = h * 16 / 9;
        $('#' + hero.vidID).css({
            'height' : '100%',
            'width' : w,
            'left' : 0 - w / 2,
            'margin-left' : '50%'
        });
    }
}


/*
 * Do things with the YT player when it's loaded
 */
function onPlayerReady(event) {
    event.target.mute();
    playVideo(event);
}

/*
 * Get player state and decide what to do
 */
function onPlayerStateChange(event) {
    var state = event.target.getPlayerState();
    console.log(state);
    switch (state) {
        case 0: // ended
            playVideo(event);
            break;
        default:
            return;
    }
}

/*
 * Play the YT video
 */
function playVideo(event) {
    event.target.playVideo();
}


/*
 * Revert to poster if there's an error with the video
*/
function onPlayerError() {
    $('#' + hero.vidID).replaceWith(hero.poster);
}