import schedules from "../models/schedule.model.js"

class ScheduleController {
    static listSchedule = (req,res) => {                                        //List of Schedules.
        schedules.find((err, schedules) => {res.status(200).json(schedules)})
    }
}

export default ScheduleController