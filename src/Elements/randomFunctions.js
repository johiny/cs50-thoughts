export const randomFeeling = () => {
    let rng = Math.floor(Math.random() * 10)
    if(rng > 4){
        return 'negative'
    }
    else{
        return 'positive'
    }
}

export const randomDelay = () => {
    let rng = Math.floor(Math.random() * 10 + 1)
    return `${rng}s`
}

export const createArrayToThisYear = (begin) => {
    let currentYear = new Date().getFullYear()
    let years = []
    for(let i = begin; i <= currentYear; i++){
        years.push(i)
    }
    return years
}