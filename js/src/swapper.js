(function(){
    
    'use strict';
    
    var classes = ['html','sc'];
    var onClass = 'on';
    
    window.addEventListener('load', initSwapper, false);
    
    function initSwapper() {
        var els, i;
        
        els = document.querySelectorAll('.reference li');

        for(i=0; i<els.length; i++) {
            els[i].addEventListener('click', handleClick(els[i]));
        }
    }
    
    function handleClick(el) {
        var other;
        
        if (el.classList.contains(onClass) === false) {
            other = el.classList.contains(classes[0]) ? classes[1] : classes[0];
            toggleReferenceBlock(el, other);
        }
    }
    
    function toggleReferenceBlock(el, other) {
        var parent, blocks, i;
        
        parent = el.parentNode.parentNode;
        blocks = parent.querySelectorAll('div.block');
        
        for(i=0; i<blocks.length; i++) {
            if (blocks[i].classList.contains(other)) {
                blocks[i].style.display = 'none';
            } else {
                blocks[i].style.display = 'block';
            }
        }
        
        el.classList.add(onClass);
        el.parentNode.querySelector('li.' + other).classList.remove(onClass);

    }
    
})();