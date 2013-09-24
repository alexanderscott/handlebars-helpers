/**
 * @desc        Takes in an unformatted date string and formats it to client standard
 */

Handlebars.registerHelper('formatDateLong', function(dateStr, options) {
    var result = moment( dateStr ).format( 'LLL' );
    return result;
});
