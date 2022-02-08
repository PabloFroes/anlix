import { ConverterFileController } from "./ConverterFileController";
import { ConverterFileUseCase } from "./ConverterFileUseCase";

const converterFileUseCase = new ConverterFileUseCase();
const conveterFileController = new ConverterFileController(converterFileUseCase);

export { conveterFileController }