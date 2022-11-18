/*=============== CHANGE BACKGROUND HEADER ===============*/

/*=============== SERVICES MODAL ===============*/

/*=============== MIXITUP FILTER PORTFOLIO ===============*/

/* Link active work */

/*=============== SWIPER TESTIMONIAL ===============*/

/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/

/*=============== LIGHT DARK THEME ===============*/

/*=============== SCROLL REVEAL ANIMATION ===============*/

/*----------Animation Trigger----------*/

const aboutTitle = document.querySelector(".header-intro");
const aboutSubTitle = document.querySelector(".header-sub");

const timelineContainer1 = document.querySelector(
  ".timeline-container-anim-01"
);
const timelineContainer2 = document.querySelector(
  ".timeline-container-anim-02"
);
const timelineContainer3 = document.querySelector(
  ".timeline-container-anim-03"
);

const skillsHeader = document.querySelector(".header-skills");
const skillCard1 = document.querySelector(".card-anim-01");
const skillCard2 = document.querySelector(".card-anim-02");
const skillCard3 = document.querySelector(".card-anim-03");

const projectsHeader = document.querySelector(".header-projects");
const project1 = document.querySelector(".card-project-anim-01");
const project2 = document.querySelector(".card-project-anim-02");
const project3 = document.querySelector(".card-project-anim-03");
const project4 = document.querySelector(".card-project-anim-04");
const project5 = document.querySelector(".card-project-anim-05");
const project6 = document.querySelector(".card-project-anim-06");

aboutTitle.classList.remove("anim-header-fade-down");
aboutSubTitle.classList.remove("anim-header-fade-up");
timelineContainer1.classList.remove("anim-header-fade-left");
timelineContainer2.classList.add("anim-header-fade-right");
timelineContainer3.classList.add("anim-header-fade-left");
skillsHeader.classList.remove("anim-header-fade-down");
skillCard1.classList.remove("anim-header-fade-up");
skillCard2.classList.remove("anim-header-fade-up");
skillCard3.classList.remove("anim-header-fade-up");
projectsHeader.classList.remove("anim-header-fade-down");
project1.classList.remove("anim-header-fade-up");
project2.classList.remove("anim-header-fade-up");
project3.classList.remove("anim-header-fade-up");
project4.classList.remove("anim-header-fade-up");
project5.classList.remove("anim-header-fade-up");
project6.classList.remove("anim-header-fade-up");

// Create the observer, same as before:
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    switch (entry.target.className) {
      case "section-about":
        if (entry.isIntersecting) {
          aboutTitle.classList.add("anim-header-fade-down");
          aboutSubTitle.classList.add("anim-header-fade-up");
          return;
        }

        aboutTitle.classList.remove("anim-header-fade-down");
        aboutSubTitle.classList.remove("anim-header-fade-up");

        break;

      case "section-skills":
        if (entry.isIntersecting) {
          skillsHeader.classList.add("anim-header-fade-down");

          return;
        }

        skillsHeader.classList.remove("anim-header-fade-down");

        break;

      case "timeline-education":
        if (entry.isIntersecting) {
          timelineContainer1.classList.add("anim-header-fade-left");
          timelineContainer2.classList.add("anim-header-fade-right");

          return;
        }

        timelineContainer1.classList.remove("anim-header-fade-left");
        timelineContainer2.classList.remove("anim-header-fade-right");

        break;

      case "timeline-job":
        if (entry.isIntersecting) {
          timelineContainer3.classList.add("anim-header-fade-left");

          return;
        }

        timelineContainer3.classList.remove("anim-header-fade-left");

        break;

      case "card-skill-01":
        if (entry.isIntersecting) {
          skillCard1.classList.add("anim-header-fade-up");
          return;
        }

        skillCard1.classList.remove("anim-header-fade-up");

        break;

      case "card-skill-02":
        if (entry.isIntersecting) {
          skillCard2.classList.add("anim-header-fade-up");
          return;
        }

        skillCard2.classList.remove("anim-header-fade-up");

        break;

      case "card-skill-03":
        if (entry.isIntersecting) {
          skillCard3.classList.add("anim-header-fade-up");
          return;
        }

        skillCard3.classList.remove("anim-header-fade-up");

        break;

      case "section-projects":
        if (entry.isIntersecting) {
          projectsHeader.classList.add("anim-header-fade-down");

          return;
        }

        projectsHeader.classList.remove("anim-header-fade-down");

        break;

      case "card-project-01":
        if (entry.isIntersecting) {
          project1.classList.add("anim-header-fade-up");
          return;
        }

        project1.classList.remove("anim-header-fade-up");

        break;

      case "card-project-02":
        if (entry.isIntersecting) {
          project2.classList.add("anim-header-fade-up");
          return;
        }

        project2.classList.remove("anim-header-fade-up");

        break;

      case "card-project-03":
        if (entry.isIntersecting) {
          project3.classList.add("anim-header-fade-up");
          return;
        }

        project3.classList.remove("anim-header-fade-up");

        break;

      case "card-project-04":
        if (entry.isIntersecting) {
          project4.classList.add("anim-header-fade-up");
          return;
        }

        project4.classList.remove("anim-header-fade-up");

        break;

      case "card-project-05":
        if (entry.isIntersecting) {
          project5.classList.add("anim-header-fade-up");
          return;
        }

        project5.classList.remove("anim-header-fade-up");

        break;

      case "card-project-06":
        if (entry.isIntersecting) {
          project6.classList.add("anim-header-fade-up");
          return;
        }

        project6.classList.remove("anim-header-fade-up");

        break;

      default:
        break;
    }
  });
});

observer.observe(document.querySelector(".section-about"));
observer.observe(document.querySelector(".timeline-education"));
observer.observe(document.querySelector(".timeline-job"));
observer.observe(document.querySelector(".section-skills"));
observer.observe(document.querySelector(".card-skill-01"));
observer.observe(document.querySelector(".card-skill-02"));
observer.observe(document.querySelector(".card-skill-03"));
observer.observe(document.querySelector(".section-projects"));
observer.observe(document.querySelector(".card-project-01"));
observer.observe(document.querySelector(".card-project-02"));
observer.observe(document.querySelector(".card-project-03"));
observer.observe(document.querySelector(".card-project-04"));
observer.observe(document.querySelector(".card-project-05"));
observer.observe(document.querySelector(".card-project-06"));
