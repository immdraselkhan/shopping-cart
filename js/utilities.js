function phoneInputQuantity(isDecrease, qtInput, cartProductPrice) {
    if(isDecrease) {
        document.getElementById(qtInput).value = parseInt(document.getElementById(qtInput).value) - 1;
        document.getElementById(cartProductPrice).innerText = document.getElementById(qtInput).value * 1219;
        const phoneTotal = document.getElementById(cartProductPrice).innerText;
        return phoneTotal;
    }
    else {
        document.getElementById(qtInput).value = parseInt(document.getElementById(qtInput).value) + 1;
        document.getElementById(cartProductPrice).innerText = document.getElementById(qtInput).value * 1219;
        const phoneTotal = document.getElementById(cartProductPrice).innerText;
        return phoneTotal;
    }
}

function caseInputQuantity(isDecrease, qtInput, cartProductPrice) {
    if(isDecrease) {
        document.getElementById(qtInput).value = parseInt(document.getElementById(qtInput).value) - 1;
        document.getElementById(cartProductPrice).innerText = document.getElementById(qtInput).value * 59;
        const caseTotal = document.getElementById(cartProductPrice).innerText;
        return caseTotal;
    }
    else {
        document.getElementById(qtInput).value = parseInt(document.getElementById(qtInput).value) + 1;
        document.getElementById(cartProductPrice).innerText = document.getElementById(qtInput).value * 59;
        const caseTotal = document.getElementById(cartProductPrice).innerText;
        return caseTotal;
    }
}

function cartPhoneTotal(phoneTotal) {
    document.getElementById('cart-subtotal').innerText = parseInt(phoneTotal) + parseInt(document.getElementById('cart-case-price').innerText);
    document.getElementById('cart-tax-total').innerText = (document.getElementById('cart-subtotal').innerText * 0.1).toFixed(2);
    document.getElementById('cart-total').innerText = parseInt(document.getElementById('cart-subtotal').innerText) + parseInt(document.getElementById('cart-tax-total').innerText);
}

function cartCaseTotal(caseTotal) {
    document.getElementById('cart-subtotal').innerText = parseInt(caseTotal) + parseInt(document.getElementById('cart-phone-price').innerText);
    document.getElementById('cart-tax-total').innerText = (document.getElementById('cart-subtotal').innerText * 0.1).toFixed(2);
    document.getElementById('cart-total').innerText = parseInt(document.getElementById('cart-subtotal').innerText) + parseInt(document.getElementById('cart-tax-total').innerText);
}