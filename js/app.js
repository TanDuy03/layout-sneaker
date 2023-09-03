$(document).ready(function() {
  $('.product-detail_thumb').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: true,
    asNavFor: '.product-detail_gallery',
  });
  $('.product-detail_gallery').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    asNavFor: '.product-detail_thumb',
    dots: false,
    centerMode: true,
    focusOnSelect: true,
    prevArrow:"<button type='button' class='slick-prev pull-left'><i class='fa fa-angle-left' aria-hidden='true'></i></button>",
    nextArrow:"<button type='button' class='slick-next pull-right'><i class='fa fa-angle-right' aria-hidden='true'></i></button>",
      responsive: [
      {
        breakpoint: 768,
        settings: {
          arrows: true,
          centerMode: true,
          centerPadding: '40px',
          slidesToShow: 3
        }
      },
      {
        breakpoint: 480,
        settings: {
          arrows: true,
          centerMode: true,
          centerPadding: '40px',
          slidesToShow: 1
        }
      }
    ]
  });
  $('.product-relate_item').slick({
    slidesToShow: 4,
    arrows: true,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1500,
    centerMode: true,
    centerPadding: '40px',
    prevArrow:"<button type='button' class='arrow_prev slick-prev pull-left'><i class='fa fa-angle-left' aria-hidden='true'></i></button>",
    nextArrow:"<button type='button' class='arrow_next slick-next pull-right'><i class='fa fa-angle-right' aria-hidden='true'></i></button>",
    responsive: [
      {
        breakpoint: 1000,
        settings: {
          arrows: true,
          centerMode: true,
          centerPadding: '40px',
          slidesToShow: 2
        }
      },
      {
        breakpoint: 768,
        settings: {
          arrows: true,
          centerMode: true,
          centerPadding: '40px',
          slidesToShow: 1
        }
      },
      {
        breakpoint: 480,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: '20px',
          slidesToShow: 1
        }
      }
    ]
  });
})







// $('.img-slider').slick({
//     slidesToShow: 1,
//     slidesToScroll: 1,
//     arrows: false,
//     fade: true,
//     asNavFor: '.img-sliders'
//   });
//   $('.img-sliders').slick({
//     slidesToShow: 3,
//     slidesToScroll: 1,
//     asNavFor: '.img-slider',
//     dots: true,
//     centerMode: true,
//     focusOnSelect: true,
//     prevArrow:"<button type='button' class='slick-prev pull-left'><i class='fa fa-angle-left' aria-hidden='true'></i></button>",
    
//     nextArrow:"<button type='button' class='slick-next pull-right'><i class='fa fa-angle-right' aria-hidden='true'></i></button>"
//   });
//   let selectedSize = null;

//   function selectSize(size) {
//     if (selectedSize) {
//       selectedSize.classList.remove('selected');
//     }
//     selectedSize = event.target;
//     selectedSize.classList.add('selected');
//     console.log('Selected size:', size);
//   }
//   let activeSection = null;

//   function toggleContent(section) {
//     const content = document.getElementById(`content${section}`);
    
//     if (activeSection !== null && activeSection !== section) {
//       const activeContent = document.getElementById(`content${activeSection}`);
//       activeContent.classList.add('hidden');
//       activeContent.classList.remove('expanded');
//     }

//     content.classList.toggle('hidden');
//     content.classList.toggle('expanded');
//     activeSection = activeSection === section ? null : section;
// }
// document.addEventListener("DOMContentLoaded", function() {
//   var slickDots = document.querySelector(".slick-dots");
//   if (slickDots) {
//       slickDots.style.display = "none";
//   }
// });