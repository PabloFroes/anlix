import fs from "fs";
const indice_cardiacoPath = "./dados/indice_cardiaco/";
const IndiceCardiaco = require("../../models/indiceCardiaco")
import * as fastcsv from 'fast-csv';
const Paciente = require("../../models/paciente.ts")

class ImportIndiceCardiacoUseCase {

    
    async execute () {

        
        const fileNames = await this.readDir(indice_cardiacoPath).then((fileNames : string[]) => {
            return fileNames = [...fileNames.filter(this.filterCsvFiles)];
        })
        let csvData = []
        for( let i = 0; i < fileNames.length;i++){
            let currFile = indice_cardiacoPath + fileNames[i]
            console.log(currFile)
            fastcsv
                .parseFile(currFile, {delimiter:" ",ignoreEmpty:true,skipLines: 1, trim:true})
                .on('data' , (dataLine)=> {
                    csvData.push(dataLine);
                    this.addToDataBase(fileNames[i],dataLine)
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

    async addToDataBase(fileName: string,dataLine: [string,number,number]) {
            const [cpf, epoc, ind_card] = dataLine
            const paciente = await (Paciente.findOne({cpf}))
            const date = this.convertStringToDate(fileName)
            const indice_cardiaco = new IndiceCardiaco({date:date,cpf,epoc,ind_card,paciente})
            try {
                indice_cardiaco.save()
                //console.log(line)
            } catch (error) {
                console.log(fileName)
                console.log(fileName + error)
        }
    }

    convertStringToDate(fileName: string): Date{
        const month = parseInt(fileName.slice(0,2))
        const day = parseInt(fileName.slice(2,4))
        const year = parseInt(fileName.slice(4,8))
        const date = new Date(year,month,day)
        return date 
    }
}

export {ImportIndiceCardiacoUseCase}