/**
 * @desc        Returns output of toUpperCase on a string
 *              Yes.  I know.  This can be done in css.
 */

Handlebars.registerHelper('toUpperCase', function(context, options) {
    if(typeof context === 'undefined') return '';
    else return new Handlebars.SafeString(context.toUpperCase());
});
