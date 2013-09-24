/**
 * @desc        Return last item of a list
 */


Handlebars.registerHelper('last', function (context, options) {
    var ret = '';
    if (context.length)
        ret = context[ context.length -1 ];
    return new Handlebars.SafeString(ret);
});
