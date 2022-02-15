import { Router } from "express";
import IndiceCardiaco from "../database/models/indiceCardiaco";
import { searchIndexController } from "../database/useCases/searchIndex";

const indexPacientesRoutes = Router()

indexPacientesRoutes.get("/all/:cpf",async (request, response) => {
    searchIndexController.handle(request,response,"ALL")
})

indexPacientesRoutes.get("/card/:cpf",async (request, response) => {
    searchIndexController.handle(request,response,"CPF", IndiceCardiaco)
})

indexPacientesRoutes.get("/card/date/:date",async (request, response) => {
    searchIndexController.handle(request,response, "DATE", IndiceCardiaco)
})


export {indexPacientesRoutes}