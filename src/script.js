/**
 * JQuery Plugin isInView
 * 
 * @param {type} $
 * @returns {undefined}
 */
;(function($) {
    $.fn.isInView = function(callback) {
        "use strict";
        
        this.each(function() {
            var rect = this.getBoundingClientRect();

            if (rect.top >= 0 && rect.top < (window.innerHeight || document.documentElement.clientHeight) ||
                rect.bottom >= 0 && rect.bottom < (window.innerHeight || document.documentElement.clientHeight)  ) {
                
                // call the callback!!
                callback(
                    $(this)
                );
            }
        });
 
        return $(this);            
    };
 
}(jQuery));





/**
 * callback function
 * 
 * @todo find out how to pass the jquery element without using a parameter
 * @param {type} el
 * @returns {undefined}
 */
var loadCKEditor = function(el) {
    "use strict";

    // load the ckeditor if it is not dont yet
    if (el.hasClass('ckeditorLazyLoad')) {
        el.removeClass('ckeditorLazyLoad');
        CKEDITOR.replace(el.attr('id'));
    }
};





/**
 * Window Onload
 * 
 * @returns {undefined}
 */
;$(function() {
    "use strict";

    $(".ckeditorLazyLoad").isInView(loadCKEditor);
    
    $(window).bind('scroll', function() {
        $(".ckeditorLazyLoad").isInView(loadCKEditor);
    });
});