// Digital Cultural e-Portfolio Script
function initializeNavigation() {
  console.log("Digital Cultural e-Portfolio loaded successfully!");

  // Smooth scrolling for navigation links
  const navLinks = document.querySelectorAll(".main-nav a");

  navLinks.forEach((link) => {
    link.addEventListener("click", function (e) {
      e.preventDefault();
      const targetId = this.getAttribute("href");
      const targetSection = document.querySelector(targetId);

      if (targetSection) {
        targetSection.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }
    });
  });

  // Add active state to navigation
  window.addEventListener("scroll", function () {
    let current = "";
    const sections = document.querySelectorAll(".section");

    sections.forEach((section) => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.clientHeight;
      if (pageYOffset >= sectionTop - 200) {
        current = section.getAttribute("id");
      }
    });

    navLinks.forEach((link) => {
      link.classList.remove("active");
      if (link.getAttribute("href") === `#${current}`) {
        link.classList.add("active");
      }
    });
  });
}

// Initialize when DOM is loaded (for non-component version)
document.addEventListener("DOMContentLoaded", initializeNavigation);

// Initialize when components are loaded (for component version)
document.addEventListener("componentsLoaded", initializeNavigation);
