/**
 * @desc        Takes in an unformatted date string and formats it
 */

Handlebars.registerHelper('formatDateShort', function(dateStr, options) {
    var result = moment( dateStr ).format( 'MMM Do' );
    return result;
    //return new Handlebars.SafeString( result );
});
