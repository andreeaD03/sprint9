const randomNumber = (start, end) => Math.floor(Math.random() * (end - start)) + start;

console.log(randomNumber(3, 5));
console.log(randomNumber(10, 15)); 
console.log(randomNumber(-5, 0));