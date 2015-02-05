;(function($) {
    $.fn.lazyLoad = function(callback) {
        "use strict";
        
//        var defaults = {
//            
//        };
        
        this.each(function(index, element) {
            var rect = element.getBoundingClientRect();

//            if (this.isInView(rect)) {
            if (rect.top >= 0 && rect.top < (window.innerHeight || document.documentElement.clientHeight) ||
                rect.bottom >= 0 && rect.bottom < (window.innerHeight || document.documentElement.clientHeight)  ) {
                callback1(this);
            }
        });
        
//        /**
//         * private method
//         *
//         * @todo find out how private methods work 
//         * @param {type} el
//         * @returns {undefined}
//         */
//        this.isInView = function(rect) {
//            return (
//                rect.top >= 0 && rect.top < (window.innerHeight || document.documentElement.clientHeight) ||
//                rect.bottom >= 0 && rect.bottom < (window.innerHeight || document.documentElement.clientHeight)                    
//            );
//        };
 
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
var callback = function(element){
    
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
        
    /**
     * @note i don't think it performs that well like this
     */
    $(document).scroll(function () {
        $(".ckeditorLazyLoad").lazyLoad(callback1);
    });        
});