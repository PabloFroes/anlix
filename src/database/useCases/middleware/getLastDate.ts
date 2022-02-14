

function getLastDate (dates: Date[]) : Date{
    const lastDate = dates.reduce((date,nextDate) => date > nextDate ? date : nextDate)
    return lastDate
}

export  {getLastDate}