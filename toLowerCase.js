/**
 * @desc        Returns output of toLowerCase on a string
 *              Yes.  I know.  This can be done in css.
 */

Handlebars.registerHelper('toLowerCase', function(context, options) {
    if(typeof context === 'undefined') return '';
    else return new Handlebars.SafeString(context.toLowerCase());
});
