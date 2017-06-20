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
        
        $(window).scroll(function(){
            determinePlayState(i);
        });
        
        resizePlayer(i);
        
        // This shouldn't be called from here, but it is for now
        determinePlayState(i);

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
 * Pause the video when it's completely out of the viewport
 * @param int i the index of the hero to manipulate
 * @TODO this needs some work, it should ideally be called from
 * onPlayerReady() and the scroll listener only.
 */
function determinePlayState(i) {
    var height = $(hero[i].parent).height(),
        offset = $(hero[i].parent).offset().top,
        windowH = $(window).height(),
        position = $(document).scrollTop();

    if (windowH + position < offset || position > offset + height) {
        hero[i].player.pauseVideo();
    } else {
        hero[i].player.playVideo();
    }
}


/*
 * Do things with the player when it's loaded
 * @TODO this should ideally call determinePlayState() instead of
 * calling playVideo() -- See @todo for determinePlayState()
 */
function onPlayerReady(event) {
    event.target.mute();
    playVideo(event);
}


/*
 * Get player state and decide what to do
 */
function onPlayerStateChange(event) {
    if (event.target.getPlayerState() === 0) {
        playVideo(event);
    };
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


/* 
 * Blur hero on scroll
 */
$(function(){
        
    var overlay = $('#hero .overlay'),
        offset = overlay.offset().top,
        radius = 50, // Set the desired blur radius, in pixels
        h,b,p;
    
    function blurHero() {
        p = $(document).scrollTop();
        h = overlay.height() + offset;
        b = Math.min(p/h*radius, radius);
        overlay.css('backdrop-filter','blur(' + b + 'px)');
    }
    
    blurHero();
    
    $(window).scroll(function(){
        blurHero();
    });
    
});
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