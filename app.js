function updateProductNumber(product,price,isIncreasing) {
    const productInput = document.getElementById(product + "-number");
    let productCount = productInput.value;
    if (isIncreasing == true) {
        productCount = parseInt(productCount) + 1;
    }   
    else if(productCount>0){
        productCount= parseInt(productCount) - 1;
    }
    productInput.value = productCount;
    const caseTotal = document.getElementById(product+ '-total');
    caseTotal.innerText = productCount * price;
    totalCalculation()
}
function calculateTotal(product) {
    const productInput = document.getElementById(product + "-number");
    let productCount = parseInt(productInput.value);
    return productCount;  
    
}

function totalCalculation() {
    const phoneTotal = calculateTotal('phone') * 1219;
    const casetotal = calculateTotal('case') * 59;
    const subtotal = phoneTotal + casetotal;
    // console.log(subtotal) 
    const tax = subtotal / 10;
    const totalAmount = subtotal + tax;
    document.getElementById("sub-total").innerText = subtotal;
    document.getElementById('tax-total').innerText = tax;
    document.getElementById("total-price").innerText = totalAmount;

}
document.getElementById("phone-plus").addEventListener('click', function () {
    updateProductNumber('phone',1219,true);

})
document.getElementById("phone-minus").addEventListener('click', function () {
    updateProductNumber('phone',1219,false);
})
document.getElementById("case-plus").addEventListener('click', function () {
    updateProductNumber('case',59,true);

})
document.getElementById("case-minus").addEventListener('click', function () {
    updateProductNumber('case',59,false);
})
