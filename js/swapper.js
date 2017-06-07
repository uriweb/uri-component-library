$(function(){
    
    var classes = [
            'html',
            'sc'
        ];
    
    var onclass = 'on';
    
    $('.reference li').click(function() {
        if ( !$(this).hasClass(onclass) ) {
            var other = $(this).hasClass(classes[0]) ? classes[1] : classes[0];
            toggleReferenceBlock($(this), other);
        }
    });
    
    function toggleReferenceBlock(clicked, other) {
        var parent = $(clicked).parent().parent();
        parent.find('div.block').each(function(){
            $(this).toggle();
        });
        clicked.toggleClass(onclass);
        clicked.parent().find('li.' + other).toggleClass(onclass);
    }
    
});