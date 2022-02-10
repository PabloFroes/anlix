import { Schema, model, Types, Query, Model, SchemaTypeOptions } from "mongoose";

interface Paciente {
		nome: string;
		idade: number;
	    cpf: string;
		rg: string;
		data_nasc: string;
		sexo: string;
		signo: string;
		mae: string;
		pai: string;
		email: string;
		senha: string;
		cep: string;
		endereco: string;
		numero: number;
		bairro: string;
		cidade: string;
		estado: string;
		telefone_fixo: string;
		celular: string;
		altura: string;
		peso: number;
		tipo_sanguineo: string;
		cor: string;
        características: {
            last_indice_cardiaco: Types.ObjectId;
            last_indice_pulmonar: Types.ObjectId;
        }
}

const pacienteSchema = new Schema<Paciente>({
    nome: {type: String, required: true},
    idade: {type: Number},
    cpf: {type: String, required: true, unique: true},
    rg: {type: String, required: true, unique: true},
    data_nasc: {type: String},
    sexo: {type: String, required: true},
    signo: {type: String},
    mae: {type: String, required: true},
    pai: {type: String},
    email: {type: String, required: true, unique:true},
    senha: {type: String, required: true},
    cep: {type: String, required: true},
    endereco: {type: String, required: true},
    numero: {type: Number},
    bairro: {type: String, required: true},
    cidade: {type: String, required: true},
    estado: {type: String, required: true},
    telefone_fixo: {type: String},
    celular: {type: String, required: true},
    altura: {type: String},
    peso: {type: Number},
    tipo_sanguineo: {type: String, required: true},
    cor: {type: String},
    características: {
        last_indice_cardiaco: {type: Schema.Types.ObjectId, ref:'IndiceCardiaco'},
        last_indice_pulmonar: {type: Schema.Types.ObjectId, ref:'IndicePulmonar'},
    }
})

export = model("Paciente", pacienteSchema )