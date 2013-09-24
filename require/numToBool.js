/**
 * @desc        Converts 0 and 1 (string or int) to boolean
 */

define('helpers/numToBool', ['handlebars'], function(Handlebars) {

    function numToBool(num, options) {
        return (typeof num !== "undefined" && (num === "1" || num === 1));
    }

    Handlebars.registerHelper('numToBool', numToBool);
    return numToBool;
});

