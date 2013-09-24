/**
 * @desc        Return first item of a list
 */

define('helpers/first', ['handlebars'], function(Handlebars) {

    function first(context, options) {
        var ret = '';
        if (context.length)
            ret = context[0];
        return new Handlebars.SafeString(ret);
    }

    Handlebars.registerHelper('first', first);
    return first;
});


