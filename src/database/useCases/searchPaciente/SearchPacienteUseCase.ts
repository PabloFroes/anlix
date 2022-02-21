import { Request, Response } from "express";
import Paciente from "../../models/paciente";

class SearchPacienteUseCase {

    async execute (request : Request, response: Response, att: String): Promise<Response>{
        switch(att){
            case "CPF":
                return await this.findByCPF(request, response)
            case "NAME":
                return await this.findByName(request, response)
            default:
                break;
        }
        return await this.findByCPF(request, response)
    }

    private async findByCPF(request: Request, response: Response): Promise<Response>{
        const {cpf} = request.params
        try {
            const paciente = await Paciente.find({cpf})
            return response.json(paciente)
        } catch (error) {
            console.log(error)
        }
    }

    private async findByName(request: Request, response: Response): Promise<Response>{
        const {name} = request.params
        try {
            console.log(name)
            const paciente = await Paciente.find({nome : {'$regex' : name, '$options' : 'i'} })
            return response.json(paciente)
        } catch (error) {
        }
    }

}

export { SearchPacienteUseCase }