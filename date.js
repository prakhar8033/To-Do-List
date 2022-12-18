exports.day = function()
{
    const today = new Date();
        
        const options = {
            year : "numeric",
            weekday : "long",
            day : "numeric",
            month : "long",
        };

    return today.toLocaleDateString("en-US",options);
}

exports.date = function()
{
    const today = new Date();
        
        const options = {
            weekday : "long"
        };

    return today.toLocaleDateString("en-US",options);
}