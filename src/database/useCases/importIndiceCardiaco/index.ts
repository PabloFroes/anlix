import { ImportIndiceCardiacoController } from "./ImportIndiceCardiacoController";
import { ImportIndiceCardiacoUseCase } from "./ImportIndiceCardiacoUseCase";

const importIndiceCardiacoUseCase = new ImportIndiceCardiacoUseCase();
const importCardiacoController = new ImportIndiceCardiacoController(importIndiceCardiacoUseCase);

export { importCardiacoController }