let swiper = new Swiper('.swiper', {
  // Params
  direction: 'horizontal',
  loop: true,

  // pagination
  pagination: {
    el: '.swiper-pagination',
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

});

let swiperNews = new Swiper('.swiperCases', {
  // params
  direction: 'horizontal',
  loop: true,

  slidesPerView: 2,
  spaceBetween: 10,
  freeMode: true,
  
  breakpoints: {
    540: {
      slidesPerView: 3,
      spaceBetween: 10,
    },
    768: {
      slidesPerView: 4,
      spaceBetween: 10,
    },
    1200: {
      slidesPerView: 5,
      spaceBetween: 10,
    },
    1400: {
      slidesPerView: 6,
      spaceBetween: 10,
    },
   
  },

  // Navigation arrows
  navigation: {
    nextEl: '#swiper-button-next1',
    prevEl: '#swiper-button-prev1',
  },

});

let swiperClients = new Swiper('.swiperClients', {
  // Params
  direction: 'horizontal',
  loop: true,

  slidesPerView: 2,
  spaceBetween: 10,
  freeMode: true,
  autoplay: {
    delay: 2000,
    pauseOnMouseEnter: true,
  },

  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    500: {
      slidesPerView: 3,
      spaceBetween: 10,
    },
    640: {
      slidesPerView: 4,
      spaceBetween: 10,
    },
    768: {
      slidesPerView: 4,
      spaceBetween: 10,
    },
    800: {
      slidesPerView: 5,
      spaceBetween: 10,
    },
   
    1400: {
      slidesPerView: 7,
      spaceBetween: 10,
    },
    
  },

  // Navigation arrows
  navigation: {
    nextEl: '#swiper-button-next',
    prevEl: '#swiper-button-prev',
  },

});

// SCROLL NAVIGATION START

// Select all links with hashes
$('a[href*="#"]')
  // Remove links that don't actually link to anything
  .not('[href="#"]')
  .not('[href="#0"]')
  .click(function(event) {
    // On-page links
    if (
      location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') 
      && 
      location.hostname == this.hostname
    ) {
      // Figure out element to scroll to
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      // Does a scroll target exist?
      if (target.length) {
        // Only prevent default if animation is actually gonna happen
        event.preventDefault();
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1000, function() {
          // Callback after animation
          // Must change focus!
          var $target = $(target);
          $target.focus();
          if ($target.is(":focus")) { // Checking if the target was focused
            return false;
          } else {
            $target.attr('tabindex','-1'); // Adding tabindex for elements not focusable
            $target.focus(); // Set focus again
          };
        });
      }
    }
  });
// SCROLL NAVIGATION END

//SCROLL ACTIVE LINK START

const sections = document.querySelectorAll("section");
const navLi = document.querySelectorAll("nav ul li a");
window.onscroll = () => {
  var current = "";

  sections.forEach((section) => {
    const sectionTop = section.offsetTop;
    if (pageYOffset >= sectionTop - 100 ) {
      current = section.getAttribute("id"); }
  });

  navLi.forEach((li) => {
    li.classList.remove("active");
    if (li.classList.contains(current)) {
      li.classList.add("active");
    }
  });
};
//SCROLL ACTIVE LINK END