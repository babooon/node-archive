module.exports = function (rawpath, type, callback){
    
    var path = require("path");
    var fs = require("fs");
    
    fs.readdir(rawpath, filter);
    
    function filter(err, data){
        if (err != null){
            callback(err);
        }else{
            var dataOut = data.filter(function(val){
                if (path.extname(val) == "."+type)
                    return true;
                else
                    return false;
            });
            callback(err, dataOut);
        } 
    }
}
/*module.exports = {
    process: process
};*/