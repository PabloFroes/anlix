import { Schema, model, Types } from "mongoose";

interface IndicePulmonar {
		cpf: string;
		epoc: number;
	    ind_pulm: number;
        paciente: Types.ObjectId;
}

const indicePulmonarSchema = new Schema<IndicePulmonar>({
    cpf: {type: String, required: true},
    epoc: {type: Number, required: true},
    ind_pulm: {type: Number, required: true},  
    paciente: {type: Schema.Types.ObjectId, ref:'Paciente', required: true},
})

export default model("IndicePulmonar", indicePulmonarSchema )