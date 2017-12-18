/* ======= MENUS ======= */

(function(){
    
    'use strict';
    
    var hiddenClass = 'hidden';
    
    window.addEventListener('load', initCLMenus, false);
    
    function initCLMenus() {
        var menus, uls, trigger, spans, i;
        
        // Since we have JS, let's hide any nested menus and add submenu triggers
        
        menus = document.querySelectorAll('.cl-menu');
        for (i=0; i<menus.length; i++) {
            menus[i].classList.add('.cl-menu-js');
        }
        
        uls = document.querySelectorAll('.cl-menu ul');
        for (i=0; i<uls.length; i++) {
            uls[i].classList.add(hiddenClass);
            uls[i].parentNode.addEventListener('mouseover', mouseover.bind(null, uls[i]));
            uls[i].parentNode.addEventListener('mouseout', mouseout.bind(null, uls[i]));
        }
        
    }
    
    
    /*
     * Open the submenu
     * @param el el the submenu trigger clicked
     */
    function mouseover(el) {  
        el.classList.remove(hiddenClass);
    }
    
    /*
     * Close the submenu
     * @param el el the submenu trigger clicked
     */
    function mouseout(el) {  
        el.classList.add(hiddenClass); 
    }
    
})();