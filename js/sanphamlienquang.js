const productList = document.querySelector('.product-list');
    const prevButton = document.querySelector('.prev-button');
    const nextButton = document.querySelector('.next-button');
    let currentIndex = 0;

    prevButton.addEventListener('click', () => {
      currentIndex = Math.max(currentIndex - 1, 0);
      updateSliderPosition();
    });

    nextButton.addEventListener('click', () => {
      currentIndex = Math.min(currentIndex + 1, productList.children.length - 1);
      updateSliderPosition();
    });

    function updateSliderPosition() {
      productList.style.transform = `translateX(-${currentIndex * (321 + 1)}px)`;
    }