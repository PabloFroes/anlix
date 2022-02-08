import { ImportPacienteController } from "./ImportPacienteController";
import { ImportPacienteUseCase } from "./ImportPacienteUseCase";

const importPacienteUseCase = new ImportPacienteUseCase()
const importPacienteController = new ImportPacienteController(importPacienteUseCase);

export { importPacienteController }