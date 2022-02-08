import express  from "express";

import "./database/config/database"
import { conveterFileController } from "./database/useCases/converterFile";
import { importCardiacoController } from "./database/useCases/importIndiceCardiaco";
import { importPacienteController } from "./database/useCases/importPaciente";

const app = express()

app.get("/", (request, response) => {
    response.json("Hello World !!!!!");
})

conveterFileController.handle()
importPacienteController.handle()
importCardiacoController.handle()

app.listen(3333)