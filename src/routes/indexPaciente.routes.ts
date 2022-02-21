import { Router } from "express";
import IndiceCardiaco from "../database/models/indiceCardiaco";
import IndicePulmonar from "../database/models/indicePulmonar";
import { searchIndexController } from "../database/useCases/searchIndex";

const indexPacientesRoutes = Router()

indexPacientesRoutes.get("/:cpf",async (request, response) => {
    searchIndexController.handle(request,response,"ALL")
})
indexPacientesRoutes.get("/name/:name",async (request, response) => {
    searchIndexController.handle(request,response,"ALLNAME")
})

indexPacientesRoutes.get("/card/:cpf",async (request, response) => {
    searchIndexController.handle(request,response,"CPF", IndiceCardiaco)
})

indexPacientesRoutes.get("/card/date/:date",async (request, response) => {
    searchIndexController.handle(request,response, "DATE", IndiceCardiaco)
})

indexPacientesRoutes.get("/pulm/:cpf",async (request, response) => {
    searchIndexController.handle(request,response,"CPF", IndicePulmonar)
})

indexPacientesRoutes.get("/pulm/date/:date",async (request, response) => {
    searchIndexController.handle(request,response, "DATE", IndicePulmonar)
})


export {indexPacientesRoutes}