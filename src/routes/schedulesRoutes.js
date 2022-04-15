import express  from "express";
import ScheduleController from "../controllers/schedulesController.js";

const router = express.Router();

router
    .get("/schedules", ScheduleController.listSchedule)


export default router;