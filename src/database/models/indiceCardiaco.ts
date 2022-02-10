import { Schema, model, Types } from "mongoose";

interface IndiceCardiaco {
        date: string;
		cpf: string;
		epoc: number;
	    ind_card: number;
        paciente: {type: Schema.Types.ObjectId, ref:'Paciente'};
}

const indiceCardiacoSchema = new Schema<IndiceCardiaco>({
    date: {type: String},
    cpf: {type: String, required: true},
    epoc: {type: Number, required: true},
    ind_card: {type: Number, required: true},  
    paciente: {type: Schema.Types.ObjectId, ref:'Paciente', required: true},
})

export = model("IndiceCardiaco", indiceCardiacoSchema )