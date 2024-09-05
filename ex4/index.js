const addNumbers = (...arguments) => {
    let sum = 0;
    for (let i = 0; i < arguments.length; i++) {
           sum += arguments[i];
    }
    return sum;
}

console.log( "suma numerelor 1 2 3 4 este " + addNumbers(1, 2, 3, 4)  )