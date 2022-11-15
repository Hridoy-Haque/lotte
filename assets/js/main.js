window.addEventListener("load", function () {
  let projectContainer = document.querySelector(".img-galary");

  if (projectContainer) {
    let portfolioIsotope = new Isotope(projectContainer, {
      itemSelector: ".item",
      layoutMode: "fitRows",
    });

    let items = document.querySelectorAll(".item-lists li");

    items.forEach((item) => {
      item.addEventListener("click", function (e) {
        items.forEach((el) => {
          el.classList.remove("active");
        });
        e.target.classList.add("active");
        portfolioIsotope.arrange({
          filter: this.getAttribute("data-filter"),
        });
        // aos_init();
      });
    });
  }
  // swipper js code

  var swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    spaceBetween: 20,
    freeMode: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    autoplay: {
      delay: 6000,
      disableOnInteraction: false,
    },
    breakpoints: {
      575: {
        slidesPerView: 2,
      },

      1600: {
        slidesPerView: 3,
      },
    },
  });

  // scroll top button

  const scrollBtn = document.getElementById("scroll_btn");

  function scrollFun() {
    let top = window.scrollY;
    if (top > 200) {
      scrollBtn.classList.add("showBtn");
    } else {
      scrollBtn.classList.remove("showBtn");
    }
    // scroll top function

    if (scrollBtn) {
      scrollBtn.addEventListener("click", function () {
        document.body.scrollTop = 0; // For Safari
        document.documentElement.scrollTop = 0;
      });
    }
  }
  // scroll top function
  window.addEventListener("scroll", scrollFun);
  scrollFun();
});
