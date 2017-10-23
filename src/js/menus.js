/* ======= MENUS ======= */

(function(){
    
    'use strict';
    
    window.addEventListener('load', initCLMenus, false);
    
    function initCLMenus() {
        var i;
        
        // Since we have JS, let's hide any nested menus
        var uls = document.querySelectorAll('.cl-menu ul');
        for (i=0; i<uls.length; i++) {
            uls[i].style.display = 'none';
        }

        // Append dropdown arrows, bind click event to submenu triggers, and control the submenu                               
        var spans = document.querySelectorAll('.cl-menu span');
        for(i=0; i<spans.length; i++) {
            var el = spans[i];
            el.addEventListener('click', function() {
                var ul = this.parentNode.querySelector('ul'),
                    arrow = this.querySelector('.arrow');
                
                ul.style.display = ul.style.display === 'none' ? 'block' : 'none';
                
                if (arrow.classList.contains('on')) {
                    arrow.classList.remove('on');
                } else {
                    arrow.classList.add('on');
                }
                
            });
            
            var arrow = document.createElement('div');
            arrow.className = 'arrow';
            el.appendChild(arrow);
        }
        
    }
    
})();