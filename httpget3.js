var http = require("http");
var after = require("after");
var flag = 0;
var data1, data2, data3;
var next = after(3, printo);

function httpget(url, reqNr){
    var allData = "";
    
    http.get(url, function (response){
        response.setEncoding('utf8');
        
        response.on("data", function (data){
            allData += data;
        });
        
        response.on("end", function (){
            switch (reqNr){
                case 1: data1 = allData; break;
                case 2: data2 = allData; break;
                case 3: data3 = allData; break;
                default: break;
            }
            next();
        });
    });
}

    httpget(process.argv[2], 1);
    httpget(process.argv[3], 2);
    httpget(process.argv[4], 3);


function printo(){
    console.log(data1);
    console.log(data2);
    console.log(data3);
}