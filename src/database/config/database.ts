import mongoose from "mongoose"
mongoose.Promise = global.Promise

import { conveterFileController } from "../useCases/converterFile";
import { importCardiacoController } from "../useCases/importIndiceCardiaco";
import { importPacienteController } from "../useCases/importPaciente";

mongoose.connect('mongodb://localhost/anlixDB')
    .then(() => console.log("Connection Successful"))
    .catch((err) => console.log(err))

startImport()

async function startImport () {
    await mongoose.connection.dropDatabase()
    conveterFileController.handle()
    importPacienteController.handle()
    importCardiacoController.handle()
}