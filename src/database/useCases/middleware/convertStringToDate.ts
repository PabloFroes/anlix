

function convertStringToDate(fileName: string): Date{
    const day = parseInt(fileName.slice(0,2))
    const month = parseInt(fileName.slice(2,4))
    const year = parseInt(fileName.slice(4,8))
    const date = new Date(year,month,day)
    return date 
}


export{convertStringToDate}