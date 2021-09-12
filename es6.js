const numbers = [45,23,62, 46];
const student= {
    name: 'Salib Khan',
    age: 32,
    movies:['king khan', 'Dhaka']
};
                                      
// 1. template string : 
const about = `My name is a ${student.name}. I am ${student.age} years old. My movie name
${student.movies[0]}`;
// console.log(about)

// 2. arrow function : 
const getFiftyFive = () => 55;
const addSix = num => num+ 34;
// const isEven = x = x%2 == 0;
const addThree = (x, y, z) => x + y + z;
const doMath = (num1, num2) => {
    const sum = num1 + num2;
    return sum;
}

// // 3. spread operator : 

const newNumbers = [...numbers];

// 4. crate a new array from an older array and add an element :
const currentNumbers = [...numbers, 55];
numbers.push(99);

console.log(numbers);
console.log(newNumbers);
console.log(currentNumbers);
