console.log(1);
console.log(2);
setTimeout (() =>{
    console.log(3);
} , 5000)
console.log(1);
console.log(1);

setInterval( ()=>{
    console.log('i love you')
}   , 3000)

let num = 0 ;
const intervalId = setInterval(()=>{
    console.log(++num)
    if(num == 10 ){
        clearInterval(intervalId)
    }
} ,2000)
