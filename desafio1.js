let arrayList = [ 'a', 10, 'b', 'hola', 122, 15];
let numberList = [];
let stringsList = [];

arrayList.forEach(elemento => {
    if(isNaN(elemento)) {
        stringsList.push(elemento);
    } else {
        numberList.push(elemento);
    }
});

console.log(numberList);
console.log(stringsList);

let maxNumber = numberList.reduce(function(a, b){
    return Math.max(a, b);
})

console.log(maxNumber);