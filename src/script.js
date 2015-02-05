;(function($) {
    $.fn.lazyLoad = function(callback1, callback2) {
        "use strict";
        
//        var defaults = {
//            
//        };
        
        this.each(function(index, element) {
            var rect = element.getBoundingClientRect();

            //if (this.isInView(rect)) {
            if (rect.top >= 0 && rect.top < (window.innerHeight || document.documentElement.clientHeight) ||
                rect.bottom >= 0 && rect.bottom < (window.innerHeight || document.documentElement.clientHeight)  ) {
                callback1(this);
            }
            else {
                callback2(this);
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
 * some callback functions
 * 
 * @todo find out how to pass the jquery element without using a parameter
 * @param {type} element
 * @returns {undefined}
 */
var callback1 = function(element){
    
    var el = $(element);
    
    if (el.hasClass('ckeditorLazyLoad')) {
        el.removeClass('ckeditorLazyLoad');
        CKEDITOR.replace(el.attr('id'));
    }
};
var callback2 = function(el) {
    $(el).removeClass('inViewPort');
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
        $(".ckeditorLazyLoad").lazyLoad(callback1, callback2);
    });        
});