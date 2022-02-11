import { Request, Response } from "express";
import { Model, Schema } from "mongoose";
import IndiceCardiaco  from "../../models/indiceCardiaco";
import { convertStringToDate } from "../middleware/convertStringToDate";


class SearchIndexUseCase {

    async execute (request : Request, response : Response, model : Model<any>, param: string) : Promise<Response>{
        switch(param){
            case "cpf":
                return await this.searchByPacienteCpf(request,response,model)
            case "date":
                return await this.searchByDate(request, response, model)
            default : 
                return response.json("Invalid Param for search")
        }
    }


    async searchByPacienteCpf(request : Request ,response : Response, model : Model<any>){
        const {cpf} = request.params
        try {
            const paciente = await model.find({cpf})
            return response.json(paciente)
        } catch (error) {
            
        }
    }
    async searchByDate(request : Request ,response : Response, model : Model<any>){
        const {date} = request.params
        const fDate = convertStringToDate(date)
        try {
            const paciente = await model.find({date: new Date(fDate)})
            return response.json(paciente)
        } catch (error) {
            
        }
    }

}

export { SearchIndexUseCase }