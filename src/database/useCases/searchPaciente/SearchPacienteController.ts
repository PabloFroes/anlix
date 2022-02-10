import { Request, Response } from "express";
import { SearchPacienteUseCase } from "./SearchPacienteUseCase";

class SearchPacienteController {
    constructor(private searchPacienteUseCase : SearchPacienteUseCase){}

    handle(request : Request, response: Response,att : String): Promise<Response>{

        const paciente = this.searchPacienteUseCase.execute(request,response, att)
        return paciente
                  
    }

}


export { SearchPacienteController }