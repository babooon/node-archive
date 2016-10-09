var http = require('http');
var url = require('url');

var server = http.createServer(function (req, res) {
    
    res.writeHead(200, { 'Content-Type': 'application/json' });    
    var reqObj = url.parse(req.url, true);
    //console.log(reqObj);
    
    if (reqObj.pathname == '/api/parsetime'){
        res.end( parsetime(reqObj.query.iso) );
    }
    
    if (reqObj.pathname == '/api/unixtime'){
        res.end( unixtime(reqObj.query.iso) );
    }
});

function parsetime(iso){
    var date = new Date(Date.parse(iso));

    return JSON.stringify({ 
        hour: date.getHours(),
        minute: date.getMinutes(),
        second: date.getSeconds()
    });
}

function unixtime(iso){
    return JSON.stringify({ 
        unixtime: Date.parse(iso)
    });
}

server.listen(process.argv[2]);