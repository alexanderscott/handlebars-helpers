/**
 * @desc        Takes in two numbers and returns a string percentage
 */

define('helpers/percentage', ['handlebars'], function(Handlebars) {

    function percentage(num1, num2, options) {
        //currencyChar = (typeof(currencyChar) == 'undefined' ? '' : currencyChar);
        
        var intResult = Math.round( (parseInt(num1, 10) / parseInt(num2, 10)) * 100 );
        var result = intResult.toString() + '%';        

        return result;
    }

    Handlebars.registerHelper('percentage', percentage);
    return percentage;
});


