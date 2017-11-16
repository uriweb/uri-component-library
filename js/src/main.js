/* General scripts for the playground */


/*
 * Menu control
 */
function menuControl() {
    
    'use strict';

    var lis, i;
    
    document.getElementById('menu-button').addEventListener('click', function(e) {
        e.stopPropagation();
        document.getElementById('globalnav').classList.add('revealed');
        document.getElementById('window-mask').classList.add('visible');
    });

    window.addEventListener('click', function() {
        document.getElementById('globalnav').classList.remove('revealed');
        document.getElementById('window-mask').classList.remove('visible');
    });

    document.getElementById('globalnav').addEventListener('click', function(e) {
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
        
    var xmlhttp = new XMLHttpRequest(), loc, n, i;
                
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
    
    xmlhttp.open('GET', '/' + loc + '/' + url.replace(/\..\//g, ''), true);
    xmlhttp.send();

}
