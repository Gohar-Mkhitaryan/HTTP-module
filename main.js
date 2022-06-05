import {createServer} from "http";
import fs from "fs";
import path from "path";
 const server = createServer((req, res) =>{
    if(req.url ==="/") {
        res.writeHead(200, {'Content-Type': 'text/html'});
        fs.createReadStream(path.resolve("public/validation.html")).pipe(res);
    } else  if(req.url ==="/validation.css") {
        res.writeHead(200, {'Content-Type': 'text/css'});
        fs.createReadStream(path.resolve("public/validation.css")).pipe(res);
    } else if(req.url === "/hello"){
        res.writeHead(200, {'Content-Type': 'text/plain'});
        res.end("Hello world!!!");
    } else if(req.url === "/bye"){
        res.writeHead(200, {'Content-Type': 'application/json'});
        res.end(JSON.stringify({
            name:"Ann"
        })); 
    } else {
        res.writeHead(404, {'Content-Type': 'text/plain'});
        res.end("Data not found");
    }
 });
 server.listen(3001);