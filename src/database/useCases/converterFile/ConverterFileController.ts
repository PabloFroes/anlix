import { ConverterFileUseCase } from "./ConverterFileUseCase";

class ConverterFileController {
    constructor(private converterFileUseCase: ConverterFileUseCase){}

    handle(){
        this.converterFileUseCase.execute();
    }
}

export { ConverterFileController }