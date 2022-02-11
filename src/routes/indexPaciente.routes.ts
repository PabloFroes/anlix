import { Router } from "express";
import IndiceCardiaco from "../database/models/indiceCardiaco";
import { searchIndexController } from "../database/useCases/searchIndex";

const indexPacientesRoutes = Router()

indexPacientesRoutes.get("/card/:cpf",async (request, response) => {
    searchIndexController.handle(request,response,IndiceCardiaco)
})


export {indexPacientesRoutes}