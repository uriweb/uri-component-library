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
    // Use the target img id as the vid ID
    hero.poster = document.querySelector('#hero .youtube');
    if(hero.poster) { 
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
        width: '2000',
        height: '1124',
        videoId: hero.vidID,
        playerVars: {
            //autoplay: 1,
            //end: 30,
            controls: 0,
            showinfo: 0,
            modestbranding: 1,
        },
        events: {
            'onReady': onPlayerReady,
            'onStateChange' : onPlayerStateChange,
        }
    });

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
        case 2: // paused
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
/* ======= MENUS ======= */

$(function(){
    
    'use strict';
    
    // Since we have JS, let's hide any nested menus
    $('.menu ul').each(function(){
        console.log('ok');
        $(this).hide();
    });
    
    // Append dropdown arrows, bind click event to submenu triggers, and control the submenu
    $('.menu span').append('<div class="arrow"></div>')
        .click(function(){
            var el = $(this).parent();
            $(el).find('.arrow').eq(0).toggleClass('on');
            $(el).find('ul').eq(0).slideToggle(150);
        });
    
});