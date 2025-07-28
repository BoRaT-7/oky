const heights = [65, 66, 67, 89, 23, 44];

function getMax(numbers) {
    let max = Number.NEGATIVE_INFINITY; // Initialize with the smallest possible number
    for (const num of numbers) {
        if (num > max) {
            max = num;
        }
    }
    return max;
}

const max = getMax(heights);
console.log('Max value is:', max);

function sumofnumber (numbers){
    let sum = 0;
    for(const number of numbers){
        console.log(number);
        sum = sum + number;
    }
   return sum;

}

const numbs = [2,4,6,8]
const sum = sumofnumber(numbs);
console.log('Sum of number is', sum);
 heights = [ 55, 78,12,40,99,100]

function getMax(fullnumbers){
    console.log(fullnumbers);
}
 max = getMax (fullnumbers);
console.log('max value is ', max);