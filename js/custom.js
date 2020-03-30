$('.main-box').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    nextArrow: '<button class="next-arrow"><img src="images/icons/right-arrow.png"></button>',
    prevArrow: '<button class="back-arrow"><img src="images/icons/left-arrow.png"></button>',
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ]
  });
  
  $(".choose1").click(function(){
    $(".choose1").addClass ("active");
$(".choose2").removeClass ("active");
$(".choose3").removeClass ("active");
$(".choose4").removeClass ("active");
    $(".choose-text1").show(500);
    $(".choose-text2").hide(500);
    $(".choose-text3").hide(500);
    $(".choose-text4").hide(500);
  })
  $(".choose2").click(function(){
    $(".choose2").addClass ("active");
$(".choose1").removeClass ("active");
$(".choose3").removeClass ("active");
$(".choose4").removeClass ("active");
    $(".choose-text1").hide(500);
    $(".choose-text2").show(500);
    $(".choose-text3").hide(500);
    $(".choose-text4").hide(500);
  })
  $(".choose3").click(function(){
    $(".choose3").addClass ("active");
$(".choose1").removeClass ("active");
$(".choose2").removeClass ("active");
$(".choose4").removeClass ("active");
    $(".choose-text1").hide(500);
    $(".choose-text2").hide(500);
    $(".choose-text3").show(500);
    $(".choose-text4").hide(500);
  })
  $(".choose4").click(function(){
    $(".choose").addClass ("active");
$(".choose1").removeClass ("active");
$(".choose2").removeClass ("active");
$(".choose3").removeClass ("active");
    $(".choose-text1").hide(500);
    $(".choose-text2").hide(500);
    $(".choose-text3").hide(500);
    $(".choose-text4").show(500);
  })
