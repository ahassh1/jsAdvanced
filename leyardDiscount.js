// first100 =100tk
// 101to200  =90tk
// above200 = 70tk

function discountPrice(quantity){
    const first100 = 100;
    const second100 =90;
    const above200 = 70;

    if(quantity <=100){
        const total = quantity * first100;
        return total;
    }
    else if(quantity <=200){
        const first100Total = 100 * first100;
        // const second100Total = second100 * 100;
        // const total = first100Total + second100Total;
        const remainingQuantity  = quantity-100;
        const remainingTotal = remainingQuantity * second100;
        const total = first100Total + remainingTotal;
        return total;
    }
    else{
        const first100Total = 100 * first100;
        const second100Total = 100 * second100;
        const remainingQuantity =quantity-200;
        const remainingTotal = remainingQuantity * above200;
        const total = first100Total + second100Total + remainingTotal;
        return total;
    }
}
const totalPrice = discountPrice(20);
console.log(totalPrice);