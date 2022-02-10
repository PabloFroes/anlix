import {Request, Response, Router} from "express"
import Paciente from "../database/models/paciente"
import { searchPacienteController } from "../database/useCases/searchPaciente"

const pacienteRoutes = Router()

pacienteRoutes.get("/cpf/:cpf",async (request : Request, response: Response) => {
    return await searchPacienteController.handle(request,response, "CPF")
})

pacienteRoutes.get("/name",async (request, response) => {
    return await searchPacienteController.handle(request,response, "NAME")
})

export { pacienteRoutes }