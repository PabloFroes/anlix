import { Router } from "express";
import { indexPacientesRoutes } from "./indexPaciente.routes";
import { pacienteRoutes } from "./paciente.routes";

const router = Router();

router.use("/paciente",pacienteRoutes)
router.use("/paciente/index",indexPacientesRoutes)

export {router}