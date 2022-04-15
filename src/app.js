import express from "express"; 
//import { moment } from "moment";

//const moment = require('moment')
const app = express();

app.use(express.json())

const users = [
    {id:1, "name":"Andre Parada", "birthDate": "25-08-1998", "scheduleDate":"13-04-2022 13:00:00" },
    {id:2, "name":"Victor Coan", "birthDate":"01-01-2001", "scheduleDate":"13-04-2022 13:00:00"},
    {id:3, "name":"Rodrigo Medeiros" , "birthDate": "22-07-1998", "scheduleDate":"13-04-2022 13:00:00"}
];

app.get('/', (req,res) => {                      // Route to HomePage
    res.status(200).send('Homepage');
});

app.get('/schedule', (req,res) => {             // List Schedules
    res.status(200).json(users);
});

app.get('/schedule/:id', (req,res) => {         //Search a specific schedule passing ID
    let index = searchSchedule(req.params.id);
    res.json(users[index]);
})

app.post('/schedule', (req,res) => {            // Create a new Schedule
    users.push(req.body);
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