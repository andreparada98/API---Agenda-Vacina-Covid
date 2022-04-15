import express from "express"; 
import  db from "./config/dbConnect.js"
import schedules from "./models/schedule.model.js"
import routes from "./routes/index.js"

db.on("error", console.log.bind(console, 'Erro de conexão')) // caso aconteça erro, dirá no terminal.
db.once("open", () => {
    console.log("conexão com o banco feita com sucesso")
});        //abre conexão com o banco

const app = express();

app.use(express.json());

routes(app);        //Call from routes.

app.get('/schedule/:id', (req,res) => {         //Search a specific schedule passing ID
    let index = searchSchedule(req.params.id);
    res.json(users[index]);
})

app.post('/schedule', (req,res) => {            // Create a new Schedule
    schedules.push(req.body);
    res.status(201).send('Agendadado com sucesso')
});

app.put('/schedule/:id', (req,res) => {         // Edit a Schedule passing ID
    let index = searchSchedule(req.params.id);
    users[index].name = req.body.name;
    res.json(users)
})

app.delete('/schedule/:id', (req,res) => {          // Delete a Schedule
    let index = searchSchedule(req.params.id);
    users.splice(index,1);
    res.send(`Agendamento de ${req.params.name} foi removido com sucesso`);
})

function searchSchedule(id){                // Function do search a Schedule
    return users.findIndex(user => user.id == id)
}

export default app 