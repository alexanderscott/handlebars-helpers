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
