/* ======= MENUS ======= */

(function(){
    
    'use strict';
    
    window.addEventListener('load', initCLMenus, false);
    
    function initCLMenus() {
        
        // Since we have JS, let's hide any nested menus
        document.querySelectorAll('.cl-menu ul').forEach(function(el){
            el.style.display = 'none';
        });

        // Append dropdown arrows, bind click event to submenu triggers, and control the submenu                               
        var spans = document.querySelectorAll('.cl-menu span');
        spans.forEach(function(el){
            el.addEventListener('click', function() {
                var ul = this.parentNode.querySelector('ul'),
                    arrow = this.querySelector('.arrow');
                
                ul.style.display = ul.style.display === 'none' ? 'block' : 'none';
                arrow.classList.contains('on') ? arrow.classList.remove('on') : arrow.classList.add('on');
            });
            
            var arrow = document.createElement('div');
            arrow.className = 'arrow';
            el.appendChild(arrow);
        });
        
    };
    
})();