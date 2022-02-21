import mongoose from "mongoose"
mongoose.Promise = global.Promise

import { conveterFileController } from "../useCases/converterFile";
import { importPacienteController } from "../useCases/importPaciente";
import { importCardiacoController } from "../useCases/importIndiceCardiaco";
import { importPulmonarController } from "../useCases/importIndicePulmonar";

mongoose.connect('mongodb://localhost/anlixDB')
    .then(() => console.log("MongoDB Connection Successful"))
    .catch((err) => console.log(err))

startImport()

async function startImport () {
    try {
        await mongoose.connection.dropDatabase()
        conveterFileController.handle()
        importPacienteController.handle()
        importCardiacoController.handle()
        importPulmonarController.handle()
        console.log("All files imported")  
    } catch (error) {
        console.log(error)
    }
}