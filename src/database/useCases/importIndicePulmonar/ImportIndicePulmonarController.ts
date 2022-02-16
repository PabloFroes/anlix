import { ImportIndicePulmonarUseCase } from "./ImportIndicePulmonarUseCase";

class ImportIndicePulmonarController {
    constructor(private importIndicePulmonarUseCase: ImportIndicePulmonarUseCase){}
    
    handle(){
        this.importIndicePulmonarUseCase.execute()

    }

}

export { ImportIndicePulmonarController }