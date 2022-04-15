import mongoose from "mongoose";

mongoose.connect("mongodb+srv://andre:123@agendamentocovid19.edb2x.mongodb.net/AgendamentoCovid19");

let db = mongoose.connection;

export default db;