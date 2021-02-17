//Подключение бургер-меню
$(document).ready(function() {    
    $('.burger__btn').click(function(event) {
        $('.burger__btn').toggleClass('burger__btn_active');
        $('.burger__menu').toggleClass('burger__menu_active');
    });
});

//Подключение слайдера
$(document).ready(function(){
    $('.present__slider').slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
        {
          breakpoint: 1550,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,            
          }
        },
        {
          breakpoint: 1050,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        },
      ]  
    });
  });
  //Второй слайдер
$(document).ready(function() {
  $('.product__slider').slick({
    arrows: true,
    infinite: true,
    centerMode: true, 
    dots: true,
    speed: 700,
    autoplay: true, 
    autoplaySpeed: 1200, 
    slidesToShow: 5,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1600,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,            
        }
      },
      {
        breakpoint: 996,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 996,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerPadding: '5px'
        }
      }
    ]
  });  
});
 