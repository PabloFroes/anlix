import express  from "express";

import "./database/config/database"

const app = express()

app.get("/", (request, response) => {
    response.json("Hello World !!!!!");
})

app.listen(3333)