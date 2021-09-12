// 1. array destruring 

const numbers = [42, 65];
//const x = numbers[0];
//const y = numbers[1];

const [x, y] = [42, 65];
console.log(x, y)

function boxify(num1, num2){
    const nums =[num1, num2];
    return nums;
}
console.log(boxify(42,65))

const [first, second] = boxify(54, 23);
console.log(first, second)


// object destructuring :
const {name, age} = {name: 'alu', age: 14};
const{name, age} = {id: 12, name:'alu', salary:3400, age:13};

const employee = {
    id: 'VS code',
    designation:'developer',
    machine: 'mac',
    languages:['html', 'css', 'js'],
    specification:{
        height:66,
        weight:67,
        address:'kumarkhali',
        watch:{
            color:'black',
            brand:'garmin',
            price:500
        }
    }
}

const {machine, id} = employee;
const {weight, address} = employee.specification;
const {brand} = employee?.specification?.watch;
