/**
 * @desc        Returns output of decodeURIComponent
 */

define('helpers/decodeURI', ['handlebars'], function(Handlebars) {

    function decodeURI(context, options) {
        return new Handlebars.SafeString(decodeURIComponent(context));
    }

    Handlebars.registerHelper('decodeURI', decodeURI);
    return decodeURI;
});
