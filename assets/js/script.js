AOS.init();
new WOW().init();

const observer = lozad();
observer.observe();

$('[data-slick]').slick();

// Fancybox Config
// $('[data-fancybox]').fancybox()
// Fancybox.bind('[data-fancybox="gallery"]', {
//     Toolbar: false,
//     animated: false,
//     dragToClose: false,
  
//     showClass: false,
//     hideClass: false,
  
//     closeButton: "top",
  
//     Image: {
//       click: "close",
//       wheel: "slide",
//       zoom: false,
//       fit: "cover",
//     },
  
//     Thumbs: {
//       minScreenHeight: 0,
//     },
//   });
  

// Menu Start //
function menuOpen() {
    $('body').addClass('menu-open');
    $('.hamburger').addClass('active');
    $('.navbar-nav').addClass('menuhide');
}
function menuClose() {
    $('body').removeClass('menu-open');
    $('.hamburger').removeClass('active');
    $('.navbar-nav').removeClass('menuhide');
}

/** Menu **/
let t1 = gsap.timeline({
    paused: true,
    onStart: menuOpen,
    onReverseComplete: menuClose,
});

t1.to(".nav-container", {
    duration: 0.8,
    clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",            
    right: 0,
    ease: "Power3.InOut",
});

t1.from(".leftMenu  ", {
    stagger: 0.05,
    opacity: 0,
    y: 20,
    ease: "Power3.InOut",
}, "-=0");
t1.from(".mainNav__col--right ul", {
    stagger: 0.05,
    opacity: 0,
    y: 20,
    ease: "Power3.InOut",
}, "-=0");

t1.from(".mobile-btn", {
    stagger: 0.05,
    opacity: 0,
    y: 20,
    ease: "Power3.InOut",
}, "-=0");

t1.reverse();

$('.menu-open-test').on('click', function () {
    t1.reversed(!t1.reversed());
});

// Menu End //

$(".signup-title").click(function () {
    
    $header = $(this);
    //getting the next element
    $header.toggleClass('title-active');
    $content = $header.next('.gform_wrapper');
    //open up the content needed - toggle the slide- if visible, slide up, if not slidedown.
    $content.slideToggle(500, function () {
        //execute this after slideToggle is done
        //change text of header based on visibility of content div
    });

});


// Tabs Start
$('ul.tabs li').click(function () {
    var $this = $(this);
    var $theTab = $(this).attr('id');
    if ($this.hasClass('active')) {
        // do nothing
    } else {
        $this.closest('.tabs_wrapper').find('ul.tabs li, .tabs_container .tab_content').removeClass('active');
        $('.tabs_container .tab_content[data-tab="' + $theTab + '"], ul.tabs li[id="' + $theTab + '"]').addClass('active');
    }
});


// https://swiperjs.com/ 
// ===================== -->

var mySwiper = new Swiper ('.swiper-container', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
    speed: 1200,
    grabCursor: true,
    mousewheel: true,

    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
      clickable: true,
    },

    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  
    on: {
      slideChangeTransitionStart: function () {
          // Slide captions
          var swiper = this;
          setTimeout(function () {
            var currentTitle = $(swiper.slides[swiper.activeIndex]).attr("data-title");
            var currentSubtitle = $(swiper.slides[swiper.activeIndex]).attr("data-subtitle");
          }, 500);
          gsap.to($(".current-title"), 0.4, {autoAlpha: 0, y: -40, ease: Power1.easeIn});
          gsap.to($(".current-subtitle"), 0.4, {autoAlpha: 0, y: -40, delay: 0.15, ease: Power1.easeIn});
      },
      slideChangeTransitionEnd: function () {
      		// Slide captions
          var swiper = this;
          var currentTitle = $(swiper.slides[swiper.activeIndex]).attr("data-title");
          var currentSubtitle = $(swiper.slides[swiper.activeIndex]).attr("data-subtitle");
          $(".slide-captions").html(function() {
            return "<h2 class='current-title'>" + currentTitle + "</h2>" + "<h3 class='current-subtitle'>" + currentSubtitle + "</h3>";
          });
          gsap.from($(".current-title"), 0.4, {autoAlpha: 0, y: 40, ease: Power1.easeOut});
          gsap.from($(".current-subtitle"), 0.4, {autoAlpha: 0, y: 40, delay: 0.15, ease: Power1.easeOut});
      }
    }
});

// Slide captions
var currentTitle = $(mySwiper.slides[mySwiper.activeIndex]).attr("data-title");
var currentSubtitle = $(mySwiper.slides[mySwiper.activeIndex]).attr("data-subtitle");
$(".slide-captions").html(function() {
  return "<h2 class='current-title'>" + currentTitle + "</h2>" + "<h3 class='current-subtitle'>" + currentSubtitle + "</h3>";
});