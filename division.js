/**
 * @desc        Returns parseInt of division of two nums
 */



Handlebars.registerHelper('division', function(context, options) {
    var unformatted = (parseInt(context[0], 10) / parseInt(context[1], 10));
    var formatted = unformatted.toFixed(2);
    return new Handlebars.SafeString(formatted);
});
