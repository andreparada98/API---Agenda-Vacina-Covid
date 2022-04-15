import app from "./src/app.js"

const port = process.env.port || 3000                   //Define a porta 

const routes = {
    '/': 'HomePage',
    '/schedules': 'Agendamento'
}

app.listen(port, () => {                                          // Chama o arquivo App.JS e escuta ele.
    console.log(`Servidor escutando em http://localhost:${port}`)   
});