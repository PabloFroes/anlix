import fs from "fs";
const indice_pulmonarPath = "./dados/indice_pulmonar/";
const IndicePulmonar = require("../../models/indicePulmonar")
import * as fastcsv from 'fast-csv';
const Paciente = require("../../models/paciente.ts")
import { convertStringToDate } from "../middleware/convertStringToDate";
import { getLastDate } from "../middleware/getLastDate";

class ImportIndicePulmonarUseCase {
    
    lastDate : Date
    
    async execute () {

        
        const fileNames = await this.readDir(indice_pulmonarPath).then((fileNames : string[]) => {
            return fileNames = [...fileNames.filter(this.filterCsvFiles)];
        })
        let dates : Date[] = []
        fileNames.forEach((date) => dates.push (new Date(convertStringToDate(date))))
        const lastDate = getLastDate(dates)
        //console.log(lastDate)
        let csvData = []
        for( let i = 0; i < fileNames.length;i++){
            let currFile = indice_pulmonarPath + fileNames[i]
            //console.log(currFile)
            fastcsv
                .parseFile(currFile, {delimiter:" ",ignoreEmpty:true,skipLines: 1, trim:true})
                .on('data' , (dataLine)=> {
                    csvData.push(dataLine);
                    this.addToDataBase(fileNames[i],dataLine,lastDate)
                })
                .on('end', () => {
                    csvData.shift();
                })
        }
    }
    
    readDir = (dirName) => {
        return new Promise((resolve,reject) => {
            fs.readdir(dirName, (error, fileNames) => {
                try {
                    resolve(fileNames)
                } catch (error) {
                    reject(error)
                }
            })
        })
    }

    filterCsvFiles = (fileName) => {
        return fileName.split('.')[1] === 'csv'
    }

    async addToDataBase(fileName: string,dataLine: [string,number,number],lastDate) {
            const [cpf, epoc, ind_pulm] = dataLine
            const paciente = await (Paciente.findOne({cpf}))
            const date = convertStringToDate(fileName)
            const indice_pulmonar = new IndicePulmonar({date:date,cpf,epoc,ind_pulm,paciente})
            this.addLastIndexToPaciente(date,lastDate,paciente,indice_pulmonar,epoc,ind_pulm)
            try {
                indice_pulmonar.save()
                //console.log(line)
            } catch (error) {
                console.log(fileName)
                console.log(fileName + error)
        }
    }

    async addLastIndexToPaciente(date : Date , lastDate : Date, paciente,indice_pulmonar, epoc,ind_pulm){
        try {
            if(date >= lastDate){
                paciente.características.last_indice_pulmonar.push({object: indice_pulmonar, epoc, ind_pulm})
                paciente.save()
            }
        } catch (error) {
            console.log(error)
        }
    }
}

export {ImportIndicePulmonarUseCase}