$(document).ready(function() {
    /**
     * Get the width of an element not present in the DOM.
     */
    $.fn.getHiddenWidth = function () {
        // save a reference to a cloned element that can be measured
        let $hiddenElement = $(this).clone().appendTo('body');
        // calculate the width of the clone
        let width = $hiddenElement.width();
        // remove the clone from the DOM
        $hiddenElement.remove();
        return width;
    };
});
