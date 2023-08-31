document.addEventListener("DOMContentLoaded", function () {
    const productContainer = document.getElementById("product-container");
    const products = document.querySelectorAll(".product");
    const prevButton = document.getElementById("prev-button");
    const nextButton = document.getElementById("next-button");
    const productWidth = products[0].offsetWidth;
    let currentIndex = 0;

    function updateButtons() {
        prevButton.disabled = currentIndex === 0;
        nextButton.disabled = currentIndex >= products.length - 3;
    }

    prevButton.addEventListener("click", function () {
        currentIndex = (currentIndex - 3 + products.length) % products.length;
        const offset = currentIndex * productWidth;
        productContainer.scrollTo({
            left: offset,
            behavior: "smooth"
        });
        updateButtons();
    });

    nextButton.addEventListener("click", function () {
        currentIndex = (currentIndex + 3) % products.length;
        const offset = currentIndex * productWidth;
        productContainer.scrollTo({
            left: offset,
            behavior: "smooth"
        });
        updateButtons();
    });

    updateButtons();
});



