import { Router } from "express";
import IndiceCardiaco from "../database/models/indiceCardiaco";
import { searchIndexController } from "../database/useCases/searchIndex";

const indexPacientesRoutes = Router()

indexPacientesRoutes.get("/card/:cpf",async (request, response) => {
    searchIndexController.handle(request,response,IndiceCardiaco,"cpf")
})
indexPacientesRoutes.get("/card/date/:date",async (request, response) => {
    searchIndexController.handle(request,response,IndiceCardiaco,"date")
})


export {indexPacientesRoutes}