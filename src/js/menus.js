/* ======= MENUS ======= */

(function(){
    
    'use strict';
    
    var revealClass = 'reveal';
    
    window.addEventListener('load', initCLMenus, false);
    
    function initCLMenus() {
        var menus, uls, trigger, spans, i;
        
        // Since we have JS, let's add a unique css hook and submenu triggers
        
        menus = document.querySelectorAll('.cl-menu');
        for (i=0; i<menus.length; i++) {
            menus[i].classList.add('.cl-menu-js');
        }
        
        uls = document.querySelectorAll('.cl-menu-list ul');
        for (i=0; i<uls.length; i++) {
            uls[i].parentNode.addEventListener('click', function(e) {
                e.preventDefault();
            });
        }
        
    }
    
})();