$('.img-slider').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: true,
    asNavFor: '.img-sliders'
  });
  $('.img-sliders').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    asNavFor: '.img-slider',
    dots: true,
    centerMode: true,
    focusOnSelect: true,
    prevArrow:"<button type='button' class='slick-prev pull-left'><i class='fa fa-angle-left' aria-hidden='true'></i></button>",
    
    nextArrow:"<button type='button' class='slick-next pull-right'><i class='fa fa-angle-right' aria-hidden='true'></i></button>"
  });
  let selectedSize = null;

  function selectSize(size) {
    if (selectedSize) {
      selectedSize.classList.remove('selected');
    }
    selectedSize = event.target;
    selectedSize.classList.add('selected');
    console.log('Selected size:', size);
  }
  let activeSection = null;

  function toggleContent(section) {
    const content = document.getElementById(`content${section}`);
    
    if (activeSection !== null && activeSection !== section) {
      const activeContent = document.getElementById(`content${activeSection}`);
      activeContent.classList.add('hidden');
      activeContent.classList.remove('expanded');
    }

    content.classList.toggle('hidden');
    content.classList.toggle('expanded');
    activeSection = activeSection === section ? null : section;
}
