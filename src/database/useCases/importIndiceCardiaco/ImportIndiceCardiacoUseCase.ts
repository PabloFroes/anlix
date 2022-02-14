import fs from "fs";
const indice_cardiacoPath = "./dados/indice_cardiaco/";
const IndiceCardiaco = require("../../models/indiceCardiaco")
import * as fastcsv from 'fast-csv';
const Paciente = require("../../models/paciente.ts")
import { convertStringToDate } from "../middleware/convertStringToDate";
import { getLastDate } from "../middleware/getLastDate";

class ImportIndiceCardiacoUseCase {
    
    lastDate : Date
    
    async execute () {

        
        const fileNames = await this.readDir(indice_cardiacoPath).then((fileNames : string[]) => {
            return fileNames = [...fileNames.filter(this.filterCsvFiles)];
        })
        let dates : Date[] = []
        fileNames.forEach((date) => dates.push (new Date(convertStringToDate(date))))
        const lastDate = getLastDate(dates)
        //console.log(lastDate)
        let csvData = []
        for( let i = 0; i < fileNames.length;i++){
            let currFile = indice_cardiacoPath + fileNames[i]
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
            const [cpf, epoc, ind_card] = dataLine
            const paciente = await (Paciente.findOne({cpf}))
            const date = convertStringToDate(fileName)
            const indice_cardiaco = new IndiceCardiaco({date:date,cpf,epoc,ind_card,paciente})
            this.addLastIndexToPaciente(date,lastDate,paciente,indice_cardiaco,epoc,ind_card)
            try {
                indice_cardiaco.save()
                //console.log(line)
            } catch (error) {
                console.log(fileName)
                console.log(fileName + error)
        }
    }

    async addLastIndexToPaciente(date : Date , lastDate : Date, paciente,indice_cardiaco, epoc,ind_card){
        try {
            if(date >= lastDate){
                paciente.características.last_indice_cardiaco.push({object: indice_cardiaco, epoc, ind_card})
                paciente.save()
            }
        } catch (error) {
            console.log(error)
        }
    }
}

export {ImportIndiceCardiacoUseCase}