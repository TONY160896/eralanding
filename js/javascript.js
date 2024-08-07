AOS.init({
    useClassNames: true,
    initClassName: false,
    offset: 100,
    delay: 0,
    duration: 800,
    once: true
});
$(document).ready(function() {

    $(window).scroll(function () {
        if ($(this).scrollTop() > 20) {
            $("header").addClass('fix')
        }
        else {
            $("header").removeClass('fix')
        }
    });
    /* goto top btn */
 $(".goto-top").click(function () {
  $("html, body").animate({scrollTop: 0}, 1000);
});
$(window).scroll(function () {
  if ($(this).scrollTop() > 250) {
      $(".goto-top").addClass('open')
  }
  else {
      $(".goto-top").removeClass('open')
  }
});
    

});
 


$(document).ready(function () {
    $('.menu-btn').click(function(){
        $('.header_menu').toggleClass('open');
        $('.menu-btn').toggleClass('open');
    });  
});

$(document).ready(function () {

    $("#banner").owlCarousel({
        loop: true,
        margin: 0,
        nav: false,
        autoplay: false,
        smartSpeed: 1000,
        autoplaySpeed: 1000,
        autoplayTimeout: 5000,
        mouseDrag: true,
        touchDrag: true,
        dots: false,
        responsiveClass: true,        
        rewind: true,
        responsive: {
          0: {
            items: 1,
          },
          600: {
            items: 1,
          },
          1000: {
            items: 1,
          },
        },
      });

    $('#whychoose').owlCarousel({
        margin: 0,
        center: true,
        loop: true,
        nav: false,
        dots:false,
        responsive: {
        0: {
           items: 1.5
        },
        768: {
           items: 2,
        
        },
        1025: {
           items: 3,
        }
        }
        
       
    })
    

    $('#subscription').owlCarousel({
        margin: 0,
        center: true,
        loop: true,
        nav: false,
        dots:false,
        responsive: {
        0: {
           items: 1.5
        },
        768: {
           items: 2,
        
        },
        1025: {
           items: 3,
        }
        }
    })

    $('.testi.owl-carousel').owlCarousel({
        items: 3,
        margin:20,
        lazyLoad: true,        
        autoPlay: true,
        autoPlayTimeout: 3000,
        loop:true,
        dots:true,
        responsive:{
          0:{
            items:1,
          },
          600:{
            items:2,
          },
          1000:{
            items:2,
          },
          1200:{
            items:3,
          }
        }
      });

    $(document).ready(function () {
        $('#location_detail').owlCarousel({
            loop:true,
            autoplayHoverPause: true,
            margin: 0,
            center: false,
            nav: true,
            autoplay: false,
            autoplayTimeout: 10000,
            smartSpeed: 1000,
            mouseDrag: true,
            touchDrag: true,
            dots: false,
            // animateIn: 'fadeIn',
            // animateOut: 'fadeOut',
            responsiveClass:true,
            rewind: true,
            responsive:{
                0:{
                    items: 1
                },
                600:{
                    items: 1
                },
                800:{
                    items: 1
                },
                1000:{
                    items: 1
                },
                1350:{
                    items: 1
                }
            
            }
        });
    });

    $("#resume").change(function () {
      var path = $(this).val();
      $("#file_label").text(path);
      $("#file_label").addClass('new-path');
  });  
});

