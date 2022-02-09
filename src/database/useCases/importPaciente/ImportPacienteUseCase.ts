import fs from "fs";
const pacientePath = "./dados/pacientes.json"
import * as pacientesFile from '../../../../dados/pacientes.json'
const Paciente = require("../../models/paciente.ts")

class ImportPacienteUseCase {

    async execute () {
        console.log(typeof Paciente)
        const stream  = fs.readFileSync(pacientePath)
        let pacientes : [object]= JSON.parse(stream.toString())
        pacientes.forEach(async(paciente : typeof Paciente)=>{
            const newPaciente = new Paciente(paciente)
            try {
                await newPaciente.save()
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