import mongoose from "mongoose";

const scheduleSchema = new mongoose.Schema(
{    
    id: {type: String},
    name: {type: String, required: true},
    birthDate: {type: String, required: true},
    scheduleDate: {type: String, required: true},
}
)

const schedules = mongoose.model("Schedule", scheduleSchema);

export default schedules