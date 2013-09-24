/**
 * @desc        Converts 0 and 1 (string or int) to boolean
 */


Handlebars.registerHelper('numToBool', function(num, options) {
    return (typeof num !== "undefined" && (num === "1" || num === 1));
});
