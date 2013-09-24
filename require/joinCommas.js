/**
 * @desc        Mimics the #each function, except joins with commas
 */

define('helpers/joinCommas', ['handlebars'], function(Handlebars) {

    function joinCommas(context, options) {
        var ret = "";

        for(var i=0, j=context.length; i<j; i++) {
            ret = ret + options.fn(context[i]);
            if (i<j-1) {
                ret = ret + ", ";
            }
        }
        return new Handlebars.SafeString(ret);
    }

    Handlebars.registerHelper('joinCommas', joinCommas);
    return joinCommas;
});


