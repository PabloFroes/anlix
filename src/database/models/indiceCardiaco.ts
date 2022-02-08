import { Schema, model, Types } from "mongoose";

interface IndiceCardiaco {
		cpf: string;
		epoc: number;
	    ind_card: number;
        paciente: Types.ObjectId;
}

const indiceCardiacoSchema = new Schema<IndiceCardiaco>({
    cpf: {type: String, required: true},
    epoc: {type: Number, required: true},
    ind_card: {type: Number, required: true},  
    paciente: {type: Schema.Types.ObjectId, ref:'Paciente', required: true},
})

export default model("IndiceCardiaco", indiceCardiacoSchema )