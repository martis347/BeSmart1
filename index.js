var connect = require('connect');
var serveStatic = require('serve-static');

var port = process.env.PORT || 1337;

connect().use(serveStatic('./dist')).listen(port, function(){
    console.log('Server running on ' + port + '...');
});