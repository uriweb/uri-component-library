/* ======= MENUS ======= */

(function(){
    
    'use strict';
    
    var revealClass = 'reveal';
    
    window.addEventListener('load', initCLMenus, false);
    
    function initCLMenus() {
        var menus, uls, i, a, span, li;
        
        // Since we have JS, let's add a unique css hook and submenu triggers
        
        menus = document.querySelectorAll('.cl-menu');
        for (i=0; i<menus.length; i++) {
            menus[i].classList.add('.cl-menu-js');
        }
        
        uls = document.querySelectorAll('.cl-menu-list ul');
        for (i=0; i<uls.length; i++) {
            a = uls[i].parentNode.querySelector('a');
            
            span = document.createElement('span');
            span.className = 'cl-menu-arrow';
            uls[i].parentNode.append(span);
            
            li = document.createElement('li');
            li.appendChild(a.cloneNode(true));
            
            uls[i].insertBefore(li, uls[i].firstChild);
            
            bindListeners(a, uls, uls[i]);
        }
        
    }
    
    function bindListeners(a, uls, ul) {
        a.addEventListener('click', function(e) {
            e.preventDefault();
            handleClick(uls, ul);
        });
    }
    
    function handleClick(els, el) {
        var toggle, i;
        
        toggle = el.classList.contains(revealClass);
        
        for (i=0; i<els.length; i++) {
            els[i].classList.remove(revealClass);
        }
        
        if (!toggle) {
            el.classList.add(revealClass);
        }
        
    }
    
})();