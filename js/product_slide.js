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

                if (amount >= 20) {
                    plusButton.disabled = true;
                    plusButton.style.opacity = 0.6;
                }
            }
        })
        minusButton .addEventListener('click', () => {
            if(amount > 1) {

                amountInput.value = --amount;

                if (amount < 20) {
                    plusButton.disabled = false;
                    plusButton.style.opacity = 1;
                }
            }
        });
        amountInput.addEventListener('input', () => {
            amount = amountInput.value;
            amount = parseInt(amount);
            // amount = (isNaN(amount) || amount == 0) ? 1 : (amount > 20) ? 20 : amount;
            if (isNaN(amount) || amount == 0) {
                amount = 1;
            } else if (amount > 20) {
                alert("Tối đa 20 sản phẩm");
                amount = 20;
            }

            amountInput.value = amount;

            if (amount >= 20) {
                plusButton.disabled = true;
                plusButton.style.opacity = 0.6;
            }
            else {
                plusButton.disabled = false;
                plusButton.style.opacity = 1;
            }
        })
    })
    //form search
    const iconSearch = document.getElementById("icon__search");
    const formSearch = document.getElementById("form_search");
    
    iconSearch.addEventListener("click", (event) => {
        event.stopPropagation();
        if(formSearch.classList.contains('activeSearch')) {
            formSearch.classList.remove('activeSearch');
        } else {
            formSearch.classList.add('activeSearch');
        }
    })
    
    //click out form search 
    document.addEventListener("click", function(event) {
        if(event.target !== iconSearch && !formSearch.contains(event.target)) {
            formSearch.classList.remove('activeSearch');
        }
    })
});




