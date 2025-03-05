function multiply(num1, num2){
    if(typeof num1 !== "number" || typeof num2 !== "number"){
        return "please provide a number"
    }
    const mult= num1 * num2;
    return mult;
}
const result = multiply("5", 'seven');
console.log(result)


/////////////////////////

function getPrice(product){
    if(typeof product !== "object"){
        return 'please provide an object';
    }
    const price= product.price; 
    return price;
}

const price = getPrice({
    name:'hair drair', price :3455 ,color: 'blue'
})
console.log(price)

////////////////////////

function getSecond(numbers){
    console.log(Array.isArray(numbers));
    console.log(typeof numbers);
    const second = numbers[2];
    return second;
}
const second = getSecond([1,3, 5, 45, 56,]);
console.log(second)
