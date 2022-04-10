import express from "express"; 

const app = express();

const users = [
    {id:1, "user":"Andre Parada"},
    {id:2, "user":"Victor Coan"},
    {id:3, "user":"Rodrigo Medeiros"}
];

app.get('/', (req,res) => {                      // define a resposta das rotas.
    res.status(200).send('Curso de Node');
})

app.get('/list', (req,res) => {
    res.status(200).json(users);
});

export default app 