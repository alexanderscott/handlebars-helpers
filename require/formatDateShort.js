/**
 * @desc        Takes in an unformatted date string and formats it
 */

define('helpers/formatDateShort', ['handlebars', 'moment'], function(Handlebars) {

    function formatDateShort(dateStr, options) {
        var result = moment( dateStr ).format( 'MMM Do' );
        return result;
        //return new Handlebars.SafeString( result );
    }

    Handlebars.registerHelper('formatDateShort', formatDateShort);
    return formatDateShort;
});
