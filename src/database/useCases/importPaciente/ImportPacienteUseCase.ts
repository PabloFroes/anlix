import fs from "fs";
const pacientePath = "./dados/pacientes.json"
import * as pacientesFile from '../../../../dados/pacientes.json'
const Paciente = require("../../models/paciente.ts")

class ImportPacienteUseCase {

    execute () {
        const stream  = fs.readFileSync(pacientePath)
        let pacientes : [object]= JSON.parse(stream.toString())
        pacientes.forEach((paciente : typeof Paciente)=>{
            const newPaciente = new Paciente(paciente)
            try {
                newPaciente.save()
                console.log("Paciente Cadastrado: " + paciente.nome)
            } catch (error) {
                if(Paciente.findOne(paciente.cpf)){
                    console.log(`"Erro ao Cadastrar o Paciente: ${paciente.nome} => Cpf ja cadastrado\n`)
                }else {
                    console.log("Erro ao Cadastrar Paciente: " +paciente.nome + error)
                }
            }
        })
    }

}

export { ImportPacienteUseCase }