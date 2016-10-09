var http = require("http");
var allData = "";

http.get(process.argv[2], function (response){
    response.setEncoding('utf8');
    response.on("data", function (data){
        allData += data;
    });
    response.on("end", function (){
        console.log(allData.length);
        console.log(allData);
    });
});