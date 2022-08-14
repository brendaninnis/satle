
/**
 * Shuffle an array
 */
function shuffle(array) {
    let currentIndex = array.length,  randomIndex;

    // While there remain elements to shuffle.
    while (currentIndex != 0) {

        // Pick a remaining element.
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;

        // And swap it with the current element.
        [array[currentIndex], array[randomIndex]] = [
            array[randomIndex], array[currentIndex]];
    }

    return array;
}

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
