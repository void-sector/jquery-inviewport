;(function($) {
    $.fn.isInView = function(callback) {
        "use strict";
        
        this.each(function() {
            var rect = this.getBoundingClientRect();

            if (rect.top >= 0 && rect.top < (window.innerHeight || document.documentElement.clientHeight) ||
                rect.bottom >= 0 && rect.bottom < (window.innerHeight || document.documentElement.clientHeight)  ) {
                
                // call the callback function!!
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
var loadCKEditor = function(el){
    "use strict";

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
;$(function () {
    "use strict";
    
    $(".ckeditorLazyLoad").isInView(loadCKEditor);
    
    $(window).bind('scroll', function() {
        $(".ckeditorLazyLoad").isInView(loadCKEditor);
    });
});













///**
// * CKEditory object
// * @type Object
// *
// * Hmm, i don't know about this..
// * it does make the window.onload method small..
// */
//var ckeditorLoader = {
//    
//    /**
//     * ClassName it listens to
//     * @type String
//     */
//    classname : 'ckeditorLazyLoad',
//    
//    
//    /**
//     * attach to 
//     *  
//     * @param {type} event
//     * @returns {undefined}
//     */
//    attachEvent : function(event) {
//        
//        var className = '.' + ckeditorLoader.classname;
//        
//        $(window).on(event, function() {
//            $(className).isInView(
//                ckeditorLoader.activate
//            );
//        });        
//    },
//    
//    
//    /**
//     * callback method
//     * 
//     * @todo load custom config
//     * @param {JQuery Object} element
//     * @returns {void}
//     */
//    activate : function(element) {
//        if (element.hasClass(ckeditorLoader.classname)) {
//            element.removeClass(ckeditorLoader.classname);
//            CKEDITOR.replace(element.attr('id'));
//        }
//    }
//};
//
//
//
//
//
//
//
//
///**
// * Window Onload
// * 
// * @returns {undefined}
// */
//$(function () {
//    "use strict";
//    
//    ckeditorLoader.attachEvent('load');
//    ckeditorLoader.attachEvent('scroll');
//});