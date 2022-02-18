import express, { request, response }  from "express";

import "./database/config/database"

import { router } from "./routes";

import { importPacienteController } from "./database/useCases/importPaciente";
import { importCardiacoController } from "./database/useCases/importIndiceCardiaco";

import path from 'path';
const app = express()

app.use(express.json())
app.use(router)
app.use(express.static(path.resolve(__dirname, '../client/build')))

app.get("/refresh/p",async (request, response) => {
    importPacienteController.handle()
    response.json("Refresh Pacient");
})
app.get("/refresh/c",async (request, response) => {
    importCardiacoController.handle()
    response.json("Refresh Heart");
})

app.get('*',(request,response) => {
    response.sendFile(path.resolve(__dirname,"../client/build", 'index.html'))
}) 

app.listen(3333)

