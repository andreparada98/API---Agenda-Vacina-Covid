import express  from "express";
import schedules from "./schedulesRoutes.js"

const routes = (app) => {
    app.route('/').get((req,res) => {
        res.status(200).send({title:"HomePage"})
    })

    app.use(
        express.json(),
        schedules
    )
}

export default routes