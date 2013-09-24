/**
 * @desc        Returns parseInt of division of two nums
 */

define('helpers/division', ['handlebars'], function(Handlebars) {

    function division(context, options) {
        console.log(context, options);
        var unformatted = (parseInt(context[0], 10) / parseInt(context[1], 10));
        var formatted = unformatted.toFixed(2);
        return new Handlebars.SafeString(formatted);
    }

    Handlebars.registerHelper('division', division);
    return division;
});

