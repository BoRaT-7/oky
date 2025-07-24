const number = [3,5,7,5,5,];

function doubleIt(num){
    console.log('num now',num)
    return num*2;
}
const result = number.map(doubleIt)
console.log(result)


const output2 = n => n*2;
