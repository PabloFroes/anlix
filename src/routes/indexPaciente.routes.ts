import { Router } from "express";
import IndiceCardiaco from "../database/models/indiceCardiaco";

const indexPacientesRoutes = Router()

indexPacientesRoutes.get("/card/:cpf",async (request, response) => {
    const {cpf} = request.params

    try {
        const paciente = await IndiceCardiaco.find({cpf})
        response.json(paciente)
    } catch (error) {
        
    }
})


export {indexPacientesRoutes}