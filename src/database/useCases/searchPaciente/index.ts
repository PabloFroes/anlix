import { SearchPacienteController } from "./SearchPacienteController";
import { SearchPacienteUseCase } from "./SearchPacienteUseCase";

const searchPacienteUseCase = new SearchPacienteUseCase();
const searchPacienteController = new SearchPacienteController(searchPacienteUseCase);

export { searchPacienteController }