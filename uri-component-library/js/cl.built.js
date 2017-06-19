/* ======= HEROS ======= */

var hero = [];


/*
 * Get video ID(s) and load the API
 */
$(function() {
    
    document.querySelectorAll('.hero .poster').forEach(function(el) {

        hero.push({
            'poster' : el,
            'parent' : el.parentNode,
            'vidID' : el.getAttribute('id')
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
    
    hero.forEach(function(el,i){
        
        el['player'] = new YT.Player(el.vidID, {
            videoId: el.vidID,
            playerVars: {
                autoplay: 1,
                controls: 0,
                showinfo: 0,
                modestbranding: 1,
            },
            events: {
                'onReady': onPlayerReady,
                'onStateChange' : onPlayerStateChange,
                'onError' : onPlayerError(i)
            }
        });
        
        $(window).resize(function(){
            resizePlayer(i);
        }); 
        
        resizePlayer(i);
        
    });
    
}


/*
 * Dynamically set the player height and position based on width
 * @param int i the index of the hero to manipulate
 */
function resizePlayer(i) {
    var w = $(hero[i].parent).width(),
        h = $(hero[i].parent).height();
    if (w/h > 16/9) {
        $('#' + hero[i].vidID).css({
            'height' : w * 9 / 16,
            'width' : '100%',
            'left' : 0,
            'margin-left' : 0
        });
    } else {
        w = h * 16 / 9;
        $('#' + hero[i].vidID).css({
            'height' : '100%',
            'width' : w,
            'left' : 0 - w / 2,
            'margin-left' : '50%'
        });
    }
}


/*
 * Do things with the player when it's loaded
 */
function onPlayerReady(event) {
    event.target.mute();
    event.target.setPlaybackQuality('hd720');
    playVideo(event);
}


/*
 * Get player state and decide what to do
 */
function onPlayerStateChange(event) {
    var state = event.target.getPlayerState();
    //console.log('player state', state);
    switch (state) {
        case 0: // ended
            playVideo(event);
            break;
        default:
            return;
    }
}


/*
 * Play the video
 */
function playVideo(event) {
    event.target.playVideo();
}


/*
 * Revert to poster if there's an error with the video
 * @param int i the index of the hero to manipulate
 */
function onPlayerError(i) {
    $('#' + hero[i].vidID).replaceWith(hero[i].poster);
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