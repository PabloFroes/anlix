import { SearchIndexController } from "./SearchIndexController";
import { SearchIndexUseCase } from "./SearchIndexUseCase";


const searchIndexUseCase = new SearchIndexUseCase();
const searchIndexController = new SearchIndexController(searchIndexUseCase)

export {searchIndexController}