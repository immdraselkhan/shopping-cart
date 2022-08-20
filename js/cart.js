document.getElementById('phone-qt-decrease').addEventListener('click', function(){
    const phoneTotal = phoneInputQuantity(true, 'phone-qt-field', 'cart-phone-price');
    cartPhoneTotal(phoneTotal);
});

document.getElementById('phone-qt-increase').addEventListener('click', function(){
    const phoneTotal = phoneInputQuantity(false, 'phone-qt-field', 'cart-phone-price');
    cartPhoneTotal(phoneTotal);
});

document.getElementById('case-qt-decrease').addEventListener('click', function(){
    const caseTotal = caseInputQuantity(true, 'case-qt-field', 'cart-case-price');
    cartCaseTotal(caseTotal);
});

document.getElementById('case-qt-increase').addEventListener('click', function(){
    const caseTotal = caseInputQuantity(false, 'case-qt-field', 'cart-case-price');
    cartCaseTotal(caseTotal);
});

document.getElementById('phone-qt-field').addEventListener('input', function(event){
    document.getElementById('cart-phone-price').innerText = event.target.value * 1219;
    document.getElementById('cart-subtotal').innerText = parseInt(document.getElementById('cart-phone-price').innerText) + parseInt(document.getElementById('cart-case-price').innerText);
    document.getElementById('cart-tax-total').innerText = (document.getElementById('cart-subtotal').innerText * 0.1).toFixed(2);
    document.getElementById('cart-total').innerText = parseInt(document.getElementById('cart-subtotal').innerText) + parseInt(document.getElementById('cart-tax-total').innerText);
})

document.getElementById('case-qt-field').addEventListener('input', function(event){
    document.getElementById('cart-case-price').innerText = event.target.value * 59;
    document.getElementById('cart-subtotal').innerText = parseInt(document.getElementById('cart-case-price').innerText) + parseInt(document.getElementById('cart-phone-price').innerText);
    document.getElementById('cart-tax-total').innerText = (document.getElementById('cart-subtotal').innerText * 0.1).toFixed(2);
    document.getElementById('cart-total').innerText = parseInt(document.getElementById('cart-subtotal').innerText) + parseInt(document.getElementById('cart-tax-total').innerText);
})