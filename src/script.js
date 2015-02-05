;(function($) {
    $.fn.lazyLoad = function(callback) {
        "use strict";
        
        this.each(function() {
            var rect = this.getBoundingClientRect();

            if (rect.top >= 0 && rect.top < (window.innerHeight || document.documentElement.clientHeight) ||
                rect.bottom >= 0 && rect.bottom < (window.innerHeight || document.documentElement.clientHeight)  ) {
                
                // call the callback function!!
                callback(this);
            }
        });
 
        return this;            
    };
 
}(jQuery));





/**
 * callback function
 * 
 * @todo find out how to pass the jquery element without using a parameter
 * @param {type} element
 * @returns {undefined}
 */
var ckeditorLoader = function(element){
    
    var el = $(element);
    
    // kick in the ckeditor if it is not dont yet
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
$(function () {
    "use strict";
    
    
    $(".ckeditorLazyLoad").lazyLoad(ckeditorLoader);
    
    /**
     * @note i don't think it performs that well like this
     */
    $(window).bind('scroll', function() {
        $(".ckeditorLazyLoad").lazyLoad(ckeditorLoader);
    });
});