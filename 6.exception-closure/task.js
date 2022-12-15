function parseCount(number){
    if(Number.parseFloat(number) == NaN){
        throw new Error('невалидное значение')
    } return Number.parseFloat(number)
}

function validateCount(number){
    try{
        parseCount(number)
    } catch (error){
        
    }
}