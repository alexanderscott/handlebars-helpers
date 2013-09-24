/**
 * @desc        A lib of all handlebars helpers included in here
 */


(function(Handlebars, moment){

    /**
     * @desc        Returns output of decodeURIComponent
     */
    Handlebars.registerHelper('decodeURI', function(context, options) {
        return new Handlebars.SafeString(decodeURIComponent(context));
    });


    /**
     * @desc        Returns parseInt of division of two nums
     */
    Handlebars.registerHelper('division', function(context, options) {
        var unformatted = (parseInt(context[0], 10) / parseInt(context[1], 10));
        var formatted = unformatted.toFixed(2);
        return new Handlebars.SafeString(formatted);
    });



    /**
     * @desc        each loop that also returns item index in the loop
     */
    Handlebars.registerHelper('eachWithIndex', function(array, fn) {
        var buffer = "";
        for (var i = 0, j = array.length; i < j; i++) {
            var item = array[i];

            // stick an index property onto the item, starting with 1, may make configurable later
            item.index = i+1;

            // show the inside of the block
            buffer += fn(item);
        }

        // return the finished buffer
        return buffer;
    });


    /**
     * @desc        Iterates over an object, returning the key and value.
     */
    Handlebars.registerHelper('eachWithKey', function eachWithKey(object, options) {
        var     data;
        var     key;
        var     buffer="";
        
        for (key in object) {
            data = Handlebars.createFrame(options.data || {});
            data.key    = key;
            data.value  = object[key];
            buffer  += options.fn(object[key], {data: data});
        }
        
        return buffer;
    });



    /**
     * @desc        Returns output of encodeURIComponent
     */
    Handlebars.registerHelper('encodeURI', function(context, options) {
        return new Handlebars.SafeString(encodeURIComponent(context));
    });



    /**
     * @desc        Return first item of a list
     */

    Handlebars.registerHelper('first', function(context, options) {
        var ret = '';
        if (context.length)
            ret = context[0];
        return new Handlebars.SafeString(ret);
    });



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



    /**
     * @desc        Takes in an unformatted date string and formats it to client standard
     */

    Handlebars.registerHelper('formatDateLong', function(dateStr, options) {
        var result = moment( dateStr ).format( 'LLL' );
        return result;
    });



    /**
     * @desc        Takes in an unformatted date string and formats it
     */

    Handlebars.registerHelper('formatDateShort', function(dateStr, options) {
        var result = moment( dateStr ).format( 'MMM Do' );
        return result;
        //return new Handlebars.SafeString( result );
    });


    /**
     * @desc        Mimics the #each function, except joins with commas
     */
    Handlebars.registerHelper('joinCommas', function(context, options) {
        var ret = "";

        for(var i=0, j=context.length; i<j; i++) {
            ret = ret + options.fn(context[i]);
            if (i<j-1) {
                ret = ret + ", ";
            }
        }
        return new Handlebars.SafeString(ret);
    });



    /**
     * @desc        Return last item of a list
     */
    Handlebars.registerHelper('last', function (context, options) {
        var ret = '';
        if (context.length)
            ret = context[ context.length -1 ];
        return new Handlebars.SafeString(ret);
    });


    /**
     * @desc        Converts 0 and 1 (string or int) to boolean
     */
    Handlebars.registerHelper('numToBool', function(num, options) {
        return (typeof num !== "undefined" && (num === "1" || num === 1));
    });


    /**
     * @desc        Takes in two numbers and returns a string percentage
     */

    Handlebars.registerHelper('percentage', function percentage(num1, num2, options) {
        //currencyChar = (typeof(currencyChar) == 'undefined' ? '' : currencyChar);
        
        var intResult = Math.round( (parseInt(num1, 10) / parseInt(num2, 10)) * 100 );
        var result = intResult.toString() + '%';        

        return result;
    });





    /**
     * @desc        Takes in a date in the past and returns days, hours, or minutes string from current time
     */

    Handlebars.registerHelper('timeAgo', function(date, options) {
        var result = '';
        var one_day=1000*60*60*24;

        var today = new Date();

        // check if date param is a string in disguise
        if(date.substring) date = new Date(date.replace(/-/g, "/"));

        if(date instanceof Date){
            var millDiff = today - date;

            if(millDiff > (30*one_day)){
                //TODO format the date string to something less fugly
                result = date;
            } else {
                // check to return days
                if(millDiff > (1.5*one_day)){
                    result = Math.round(millDiff/one_day).toString() + ' days ago';
                } else if(millDiff > one_day){
                    result = '1 day ago';
                } else {

                    //check to return hours
                    var one_hour = 1000*60*60;
                    if(millDiff > (1.5*one_hour)){
                        result = Math.round(millDiff/one_hour).toString() + ' hours ago';
                    } else if(millDiff > one_hour){
                        result = '1 hour ago';
                    } else {

                        //check to return minutes
                        var one_minute = 1000*60;
                        if(millDiff > (1.5*one_minute)){
                            result = Math.round(millDiff/one_minute).toString() + ' minutes ago';
                        } else {
                            result = 'less than a minute ago';
                        }
                    }
                }
            }
        }
        else {
            //console.log('not a date');
        }

        return result;
    });



    /**
     * @desc        Returns output of toUpperCase on a string
     *              Yes.  I know.  This can be done in css.
     */

    Handlebars.registerHelper('toUpperCase', function(context, options) {
        if(typeof context === 'undefined') return '';
        else return new Handlebars.SafeString(context.toUpperCase());
    });



    /**
     * @desc        Returns output of toUpperCase on a string
     *              Yes.  I know.  This can be done in css.
     */
    Handlebars.registerHelper('toUpperCase', function(context, options) {
        if(typeof context === 'undefined') return '';
        else return new Handlebars.SafeString(context.toUpperCase());
    });

})(Handlebars, moment);
