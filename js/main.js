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

const journeyObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {

      const item = entry.target;

      item.classList.add("animate-hover");

      setTimeout(() => {
        item.classList.remove("animate-hover");
      }, 300);
    }
  });
}, {
  root: null,
  rootMargin: "-45% 0px -45% 0px",
  threshold: 0
});

journeyItems.forEach((item) => {
  journeyObserver.observe(item);
});


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