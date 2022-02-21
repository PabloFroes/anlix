import express, { request, response }  from "express";
import "./database/config/database"
import { router } from "./routes";
import path from 'path';

const app = express()

app.use(express.json())
app.use(router)
app.use(express.static(path.resolve(__dirname, '../client/build')))

app.get("/api",async (request, response) => {
    response.json({message: "Carregado"});
})

app.get('*',(request,response) => {
    response.sendFile(path.resolve(__dirname,"../client/build", 'index.html'))
}) 

app.listen(3333 ,( ) => {
    console.log(`Server listening on 3333 \nhttp://localhost:3333/`)
})

