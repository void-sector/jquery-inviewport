/**
 * JQuery Plugin isInView
 * 
 * @param {type} $
 * @returns {undefined}
 */
;(function($) {
     $.fn.loadCkeditor = function() {
        "use strict";

        // load the ckeditor if it is not dont yet
        if (this.hasClass('ckeditorLazyLoad')) {
            this.removeClass('ckeditorLazyLoad');
            CKEDITOR.replace(this.attr('id'));
        }
    };
    
    $.extend($.expr[':'], {
        "in-viewport": function(element, index, meta) {
            var rect = element.getBoundingClientRect();
            return (
                rect.top >= 0 && rect.top < (window.innerHeight || document.documentElement.clientHeight) ||
                rect.bottom >= 0 && rect.bottom < (window.innerHeight || document.documentElement.clientHeight)
            );
        }
    });
}(jQuery));




/**
 * Window Onload
 * 
 * @returns {undefined}
 */
;$(function() {
    "use strict";
    $(window).bind('scroll', function() {
        $(".ckeditorLazyLoad:in-viewport").loadCkeditor({
            config: null,
            width: null,
            height: null
        }); //css({"background-color":"#f00"});
    });
});