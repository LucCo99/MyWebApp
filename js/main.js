(function ($) {
    "use strict";

    // Spinner
    var spinner = function () {
        setTimeout(function () {
            if ($('#spinner').length > 0) {
                $('#spinner').removeClass('show');
            }
        }, 1);
    };
    spinner();
    
    
    // Initiate the wowjs
    new WOW().init();


    // Sticky Navbar
    $(window).scroll(function () {
        if ($(this).scrollTop() > 300) {
            $('.sticky-top').css('top', '0px');
        } else {
            $('.sticky-top').css('top', '-100px');
        }
    });
    
    
    // Dropdown on mouse hover
    const $dropdown = $(".dropdown");
    const $dropdownToggle = $(".dropdown-toggle");
    const $dropdownMenu = $(".dropdown-menu");
    const showClass = "show";
    
    $(window).on("load resize", function() {
        if (this.matchMedia("(min-width: 992px)").matches) {
            $dropdown.hover(
            function() {
                const $this = $(this);
                $this.addClass(showClass);
                $this.find($dropdownToggle).attr("aria-expanded", "true");
                $this.find($dropdownMenu).addClass(showClass);
            },
            function() {
                const $this = $(this);
                $this.removeClass(showClass);
                $this.find($dropdownToggle).attr("aria-expanded", "false");
                $this.find($dropdownMenu).removeClass(showClass);
            }
            );
        } else {
            $dropdown.off("mouseenter mouseleave");
        }
    });
    
    
    // Back to top button
    $(window).scroll(function () {
        if ($(this).scrollTop() > 300) {
            $('.back-to-top').fadeIn('slow');
        } else {
            $('.back-to-top').fadeOut('slow');
        }
    });
    $('.back-to-top').click(function () {
        $('html, body').animate({scrollTop: 0}, 1500, 'easeInOutExpo');
        return false;
    });


    // Facts counter
    $('[data-toggle="counter-up"]').counterUp({
        delay: 10,
        time: 2000
    });


    // Date and time picker
    $('.date').datetimepicker({
        format: 'L'
    });
    $('.time').datetimepicker({
        format: 'LT'
    });


    // Testimonials carousel
    $(".testimonial-carousel").owlCarousel({
        autoplay: true,
        smartSpeed: 1000,
        center: true,
        margin: 25,
        dots: true,
        loop: true,
        nav : false,
        responsive: {
            0:{
                items:1
            },
            768:{
                items:2
            },
            992:{
                items:3
            }
        }
    });
    
})(jQuery);


////

const swiper = new Swiper(".mySwiper", {
    slidesPerView: "auto",
    speed: 8500,
    loop: true,
    autoplay: {
        delay: 0,
        disableOnInteraction: false
    },
    freeMode: true,
    spaceBetween: 10, // Adjust the spacing between slides as needed
    centeredSlides: true,
    breakpoints: {
        // For smaller screens (e.g., mobile devices)
        768: {
            slidesPerView: 1
        },
        // For larger screens (e.g., desktop)
        1200: {
            slidesPerView: 4 // Adjust the number of logos per slide for desktop as needed
        }
    }
});

const swiperReverse = new Swiper(".mySwiperReverse", {
    slidesPerView: "auto",
    speed: 75000,
    loop: true,
    autoplay: {
        delay: 0,
        disableOnInteraction: true,
        reverseDirection: true,
        pauseOnMouseEnter: true
    },
    spaceBetween: 0,
    centeredSlides: true,
    breakpoints: {
        768: {
            slidesPerView: 1
        }
    }
});

document.querySelector(".mySwiper").addEventListener("mouseover", (e) => {
    swiper.autoplay.pause();
});


// swiper.on("mouseover", function () {
// 	console.log("hi");
// });


document.addEventListener("DOMContentLoaded", function() {
    // Get all navigation links
    const navLinks = document.querySelectorAll(".nav-link");

    // Add click event listener to each navigation link
    navLinks.forEach(link => {
        link.addEventListener("click", function() {
            // Remove the active class from all navigation links
            navLinks.forEach(link => {
                link.classList.remove("active");
            });

            // Add the active class to the clicked link
            this.classList.add("active");
        });
    });
});

  