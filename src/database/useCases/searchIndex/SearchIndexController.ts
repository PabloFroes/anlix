import { Request, Response } from "express";
import { SearchIndexUseCase } from "./SearchIndexUseCase";


class SearchIndexController {
    constructor(private searchIndexUseCase: SearchIndexUseCase){}

    handle (request : Request, response : Response) : Response {
        return this.searchIndexUseCase.execute(request,response)
    }
}

export { SearchIndexController }