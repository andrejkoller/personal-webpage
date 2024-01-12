/* Copyright-Year Update */
let copyrightYear = document.write(new Date().getFullYear());

/* Scroll to Top */
let myButton = document.getElementById("myLogo");

function scrollToTop() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

/* Scroll to Sections */
/* Intro */
function scrollOnIntroClick() {
  const element = document.getElementById("introduction-section");
  element.scrollIntoView();
}

/* Scroll Trigger Animations */
/* Intro Image Animation */
const introImageProfile = document.querySelector(".introduction-image-profile");
introImageProfile.classList.remove("introduction-image-transition");

const introObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      introImageProfile.classList.add("introduction-image-transition");
      return;
    }
  });
});

/* Description Text Animation */
const descriptionProfile = document.querySelector(
  ".description-container-profile"
);
descriptionProfile.classList.remove("description-container-transition");

const descriptionObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      descriptionProfile.classList.add("description-container-transition");
      return;
    }
  });
});

/* Vita Content on Scroll */
const vitaProfile = document.querySelector(".vita-content-profile");
vitaProfile.classList.remove("vita-content-transition");

const vitaObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      vitaProfile.classList.add("vita-content-transition");
      return;
    }
  });
});

/* Video Container Animation on Scroll */
const projectProfile = document.querySelector(".project-profile");
projectProfile.classList.remove("project-profile-transition");

const projectObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      projectProfile.classList.add("project-profile-transition");
      return;
    }
  });
});

introObserver.observe(document.querySelector(".introduction-image"));
descriptionObserver.observe(document.querySelector(".description-container"));
vitaObserver.observe(document.querySelector(".vita-content"));
projectObserver.observe(document.querySelector(".project-container"));
