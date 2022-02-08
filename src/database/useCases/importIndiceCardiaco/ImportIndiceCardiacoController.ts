import { ImportIndiceCardiacoUseCase } from "./ImportIndiceCardiacoUseCase";

class ImportIndiceCardiacoController {
    constructor(private importIndiceCardiacoUseCase: ImportIndiceCardiacoUseCase){}

    handle(){
        this.importIndiceCardiacoUseCase.execute()
    }

}

export { ImportIndiceCardiacoController }