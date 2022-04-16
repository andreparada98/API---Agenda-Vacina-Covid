import schedules from "../models/schedule.model.js"

class ScheduleController {
    static listSchedule = (req,res) => {                                        //List of Schedules.
        schedules.find((err, schedules) => {res.status(200).json(schedules)})
    }

    static listScheduleById = (req,res) => {
        const id = req.params.id;

        schedules.findById(id,(err, schedules) => {
            if(err){
                res.status(400).send({message: `${err.message} -ID do livro não localizado`})
            } else {
                res.status(200).send(schedules)
            }
        } )
    }

    static createSchedule = (req,res) => {
        let schedule = new schedules(req.body);
        
        schedule.save((err) => {
            if(err){
                res.status(500).send({message: `${err.message} - Failed to create schedule`})
            } else {
                res.status(201).send(schedule.toJSON())
            }
        })
    }

    static editSchedule = (req,res) => {
        const id = req.params.id;

        schedules.findByIdAndUpdate(id, {$set: req.body}, (err) => {
            if(!err){
                res.status(200).send({message: "Agendamento atualizado com sucesso"})
            } else {
                res.status(500).send({message: err.message})
            }
        })
    }
}

export default ScheduleController