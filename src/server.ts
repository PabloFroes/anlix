import express  from "express";

import "./database/config/database"
import { importPacienteController } from "./database/useCases/importPaciente";
import { conveterFileController } from "./database/useCases/converterFile";
import { importCardiacoController } from "./database/useCases/importIndiceCardiaco";
import Paciente from "./database/models/paciente";
import IndiceCardiaco from "./database/models/indiceCardiaco";

const app = express()

app.get("/refresh/p",async (request, response) => {
    importPacienteController.handle()
    response.json("Refresh Pacient");
})
app.get("/refresh/c",async (request, response) => {
    importCardiacoController.handle()
    response.json("Refresh Heart");
})

app.get("/paciente/:cpf",async (request, response) => {
    const {cpf} = request.params
    try {
        const paciente = await Paciente.find({cpf})
        response.json(paciente)
    } catch (error) {
        
    }
})

app.get("/indexcard/:cpf",async (request, response) => {
    const {cpf} = request.params
    try {
        const paciente = await IndiceCardiaco.find({cpf})
        response.json(paciente)
    } catch (error) {
        
    }
})



app.listen(3333)

