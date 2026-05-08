// =============================
// MOBILE MENU
// =============================
const menuToggle = document.querySelector(".menu-toggle");
const navMenu = document.querySelector("nav ul");
menuToggle?.addEventListener("click", () => {
  navMenu.classList.toggle("active");
});
// =============================
// UNIVERSAL SMOOTH SCROLL
// (Works for navbar + hire button)
// =============================
document.querySelectorAll('a[href^="#"]').forEach(link => {
  link.addEventListener("click", function(e) {
    e.preventDefault();
        const target = document.querySelector(this.getAttribute("href"));
        if (target) {
      target.scrollIntoView({
        behavior: "smooth",
        block: "start"
      });
    }
    
    // close mobile menu after click
    navMenu?.classList.remove("active");
  });
});
// =============================
// ACTIVE NAV (SCROLL SPY)
// =============================
const links = document.querySelectorAll("nav a");
window.addEventListener("scroll", () => {
  let fromTop = window.scrollY + 120;
    links.forEach(link => {
    let section = document.querySelector(link.getAttribute("href"));
        if (!section) return;
        if (
      section.offsetTop <= fromTop &&
      section.offsetTop + section.offsetHeight > fromTop
    ) {
      link.classList.add("active");
    } else {
      link.classList.remove("active");
    }
  });
});


// =============================
// SECTION REVEAL ANIMATION
// =============================
const sections = document.querySelectorAll("section");

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
      observer.unobserve(entry.target); // stop observing after show
    }
  });
}, {
  threshold: 0.2
});

sections.forEach(sec => observer.observe(sec));


// =============================
// TYPING EFFECT
// =============================
const typingElement = document.querySelector(".typing");

if (typingElement) {
  typingElement.innerHTML = ""; // prevent duplicate text
  
  const text = "Web Developer | Designer | Data Analyst | Problem Solver";
  let i = 0;
  
  function typeEffect() {
    if (i < text.length) {
      typingElement.innerHTML += text.charAt(i);
      i++;
      setTimeout(typeEffect, 70);
    }
  }
  
  typeEffect();
}


// =============================
// DARK MODE TOGGLE
// =============================
const themeToggle = document.getElementById("theme-toggle");

if (themeToggle) {
  
  // Load saved theme
  if (localStorage.getItem("theme") === "dark") {
    document.body.classList.add("dark-mode");
    themeToggle.innerHTML = '<i class="fa-solid fa-sun"></i>';
  }
  
  themeToggle.addEventListener("click", (e) => {
    e.preventDefault();
    
    document.body.classList.toggle("dark-mode");
    
    if (document.body.classList.contains("dark-mode")) {
      localStorage.setItem("theme", "dark");
      themeToggle.innerHTML = '<i class="fa-solid fa-sun"></i>';
    } else {
      localStorage.setItem("theme", "light");
      themeToggle.innerHTML = '<i class="fa-solid fa-moon"></i>';
    }
  });
}

function showContent(type) {
  const display = document.getElementById("display-area");

  let content = "";

  if (type === "education") {
    content = `
      <h3>Education Documents</h3>
      <div class="image-grid">
        <img src="edu1.jpg" onclick="openFile('e1.jpg')">
        <img src="edu2.jpg" onclick="openFile('e.jpg')">
      </div>
    `;
  }

  else if (type === "awards") {
    content = `
      <h3>Award Documents</h3>
      <div class="image-grid">
        <img src="award1.jpg" onclick="openFile('a1.jpg')">
        <img src="award2.jpg" onclick="openFile('a2.jpg')">
        <img src="award3.jpg" onclick="openFile('a3.jpg')">
      </div>
    `;
  }

  else if (type === "certificates") {
    content = `
      <h3>Certificates</h3>
      <div class="image-grid">
        <img src="cert1.jpg" onclick="openFile('c1.jpg')">
        <img src="cert2.jpg" onclick="openFile('c2.jpg')">
        <img src="cert3.jpg" onclick="openFile('c3.jpg')">
        <img src="cert4.jpg" onclick="openFile('c4.jpg')">
        <img src="cert5.jpg" onclick="openFile('c5.jpg')">
        <img src="cert6.jpg" onclick="openFile('c6.jpg')">
        <img src="cert7.jpg" onclick="openFile('data.png)">
        <img src="cert7.jpg" onclick="openFile('arti.png')">
        <img src="cert7.jpg" onclick="openFile('and.png')">
        <img src="cert7.jpg" onclick="openFile('pro.png')">
      </div>
    `;
  }

  display.innerHTML = content;
}

// OPEN IMAGE OR DOCUMENT IN NEW TAB
function openFile(file) {
  window.open(file, "_blank");
}