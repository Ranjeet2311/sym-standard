// ---Animations --------------
gsap.config({
  nullTargetWarn: false,
  trialWarn: false,
});
gsap.from(".animation", { duration: 3, x: -1000, opacity: 0 });
gsap.from(".scooter-animation", {
  duration: 3,
  x: 1000,
  opacity: 0,
});

// -----Horizontal Slider -----------

const swiper = new Swiper(".swiper", {
  // Optional parameters
  direction: "horizontal",
  //   loop: true,
  speed: 400,

  breakpoints: {
    // when window width is >= 320px
    320: {
      slidesPerView: 1,
      spaceBetween: 40,
    },
    750: {
      slidesPerView: 1.8,
      spaceBetween: 40,
    },
    // when window width is >= 480px
    1000: {
      slidesPerView: 2.7,
      spaceBetween: 30,
    },
    1200: {
      slidesPerView: 3.7,
      spaceBetween: 30,
    },
    // when window width is >= 640px
    1470: {
      slidesPerView: 4.4,
      spaceBetween: 40,
    },
    1800: {
      slidesPerView: 4.7,
      spaceBetween: 40,
    },
  },

  pagination: {
    el: ".swiper-pagination",
    //     clickable: true,
  },

  scrollbar: {
    el: ".swiper-scrollbar",
  },
});

// -------Business Locations-----------

const allLocations = [
  {
    id: 1,
    name: "Špan d.o.o.",
    firstAdd: "Tržaška cesta 547",
    secondAdd: "1351 Brezovica pri Ljubljani",
    category: "Gorenjska",
  },
  {
    id: 2,
    name: "Avto center Šubelj d.o.o.",
    firstAdd: "Tržaška cesta 547",
    secondAdd: "1235, Radomlje",
    category: "Primorska",
  },
  {
    id: 3,
    name: "Špan d.o.o.",
    firstAdd: "Tržaška cesta 547",
    secondAdd: "1351 Brezovica pri Ljubljani",
    category: "Gorenjska",
  },
  {
    id: 4,
    name: "Avto center Šubelj d.o.o.",
    firstAdd: "Tržaška cesta 547",
    secondAdd: "1235, Radomlje",
    category: "Primorska",
  },
  {
    id: 5,
    name: "Avto center Šubelj d.o.o.",
    firstAdd: "Tržaška cesta 547",
    secondAdd: "1235, Radomlje",
    category: "Štajerska",
  },
  {
    id: 6,
    name: "Špan d.o.o.",
    firstAdd: "Tržaška cesta 547",
    secondAdd: "1351 Brezovica pri Ljubljani",
    category: "Štajerska",
  },
];

// ----adding event on all location buttons ------
const locationTabs = document.querySelectorAll("#location-button");
const locationsDiv = document.querySelector("#all-locations");

window.addEventListener("DOMContentLoaded", () => {
  locationsDisplay(allLocations);
});

locationTabs.forEach((tab) => {
  tab.addEventListener("click", (e) => {
    console.log(e.target.innerHTML);
    let value = e.target.innerHTML;

    const locationCategory = allLocations.filter(function (location) {
      if (location.category === value) {
        return location;
      }
    });

    if (
      value !== "Štajerska" &&
      value !== "Gorenjska" &&
      value !== "Primorska"
    ) {
      locationsDisplay(allLocations);
    } else {
      locationsDisplay(locationCategory);
    }
  });
});

function locationsDisplay(local) {
  let locations = local.map((location) => {
    return ` <div class="location-box">
                        <h2>${location.name} </h2>
                        <p>${location.firstAdd} <br>
                              ${location.secondAdd}</p>
                        <div class="divider"></div>

                        <div class="contact-images">
                              <img src="./images/icons/mobile.svg" alt="smartphone">
                              <img src="./images/icons/envelope.svg" alt="envelope">
                              <img src="./images/icons/globe.svg" alt="globe">
                              <img src="./images/icons/map-location.svg" alt="map">
                        </div>
                  </div>`;
  });

  let showLocations = locations.join("");
  locationsDiv.innerHTML = showLocations;
}

// --------------------------------------
const burgerMenu = document.getElementById("burger-menu");
const burgerMenuWrapper = document.querySelector(".burger-menu-wrapper");
const nav = document.querySelector("#nav");
const logoImg = document.querySelector("#logo-img");
const navLinks = document.querySelector("#nav-links");
const burgerWrap = document.querySelector(".burger-menu-wrapper");
const burgerSpan = document.querySelector("#burger-span");
// const header = document.querySelector("#header");

// ---- Page scroll --------------

window.addEventListener("scroll", (e) => {
  if (window.innerHeight + window.pageYOffset == window.innerHeight) {
    navLinks.classList.remove("hide-navlinks");
    logoImg.classList.remove("padding-reduce");

    console.log("At top");
  } else {
    navLinks.classList.add("hide-navlinks");
    logoImg.classList.add("padding-reduce");
  }
});

// --------------Hamburger

burgerMenuWrapper.addEventListener("click", function () {
  burgerMenu.classList.toggle("close");
  nav.classList.toggle("hide");
  burgerSpan.classList.toggle("burgerSpanColor");
});

// ------------
// $(document).ready(function () {
//   $("#burger-menu").click(function () {
//     $(this).toggleClass("open");
//   });
// });
// $(document).ready(function () {
//   $(".burger-menu-wrapper").click(function () {
//     $("#burger-menu").toggleClass("open");
//     $("#nav").toggleClass("hide");
//     //     $("#burger-span").toggleClass("burgerSpanColor");
//     $('[id="burger-span"]').toggleClass("burgerSpanColor");
//   });
// });
