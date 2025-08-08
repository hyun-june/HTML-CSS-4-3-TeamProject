const sections = document.querySelectorAll("section");
const dots = document.querySelectorAll(".dot");

const thresholdValue = window.innerWidth <= 768 ? 0.4 : 0.6;

// Scroll into view on click
dots.forEach(dot => {
  dot.addEventListener("click", () => {
    const targetId = dot.getAttribute("data-target");
    document.getElementById(targetId).scrollIntoView({ behavior: "smooth" });
  });
});

// Highlight active dot
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      dots.forEach(dot => dot.classList.remove("active"));
      const activeDot = document.querySelector(`.dot[data-target="${entry.target.id}"]`);
      if (activeDot) activeDot.classList.add("active");
    }
  });
}, { threshold: thresholdValue });

sections.forEach(section => observer.observe(section));
