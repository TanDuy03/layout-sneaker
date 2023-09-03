document.addEventListener("DOMContentLoaded", function () {
    //click button quality product detail
    let btnQuality = document.querySelectorAll('.btn_quality');
    
    btnQuality.forEach((amountInput) => {
        let amount = parseInt(amountInput.value);
        let plusButton = amountInput.nextElementSibling;
        let minusButton = amountInput.previousElementSibling;

        plusButton.addEventListener('click', () => {
            if (amount >= 1) {
                amountInput.value = ++amount;
            }
        })
        minusButton .addEventListener('click', () => {
            if(amount > 1){
                amountInput.value = --amount;
            }
        });
        amountInput.addEventListener('input', () => {
            amount = amountInput.value;
            amount = parseInt(amount);
            amount = (isNaN(amount) || amount == 0)?1:amount;
            amountInput.value = amount;
        })
    })
});



