import { Schema, model, Types } from "mongoose";

interface IndicePulmonar {
    date: Date;
	cpf: string;
	epoc: number;
	ind_pulm: number;
    paciente: {type: Schema.Types.ObjectId, ref:'Paciente'};
}

const indicePulmonarSchema = new Schema<IndicePulmonar>({
    date: {type: Date},
    cpf: {type: String, required: true},
    epoc: {type: Number, required: true},
    ind_pulm: {type: Number, required: true},  
    paciente: {type: Schema.Types.ObjectId, ref:'Paciente', required: true},
})

indicePulmonarSchema.index({"date": "text"})

export = model("IndicePulmonar", indicePulmonarSchema )