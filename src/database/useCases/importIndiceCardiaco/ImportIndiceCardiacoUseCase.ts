import fs from "fs";
const indice_cardiacoPath = "./dados/indice_cardiaco";
import {parse as csvParse} from "csv-parse"


class ImportIndiceCardiacoUseCase {

    indice = []

    execute () : void{
        console.log(indice_cardiacoPath)
        const parseFile = csvParse({ delimiter: " ",from_line: 2})
        fs.readdir(indice_cardiacoPath,async (err,data) => {
            if(err) throw err
            const stream = fs.createReadStream(`./dados/indice_cardiaco/${data[0]}`)
            stream.pipe(parseFile)
            parseFile.on("data", async(line) => {
                await this.indice.push(line)
                console.log(line)
            })
        })
    }
}

export {ImportIndiceCardiacoUseCase}