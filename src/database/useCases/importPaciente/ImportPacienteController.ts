import { ImportPacienteUseCase } from "./ImportPacienteUseCase"

class ImportPacienteController {
    
    constructor(private importPacienteUseCase:ImportPacienteUseCase) {}

    handle(){
       this.importPacienteUseCase.execute()
    }

}

export { ImportPacienteController }