import express  from "express";

import "./database/config/database"
import { importPacienteController } from "./database/useCases/importPaciente";
import { conveterFileController } from "./database/useCases/converterFile";
import { importCardiacoController } from "./database/useCases/importIndiceCardiaco";

const app = express()

app.get("/", (request, response) => {
    response.json("Hello World !!!!!");
})


start()

async function start (){
    //conveterFileController.handle()
    //await importPacienteController.handle()
    await importCardiacoController.handle()
    
}


app.listen(3333)