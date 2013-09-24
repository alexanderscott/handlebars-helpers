/**
 * @desc        Return first item of a list
 */

Handlebars.registerHelper('first', function(context, options) {
    var ret = '';
    if (context.length)
        ret = context[0];
    return new Handlebars.SafeString(ret);
});
