/* General scripts for the playground */


/*
 * Menu control
 */
function menuControl() {
    
    'use strict';

    var gn, wm, lis, i;
    
    gn = document.getElementById('globalnav');
    wm = document.getElementById('window-mask');
    
    document.getElementById('menu-button').addEventListener('click', function(e) {
        e.stopPropagation();
        gn.classList.add('revealed');
        wm.classList.add('visible');
    });

    window.addEventListener('click', function() {
        gn.classList.remove('revealed');
        wm.classList.remove('visible');
    });

    gn.addEventListener('click', function(e) {
        e.stopPropagation();
    });

    lis = document.querySelectorAll('#gn>li');
    for(i=0; i<lis.length; i++) {
        lis[i].addEventListener('click', handleMenuClick.bind(null, lis[i]));
    }
    
    function handleMenuClick(el) {
        var ul = el.querySelector('ul');
        if(ul.style.display == 'none' || ul.style.display === '') {
            ul.style.display = 'block';
        } else {
            ul.style.display = 'none';
        }
    }
    
}


/*
 * Load template parts
 * @param url str the relative url to load
 * @param el str the element to fill
 * @param success func optional success function
 */
function loadTemplatePart(url, el, success) {
    
    'use strict';
        
    var xmlhttp = new XMLHttpRequest(), loc, n, i, path;
                
    xmlhttp.onreadystatechange = function() {
        if (xmlhttp.readyState == XMLHttpRequest.DONE && xmlhttp.status == 200) {
            document.querySelector(el).innerHTML = xmlhttp.responseText;
            if (success) {
                success();
            }
        }
    };
    
    loc = window.location.pathname.split('/');
    loc.shift();
        
    n = (url.match(/\..\//g) || []).length;
    for(i=0; i<n+1; i++) {
        loc.pop();
    }
    
    loc = loc.toString();
    loc.replace(',','/');
    
    path = window.location.protocol + '//' + window.location.hostname + '/' + loc + '/' + url.replace(/\..\//g, '');

    xmlhttp.open('GET', path, true);
    xmlhttp.send();

}
