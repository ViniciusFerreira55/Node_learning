const http = require('http')

const port = 8080;

const server = http.createServer((req, res) =>{
    if (req.url === '/home'){
        res.writeHead(200, {"Contet-Type": "text/html"})
        res.end('<h1>home page</h1>')
    }

    if (req.url === '/users'){
        const users = [
            {
                nome: "Wilson Tuberculoso",
                email: "Wilson@gmail.com"
            },
            {
                nome: "Belle Belinha",
                email: "belle@gmail.com"
            }
        ];

        res.writeHead(200, { "Content-Type": "application/json" });
        res.end(JSON.stringify(users))
    }
});

server.listen(port, () => console.log(`Rodando na porta ${port}!`));