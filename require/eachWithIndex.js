/**
 * @desc        each loop that also returns item index in the loop
 */

define('helpers/eachWithIndex', ['handlebars'], function(Handlebars) {
    function eachWithIndex(array, fn) {
        var buffer = "";
        for (var i = 0, j = array.length; i < j; i++) {
            var item = array[i];

            // stick an index property onto the item, starting with 1, may make configurable later
            item.index = i+1;

            // show the inside of the block
            buffer += fn(item);
        }

        // return the finished buffer
        return buffer;
    }

    Handlebars.registerHelper('eachWithIndex', eachWithIndex);

    // Return the helper function.
    return eachWithIndex;

});
