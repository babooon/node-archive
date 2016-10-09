var net = require('net');  
var server = net.createServer(function listener(socket) {
       socket.write(getDate());
       socket.end();
});

server.listen(process.argv[2]);

function getDate(){
    
    var date = new Date();
    return zerofill(date.getFullYear()) + "-" + zerofill(date.getMonth() + 1) + "-" + zerofill(date.getDate()) + " " + zerofill(date.getHours()) + ":" + zerofill(date.getMinutes()) + "\n";
}

function zerofill(val){
        if (val < 10)
            val = "0" + val;
        return val;
    }