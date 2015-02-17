/**
 * JQuery Plugin isInView
 * 
 * @param {type} $
 * @returns {undefined}
 */
;(function($) {
    $.fn.inViewport = function(callable) {
        "use strict";
        
        this.each(function() {
            var rect = this.getBoundingClientRect();

            if (rect.top >= 0 && rect.top < (window.innerHeight || document.documentElement.clientHeight) ||
                rect.bottom >= 0 && rect.bottom < (window.innerHeight || document.documentElement.clientHeight)) {
                
                // call the callback!!
                callable(
                    $(this)
                );
            }
        });
 
        return $(this);            
    };
}(jQuery));