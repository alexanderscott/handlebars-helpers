/**
 * @desc        Iterates over an object, returning the key and value.
 */

define('helpers/eachWithKey', ['handlebars'], function(Handlebars) {
    function eachWithKey(object, options) {
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
    }

    Handlebars.registerHelper('eachWithKey', eachWithKey);

    return eachWithKey;
});

