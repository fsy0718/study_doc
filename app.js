var http = require('http');
var fs = require('fs');
var url = require('url');

http.createServer(function(request,response){
  var requestUrl = url.parse(request.url);
  var pathname = requestUrl.pathname;
  var ext = pathname.match(/(\.[^.]+|)$/)[0];
  var isExampleSource = /\/example/.test(pathname);
  switch(ext){
    case '.css':
    case '.js':
      var _file = isExampleSource ? './' + request.url : './dest/' + request.url;
      fs.readFile(_file,'utf-8',function(err,data){
        if(err){
          return false;
          throw err;

        }
        response.writeHead(200,{
          "Content-Type":{
             ".css" : "text/css",
             ".js" : "application/javascript",
          }[ext]
        });
        response.write(data);
        response.end();
      });
      break;
    case '.ico':
      response.writeHead('404',{'Content-Type':'text/plain'});
      response.end('Not Found');
      break;
    case '.png':
    case '.jpg':
      fs.readFile('./' +request.url,function(err,data){
        if(err){
          throw err;
        }
        response.writeHead(200,{
          'Content-Type':'image/*'
        });
        response.write(data);
        response.end();
      });
      break;
    case '.json':
      fs.readFile('./' + request.url,function(err,data){
        if(err){
          throw err;
        }
        response.writeHead('200');
        response.end(data);
      })
      break;

    default:
      var _file = isExampleSource ? './' + request.url : './dest/' + (pathname !== '/' ? pathname : '/index.html');
      function readFile(file){
          fs.readFile(file,'utf-8',function(err,data){
            if(err){
              if(file === './dest/index.html'){
                response.writeHead('404',{'Content-Type':'text/plain'});
                response.end('404 Not Found');
                return;
              }
              file = './dest/index.html';
              return readFile(file);
            }
            response.writeHead(200,{'Content-Type':'text/html'});
            response.write(data);
            response.end();
          })
      }
      readFile(_file);

  }

}).listen(3000);