const http = require("http");

http.createServer((req, res) =>{
    console.log("nueva peticion!");
    console.log(req.url);

    switch(req.url){
        case "/hola":
            res.write("Hola, que tal");
            res.end();
            break;
        default:
            res.write("Error 404 no se que quieres");
            res.end();
            break;
    }

    //res.writeHead(201, { "Content-Type": "text/plain" });
    //respuesta a la peticion
    //res.write("hola ya se usar http node.js")

    //res.end();
}).listen(3000);