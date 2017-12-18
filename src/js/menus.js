/* ======= MENUS ======= */

(function(){
    
    'use strict';
    
    window.addEventListener('load', initCLMenus, false);
    
    function initCLMenus() {
        var uls, trigger, spans, i;
        
        // Since we have JS, let's hide any nested menus and add submenu triggers
        uls = document.querySelectorAll('.cl-menu ul');
        for (i=0; i<uls.length; i++) {
            uls[i].style.display = 'none';
            trigger = document.createElement('span');
            trigger.className = 'submenu-trigger';
            trigger.innerHTML = 'Expand menu';
            uls[i].parentNode.insertBefore(trigger, uls[i]);
        }

        // Append dropdown arrows, bind click event to submenu triggers, and control the submenu                               
        spans = document.querySelectorAll('.cl-menu .submenu-trigger');
        for(i=0; i<spans.length; i++) {
            var el = spans[i];
            
            el.addEventListener('click', handleDropdown.bind(null, el));
            
            var arrow = document.createElement('div');
            arrow.className = 'arrow';
            el.appendChild(arrow);
        }
        
    }
    
    
    /*
     * Control the submenu
     * @param el el the submenu trigger clicked
     */
    function handleDropdown(el) {
        
        var ul, arrow;
        
        ul = el.parentNode.querySelector('ul');
        ul.style.display = ul.style.display === 'none' ? 'block' : 'none';
        
        arrow = el.querySelector('.arrow');
        if (arrow.classList.contains('on')) {
            arrow.classList.remove('on');
        } else {
            arrow.classList.add('on');
        }
        
    }
    
})();