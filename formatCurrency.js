/**
 * @desc        Takes in a float, string, or int  and formats to currency (ex/ 99.99)
 */


Handlebars.registerHelper('formatCurrency', function(num, options) {
    var result = '';
    //currencyChar = (typeof(currencyChar) == 'undefined' ? '' : currencyChar);

    num = num.toString().replace(/\$|\,/g, '');
    if (isNaN(num)) num = "0";
    sign = (num == (num = Math.abs(num)));
    num = Math.floor(num * 100 + 0.50000000001);
    cents = num % 100;
    num = Math.floor(num / 100).toString();
    if (cents < 10) cents = "0" + cents;
    for (var i = 0; i < Math.floor((num.length - (1 + i)) / 3); i++)
    num = num.substring(0, num.length - (4 * i + 3)) + ',' + num.substring(num.length - (4 * i + 3));

    // add dollar or other currency sign here
    result = (((sign) ? '' : '-') + num + '.' + cents);

    return result;
});
