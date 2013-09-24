/**
 * @desc        Returns output of toLowerCase on a string
 *              Yes.  I know.  This can be done in css.
 */

define('helpers/toLowerCase', ['handlebars'], function(Handlebars) {

    function toLowerCase(context, options) {
        if(typeof context === 'undefined') return '';
        else return new Handlebars.SafeString(context.toLowerCase());
    }

    Handlebars.registerHelper('toLowerCase', toLowerCase);
    return toLowerCase;
});

