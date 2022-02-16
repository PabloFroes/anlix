import express  from "express";

import "./database/config/database"

import { router } from "./routes";

import { importPacienteController } from "./database/useCases/importPaciente";
import { importCardiacoController } from "./database/useCases/importIndiceCardiaco";

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


app.listen(3333)

