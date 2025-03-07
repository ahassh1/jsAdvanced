// const numbers = [23,34,45,56,23,45];

// for(let i=0; i < numbers.length; i++){
//     const number = numbers[i];
//     console.log(number),
// }
// for(const number of numbers){
//     console.log(number)
// }


const products =[
    {id:1, name:'walton', price:12000},
    {id:2, name:'xhomi', price:3400},
    {id:3, name:'iphone', price:102000},
    {id:4, name:'nokiya', price:14000},
    {id:5, name:'lenobo', price:15000},
];
for(const product of products){
    console.log(product)
}

function matchedProducts(products, search){
    const matched = []
    for(const product of products){
        if(product.name.toLowerCase().includes(search.toLowerCase)){
            matched.push(product)
        }
    }
    return matched;
}
 const result = matchedProducts(products, "phone");
 console.log(result)