import { Request, Response } from "express";
import { Model, Schema } from "mongoose";
import { SearchIndexUseCase } from "./SearchIndexUseCase";
import IndiceCardiaco from "../../models/indiceCardiaco";


class SearchIndexController {
    constructor(private searchIndexUseCase: SearchIndexUseCase){}

    handle (request : Request, response : Response, model : Model<any>) : Promise<Response> {
        const index = this.searchIndexUseCase.execute(request,response,model)
        return index
    }
}

export { SearchIndexController }