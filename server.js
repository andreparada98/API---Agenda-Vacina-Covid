import app from "./src/app.js"

const port = process.env.port || 3000                   //Define a porta 

const routes = {                        //Configurando as rotas da API
    '/': 'Pagina Inicial',
    '/schedule': 'Cadastro de agendamento',
    '/list' : 'Listagem de agendamentos'
}

app.listen(port, () => {                                          // Chama o arquivo App.JS e escuta ele.
    console.log(`Servidor escutando em http://localhost:${port}`)   
});