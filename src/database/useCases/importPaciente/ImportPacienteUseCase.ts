import fs from "fs";
const pacientePath = "./dados/pacientes.json"
import * as pacientes from '../../../../dados/pacientes.json'

class ImportPacienteUseCase {

    execute() {
        fs.readFile(pacientePath, (err,data) => {
            if(err){
                throw(err)
            }
            console.log(pacientes[1])
        })
    }

}

export { ImportPacienteUseCase }