/**
 * @desc        Returns output of decodeURIComponent
 */


Handlebars.registerHelper('decodeURI', function(context, options) {
    return new Handlebars.SafeString(decodeURIComponent(context));
});
