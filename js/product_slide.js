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
        minusButton.addEventListener('click', () => {
            if (amount > 1) {

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
        if (formSearch.classList.contains('activeSearch')) {
            formSearch.classList.remove('activeSearch');
        } else {
            formSearch.classList.add('activeSearch');
        }
    })

    //click out form search 
    document.addEventListener("click", function (event) {
        if (event.target !== iconSearch && !formSearch.contains(event.target)) {
            formSearch.classList.remove('activeSearch');
        }
    })
    // ----------------------
    const allStar = document.querySelectorAll('.rating .star')
    const ratingValue = document.querySelector('.rating input')

    allStar.forEach((item, idx) => {
        item.addEventListener('click', function () {
            let click = 0
            ratingValue.value = idx + 1

            allStar.forEach(i => {
                i.classList.replace('bxs-star', 'bx-star')
                i.classList.remove('active')
            })
            for (let i = 0; i < allStar.length; i++) {
                if (i <= idx) {
                    allStar[i].classList.replace('bx-star', 'bxs-star')
                    allStar[i].classList.add('active')
                } else {
                    allStar[i].style.setProperty('--i', click)
                    click++
                }
            }
        })
    })
    // ----------------------

    document.querySelector('.input_search').addEventListener("click", function (event) {
        event.stopPropagation();
    });

    var checkBox16 = document.getElementById("cbx-16");
    var formCheck16 = document.getElementById("checkInput16");

    var checkBox17 = document.getElementById("cbx-17");
    var formCheck17 = document.getElementById("checkInput17");

    checkBox16.addEventListener("change", function () {
        if (!checkBox16.checked) {
            checkBox17.disabled = checkBox17.checked;
            formCheck17.style.opacity = 1;
        } else {
            checkBox17.disabled = checkBox16.checked;
            formCheck17.style.opacity = 0.5;
        }
    });

    checkBox17.addEventListener("change", function () {
        if (!checkBox17.checked) {
            checkBox16.disabled = checkBox16.checked;
            formCheck16.style.opacity = 1;
        } else {
            checkBox16.disabled = checkBox17.checked;
            formCheck16.style.opacity = 0.5;
        }
    });

    var checkBox14 = document.getElementById("cbx-14");
    var formCheck14 = document.getElementById("checkInput14");

    var checkBox15 = document.getElementById("cbx-15");
    var formCheck15 = document.getElementById("checkInput15");

    checkBox14.addEventListener("change", function () {
        if (!checkBox14.checked) {
            checkBox15.disabled = checkBox15.checked;
            formCheck15.style.opacity = 1;
        } else {
            checkBox15.disabled = checkBox14.checked;
            formCheck15.style.opacity = 0.5;
        }
    });

    checkBox15.addEventListener("change", function () {
        if (!checkBox15.checked) {
            checkBox14.disabled = checkBox14.checked;
            formCheck14.style.opacity = 1;
        } else {
            checkBox14.disabled = checkBox15.checked;
            formCheck14.style.opacity = 0.5;
        }
    });

});




