const cards = document.querySelectorAll(".selected-works .item");

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
      observer.unobserve(entry.target);
    }
  });
}, {
  threshold: 0.15
});

cards.forEach((card) => {
  observer.observe(card);
});

const skillCards = document.querySelectorAll(".skills > div");

const skillObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
      skillObserver.unobserve(entry.target);
    }
  });
}, {
  threshold: 0.2
});

skillCards.forEach((card, index) => {
  card.style.transitionDelay = `${index * 0.12}s`;
  skillObserver.observe(card);
});



const journeyItems = document.querySelectorAll(".journey-item");

function animateJourney() {
  const screenMiddle = window.innerHeight / 2;

  journeyItems.forEach((item) => {
    const rect = item.getBoundingClientRect();

    const itemMiddle = rect.top + rect.height / 2;

    // How close the card is to the middle of the screen
    const distance = Math.abs(itemMiddle - screenMiddle);

    if (distance < 40 && !item.classList.contains("animate-hover")) {
      item.classList.add("animate-hover");

      setTimeout(() => {
        item.classList.remove("animate-hover");
      }, 700);
    }
  });
}

window.addEventListener("scroll", animateJourney);

const DemartmentItems = document.querySelectorAll(".card-item");

const DepartmentObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {

      const item = entry.target;

      item.classList.add("animation-active");

      setTimeout(() => {
        item.classList.remove("animation-active");
      }, 300);
    }
  });
}, {
  root: null,
  rootMargin: "-45% 0px -45% 0px",
  threshold: 0
});

DemartmentItems.forEach((item) => {
  DepartmentObserver.observe(item);
});

var typed = new Typed("#name", {
  strings: ["Davi", "Prince", "David"],
  typeSpeed: 200,
  backSpeed: 100,
  backDelay: 1500,
  loop: true
})
var typed = new Typed("#build", {
  strings: ["code", "AI", "Robots"],
  typeSpeed: 200,
  backSpeed: 100,
  backDelay: 1500,
  loop: true
})

AOS.init()