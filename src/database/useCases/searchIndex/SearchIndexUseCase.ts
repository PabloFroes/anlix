import { Request, Response } from "express";
import { Model, Schema } from "mongoose";
import IndiceCardiaco  from "../../models/indiceCardiaco";


class SearchIndexUseCase {

    async execute (request : Request, response : Response, model : Model<any>) : Promise<Response>{
        return await this.searchByPacienteCpf(request,response,model)
    }


    async searchByPacienteCpf(request : Request ,response : Response, model : Model<any>){
        const {cpf} = request.params
        try {
            const paciente = await model.find({cpf})
            return response.json(paciente)
        } catch (error) {
            
        }
    }

}

export { SearchIndexUseCase }