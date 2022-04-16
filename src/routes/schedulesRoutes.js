import express  from "express";
import ScheduleController from "../controllers/schedulesController.js";

const router = express.Router();

router
    .get("/schedules", ScheduleController.listSchedule)
    .get("/schedules/:id", ScheduleController.listScheduleById)
    .post("/schedules", ScheduleController.createSchedule)
    .put("/schedules/:id", ScheduleController.editSchedule)
    .delete("/schedules/:id", ScheduleController.excludeSchedule)


export default router;