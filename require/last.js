/**
 * @desc        Return last item of a list
 */

define('helpers/last', ['handlebars'], function(Handlebars) {

    function last(context, options) {
        var ret = '';
        if (context.length)
            ret = context[context.length -1];
        return new Handlebars.SafeString(ret);
    }

    Handlebars.registerHelper('last', last);
    return last;
});


