const http = require("http")        //importa módulo http
const port = 3000                   //Define a porta 

const routes = {                        //Configurando as rotas da API
    '/': 'Pagina Inicial',
    '/create': 'Cadastro de usuario',
    '/list' : 'Listagem de agendamentos'
}

const server = http.createServer((req,res) => {
    res.writeHead(200, {'Content-Type':'text/plain'});
    res.end(routes[req.url])
})

server.listen(port, () => {
    console.log(`Servidor listening in http://localhost:${port}`)
} )