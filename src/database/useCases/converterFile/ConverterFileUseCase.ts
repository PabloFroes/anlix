import fs from "fs"
const indice_cardiacoPath = "./dados/indice_cardiaco";
const indice_pulmonarPath = "./dados/indice_pulmonar";

class ConverterFileUseCase {

    execute() {
        fs.readdir(indice_cardiacoPath, (err,data) => {
            if(err) throw err
                data.forEach((file)=>{
                    if(file.endsWith(".csv")){
                        console.log("Already converted to csv")
                    } else{
                        fs.rename(`${indice_cardiacoPath}/${file}`,`${indice_cardiacoPath}/${file}.csv`,(err)=>{
                        if(err) throw err
                        //console.log(`Converted ${file} to ${file}.csv`)
                    })
                }
            })
        })
        fs.readdir(indice_pulmonarPath, (err,data) => {
            if(err) throw err
                data.forEach(async (file)=>{
                    if(file.endsWith(".csv")){
                        console.log("Already converted to csv")
                    } else{
                        fs.rename(`${indice_pulmonarPath}/${file}`,`${indice_pulmonarPath}/${file}.csv`,(err)=>{
                        if(err) throw err
                        //console.log(`Converted ${file} to ${file}.csv`)
                    })
                }
            })
        })
    }

}

export { ConverterFileUseCase}