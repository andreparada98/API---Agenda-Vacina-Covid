import app from "./src/app.js"

const port = process.env.port || 4000                   //Define a porta 

const routes = {
    '/schedules': 'Agendamento'
}

app.listen(port, () => {                                          // Chama o arquivo App.JS e escuta ele.
    console.log(`Servidor escutando em http://localhost:${port}`)   
});