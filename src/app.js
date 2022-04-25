import express from "express"; 
import  db from "./config/dbConnect.js"
import routes from "./routes/index.js"
import cors from 'cors'

db.on("error", console.log.bind(console, 'Erro de conexão')) // caso aconteça erro, dirá no terminal.
db.once("open", () => {console.log("conexão com o banco feita com sucesso")}); //abre conexão com o banco

const app = express();     
app.use(cors()) 
app.use(express.json());
routes(app);        //Call from routes.

export default app 