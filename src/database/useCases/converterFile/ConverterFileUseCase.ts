import fs from "fs"
const indice_cardiacoPath = "./dados/indice_cardiaco";

class ConverterFileUseCase {

    execute():void{
        fs.readdir(indice_cardiacoPath, (err,data) => {
            if(err) throw err
                data.forEach((file)=>{
                    if(file.endsWith(".csv")){
                        //console.log("Already converted to csv")
                    } else{
                        fs.rename(`${indice_cardiacoPath}/${file}`,`${indice_cardiacoPath}/${file}.csv`,(err)=>{
                        if(err) throw err
                        //console.log(`Converted ${file} to ${file}.csv`)
                    })
                }
            })
        })
    }

}

export { ConverterFileUseCase}