(function(){
    
    window.addEventListener('load', init, false);
    
    function init() {
        
        var i, els = document.querySelectorAll('.perspective');
    
        var input = document.getElementById('perspective-factor')
            factor = 8,
            input.value = factor;
        
        for(i=0; i<els.length; i++) {
            
            var el = els[i];
            
            el.style.position = 'relative';
            el.style.transition = 'none';
            
            var initial = el.style.boxShadow;
            
            el.addEventListener('mousemove', function(e) {
            
                // Get mouse position relative to top left corner of element
                var elPos = this.getBoundingClientRect(),
                    mPos  = { X:e.clientX-elPos.left, Y:e.clientY-elPos.top };

                // Get mouse position relative to center of element
                var w = this.offsetWidth,
                    h = this.offsetHeight,
                    x = mPos.X < w / 2 ? 0 - ( w / 2 - mPos.X ) : mPos.X - w / 2,
                    y = mPos.Y < h / 2 ? 0 - ( h / 2 - mPos.Y ) : mPos.Y - h / 2;
                
                
                /* Set the radius factor of motion as a percent.
                 * The radius of motion is calculated as a proportion of the average
                 * of the width and height of the element.
                 */
                factor = input.value; 
                
                
                var r = (w + h) / 2 * (factor / 100);
                x = -x / ( w / 2 ) * r;
                y = -y / (h / 2 ) * r;
                                    
                this.style.boxShadow = x + 'px ' + y + 'px ' + r + 'px rgba(0,0,0,.2)';
                this.style.top = 0.25 * (-y) + 'px';
                this.style.left = 0.25 * (-x) + 'px';

            });
            
            el.addEventListener('mouseout', function() {
                this.style.boxShadow = initial;
                this.style.top = this.style.left = 0;
            });
            
        }
        
        
        
    }
    
})();