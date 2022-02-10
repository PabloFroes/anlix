import express  from "express";

import "./database/config/database"

import { router } from "./routes";

import { importPacienteController } from "./database/useCases/importPaciente";
import { importCardiacoController } from "./database/useCases/importIndiceCardiaco";
import IndiceCardiaco from "./database/models/indiceCardiaco";

const app = express()

app.use(express.json())
app.use(router)


app.get("/refresh/p",async (request, response) => {
    importPacienteController.handle()
    response.json("Refresh Pacient");
})
app.get("/refresh/c",async (request, response) => {
    importCardiacoController.handle()
    response.json("Refresh Heart");
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

