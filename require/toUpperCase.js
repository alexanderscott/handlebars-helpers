/**
 * @desc        Returns output of toUpperCase on a string
 *              Yes.  I know.  This can be done in css.
 */

define('helpers/toUpperCase', ['handlebars'], function(Handlebars) {

    function toUpperCase(context, options) {
        if(typeof context === 'undefined') return '';
        else return new Handlebars.SafeString(context.toUpperCase());
    }

    Handlebars.registerHelper('toUpperCase', toUpperCase);
    return toUpperCase;
});
