// 1. How to declare a variable using let and const
const fatherName = 'Arnold';
let season = 'rainy';
season = 'winter';

// 2. 5 basic condition: <,<, ===, !==, <=, >=
// multiple condition: &&, ||
 if(fatherName === 'arnold' || season === 'raniy'){

 }
 else if(fatherName === 'Arnold'){

 }
 else{

 }
 // 3. array declare
 // index,
 // length, push
 const numbers = [45,23,62, 46];
 numbers[0] = 56;

 //4. for loop
 for(let i=0; i<numbers.length; i++){
     const number = numbers[i];
     console.log(number)
 }

 // 5. function:
  function multiple(num1,num2){
      const result = num1 + num2;
      return result;

 }

 const outpot = multiple(35, 78);


 //6. Object
 //3 ways to acces property by name:

 const student= {
     name: 'Salib Khan',
     age: 32,
     movies:['king khan', 'Dhaka']

 }
const myVariable = 'age'
 console.log(student.name);
 console.log(student['age']);
 console.log(student[myVariable])