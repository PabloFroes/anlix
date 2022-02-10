import {Router} from "express"
import Paciente from "../database/models/paciente"

const pacienteRoutes = Router()

pacienteRoutes.get("/:cpf",async (request, response) => {
    const {cpf} = request.params
    try {
        const paciente = await Paciente.find({cpf})
        response.json(paciente)
    } catch (error) {
        
    }
})

export { pacienteRoutes }