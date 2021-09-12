const products = [
    {name:'laptop', price: 3200, brand: 'lenovo', color:'silver'},
    {name:'phone', price: 7200, brand: 'iphone', color:'golden'},
    {name:'watch', price: 2200, brand: 'casio', color:'yellow'},
    {name:'sunglass', price: 1200, brand: 'ribon', color:'black'},
    {name:'camera', price: 9200, brand: 'canon', color:'gray'},
    
];


// ম্যাপ অ্যারে র্রিটান করে । 
const brands = products.map(product =>product.name);
console.log(brands);

const prices = products.map(product => product.price)
// console.log(prices);

const colors = products.map(product => product.color);
// console.log(colors)

// ফরইচ কোনো অ্যারে রিটান করবে না ।  অবজেক্ট  এর মান  আসবে শুধু  । 
products.forEach(product => console.log(product.name))
// products.forEach(product => console.log(product.name))

products.forEach(product => {

})

// filter করলে অ্যারে আকারে দিবে  যতগুলা থাকে  ।
const cheap = products.filter(product => product.price <= 5000);
// console.log(cheap);
 
const SpecificName = products.filter( product => product.name.includes('n'));
console.log(SpecificName);

// find করলে অ্যারে আকারে দিবে না । প্রথম যেটা মিলবে সেটা আসবে ।
const special = products.find(product => product.name.includes('n'))
console.log(special)




// const seller = products.map(product => product.color)
// console.log(seller)

// products.forEach(product => console.log(product.color))

// const filters = products.filter(product => product.price < 4000)
// // console.log(filters)

// const filter = products.filter(product => product.name.includes('n'))
// console.log(filter)

// filter.forEach(filte => console.log(filte.name))

// const find = products.find(product => product.name.includes('n'));
// console.log(find)