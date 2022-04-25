import schedules from "../models/schedule.model.js"

class ScheduleController {
    static listSchedule = (req, res) => {                                        //List of Schedules.
        schedules.find((err, schedules) => { res.status(200).json(schedules) })
    }

    static listScheduleById = (req, res) => {
        const id = req.params.id;
        schedules.findById(id, (err, schedules) => {
            if (err) {
                res.status(400).send({ message: `${err.message} -ID do livro não localizado` })
            } else {
                res.status(200).send(schedules)
            }
        })
    }

    static createSchedule = (req, res) => {
        const scheduleDate = req.body.scheduleDate      // armazena scheduleDate
        const hourDate = req.body.hourDate              // armazena Hora do agendamento
        const timeElapsed = Date.now()             
        const today = new Date(timeElapsed)         // armazena data de hoje
        function formatDate(date, format){          // Formata Data
            const map = {
                mm: date.getMonth() + 1,
                dd: date.getDate(),
                aaaa: date.getFullYear()
            }
            return format.replace(/mm|dd|aaaa/gi, matched => map[matched])
        }

      //  console.log('Data de Hoje:', formatDate(today,'dd-mm-aaaa'))
      // console.log('ScheduleDate', scheduleDate)

        schedules.find({ 'hourDate': hourDate }, {}, (err, schedule) => {   //Procura no banco HourDate de acordo com a que foi passada acima.
            if (schedule.length > 1) {                              // se hourDate > 2 significa que horário está lotado
                res.status(500).send(`Agendamento para esta hora lotado, escolha outro horário`)
            } else {
                schedules.find({ 'scheduleDate': scheduleDate }, {}, (err, schedule) => {           //Procura no banco ScheduleDate
                    if (schedule.length > 19 && scheduleDate >= formatDate(today,'dd-mm-aaaa')) {       //Verifica as condições
                        res.status(500).send(`Agendamento para está data está lotado`)
                    } else {
                        let schedule = new schedules(req.body)
                        schedule.save(() => {
                            res.status(201).send(schedule.toJSON())
                        })
                    }
                })

            }

        }
        );


    }


    static editSchedule = (req, res) => {
        const id = req.params.id;
        schedules.findByIdAndUpdate(id, { $set: req.body }, (err) => {
            if (!err) {
                res.status(200).send({ message: "Agendamento atualizado com sucesso" })
            } else {
                res.status(500).send({ message: err.message })
            }
        })
    }

    static excludeSchedule = (req, res) => {
        const id = req.params.id;
        schedules.findByIdAndDelete(id, (err) => {
            if (!err) {
                res.status(200).send({ message: 'Agendamento removido com sucesso' })
            } else {
                res.status(500).send({ message: err.message })
            }
        })
    }

    static listScheduleByName = (req, res) => {
        const name = req.query.name
        schedules.find({ 'name': name }, {}, (err, schedules) => {
            res.status(200).send(schedules)
        });
    }
}

export default ScheduleController