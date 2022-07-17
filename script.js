var nota = 45
function getGrade(nota) {
    let aGrade = nota >= 90 && nota <= 100
    let bGrade = nota >= 80 && nota <= 89
    let cGrade = nota >= 70 && nota <= 79
    let dGrade = nota >= 60 && nota <= 69
    let fGrade = nota < 60 && nota >= 0

    let finalGrade;

    if(aGrade){
        finalGrade = 'A!'
    } else if (bGrade) {
        finalGrade = 'B!'
    } else if (cGrade) {
        finalGrade = 'C!'
    } else if (dGrade) {
        finalGrade = 'D!'
    } else if (fGrade) {
        finalGrade = 'F!'
    } else {
        finalGrade = 'Invalid'
    }
    return console.log(finalGrade)
}
console.log(getGrade(60))
console.log(getGrade(78))