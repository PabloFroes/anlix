import { ImportIndicePulmonarController } from "./ImportIndicePulmonarController";
import { ImportIndicePulmonarUseCase } from "./ImportIndicePulmonarUseCase";

const importIndicePulmonarUseCase = new ImportIndicePulmonarUseCase();
const importPulmonarController = new ImportIndicePulmonarController(importIndicePulmonarUseCase);

export { importPulmonarController }