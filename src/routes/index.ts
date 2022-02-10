import { Router } from "express";
import { pacienteRoutes } from "./paciente.routes";

const router = Router();

router.use("/paciente",pacienteRoutes)

export {router}