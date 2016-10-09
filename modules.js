function printo(err, arr){
    if (err == null){
        arr.forEach(function(val){
            console.log(val);
        });
    }else
        console.log(err)
}

var mymodule = require("./mymodule.js");
mymodule(process.argv[2], process.argv[3], printo);