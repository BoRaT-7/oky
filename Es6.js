/** const a = 56;
const numbers = [56,7,8]
const preson = {
    name:'borat'
}

const message = `hi , ${preson.name} has a ${a} access to ${numbers[2]}`

const squ = x => x*x;
const sum = (5,6) => a+b ;   */


/** object value */
const data = [{id:1, name:'abul', address: 'Degigonj'}];
console.log(data[0].address);

const user ={
    id: 5001,
    name:'bocktear ',
    address: {
        street: {
            first: '55/3 akrain bazar',
            second: 'parbotipur dhaka bangladesh',
            third: 'damradigi',
        },
        city: 'Dhaka'



    }
}

console.log(user.address.street.third);