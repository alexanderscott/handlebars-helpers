/**
 * @desc        Returns output of encodeURIComponent
 */

define('helpers/encodeURI', ['handlebars'], function(Handlebars) {

    function encodeURI(context, options) {
        return new Handlebars.SafeString(encodeURIComponent(context));
    }

    Handlebars.registerHelper('encodeURI', encodeURI);
    return encodeURI;
});


