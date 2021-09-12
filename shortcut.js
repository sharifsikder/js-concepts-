
//check truthy
let myVar = 2;
if(myVar){
    myVar = myVar*100;
}
else{
    myVar =0
}

let myMoney = 50 ;
if(!myMoney){

}
const money = 800
let food;
if(money > 100){
    foof = ' biryani';
}
else{
    food = 'cha biscuit'
}

// ternary 
let food1 = money>100? 'biryani' : 'cha biscuit';
console.log(food1);

let drink = (money > 100 && myVar >100)? 'coke' : 'filter water';
console.log(drink);

// number conver to string:
const num1 = 51;
console.log(num1);
const numStr = num1 + '';
console.log(numStr)


// string to number:
const input = '560';
const inputNum =  + input;
console.log(inputNum);
 
// 
const isActive  = true;
const showUser = () => console.log('display User');
const hideUser = () => console.log('hide User');
// isActive? showUser() : hideUser();
isActive && showUser();

isActive || hideUser()

isActive = !isActive;