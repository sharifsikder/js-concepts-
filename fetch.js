// 1. JSON 
const student= {
    name: 'Salib Khan',
    age: 32,
    movies:['king khan', 'Dhaka']
};
const studentJSON = JSON.stringify(student);
// console.log(student)
console.log(studentJSON)

const studentObject = JSON.parse(studentJSON);
console.log(studentObject)

// 2. fetch
// fetch('url')
// .then(res => res.json)
// .then(data => console.log(data))

//3. keys, values
const keys =Object.keys(student);
// console.log(keys);
const values = Object.values(student);
// console.log(values)

// 4. for
const numbers = [23,34,33,53,21]
numbers.forEach(num => console.log(num));

numbers.map(num => num*2)

// for of on array like oject
// loop on an object using for in 

// add or remobe from an array
const products = [
    {name:'laptop', price: 3200, brand: 'lenovo', color:'silver'},
    {name:'phone', price: 7200, brand: 'iphone', color:'golden'},
    {name:'watch', price: 2200, brand: 'casio', color:'yellow'},
    {name:'sunglass', price: 1200, brand: 'ribon', color:'black'},
    {name:'camera', price: 9200, brand: 'canon', color:'gray'},
    
];

const newProduct = {name: 'webcam', price: 700, brand: 'lal'}

// add newProduct
const newProducts = [...products, newProduct]
// console.log(products)
// console.log(newProducts)

//create a new array without one specific item

// remmove phone means crate new array without the phone
const remaining = products.filter(product => product.name !=='phone')
console.log(remaining)

