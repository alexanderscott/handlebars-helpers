/**
 * @desc        Returns output of encodeURIComponent
 */



Handlebars.registerHelper('encodeURI', function(context, options) {
    return new Handlebars.SafeString(encodeURIComponent(context));
});
