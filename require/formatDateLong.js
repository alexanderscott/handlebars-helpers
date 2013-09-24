/**
 * @desc        Takes in an unformatted date string and formats it to client standard
 */

define('helpers/formatDateLong', ['handlebars', 'moment'], function(Handlebars) {

    function formatDateLong(dateStr, options) {
        var result = moment( dateStr ).format( 'LLL' );
        return result;
    }

    Handlebars.registerHelper('formatDateLong', formatDateLong);
    return formatDateLong;
});
