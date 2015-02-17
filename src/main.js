/**
 * Window Onload
 * 
 * @returns {undefined}
 */
;$(function() {
    "use strict";

    $(".ckeditorLazyLoad").inViewport(loadCKEditor);
    
    $(window).bind('scroll', function() {
        $(".ckeditorLazyLoad").inViewport(loadCKEditor);
    });
});




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