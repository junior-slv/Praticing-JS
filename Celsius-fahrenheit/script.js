function convert(value, unit) {
    let convertedValue;

    if (unit == 'C'){
        convertedValue = (Number(value)*9/5+32)
    }   else if (unit == 'F'){
        convertedValue = (Number(value)-32)*5/9
    }   else {
        console.log('Insert a valid value')
    }
    console.log(convertedValue, unit == 'C' ? 'F' : 'C')
};
convert('50', 'C')
convert('23', 'C')
convert('73', 'F')
convert('30', 'C')
convert('68', 'F')
convert('29', 'C')
convert('50', 'F')
convert('23', 'C')
convert('50', 'X')
convert('23', 'J')