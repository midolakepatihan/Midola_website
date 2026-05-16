/* ============================================================
   MIDOLA – script.js
   Fungsi:
   - Loading screen
   - Navbar scroll effect
   - Mobile menu
   - Scroll reveal animation
   - Countdown timer
   - Back to top button
   - Floating particles
   - Hero parallax effect
   ============================================================ */


/* ============================================================
   LOADING SCREEN
============================================================ */
window.addEventListener("load", () => {
  const loader = document.getElementById("loader");

  // Hilangkan loader setelah halaman selesai dimuat
  setTimeout(() => {
    loader.classList.add("hidden");

    // Hapus loader dari DOM setelah animasi selesai
    setTimeout(() => {
      loader.style.display = "none";
    }, 600);

  }, 1800);
});


/* ============================================================
   NAVBAR SCROLL EFFECT
============================================================ */
const navbar = document.getElementById("navbar");

window.addEventListener("scroll", () => {

  // Navbar berubah warna saat discroll
  if (window.scrollY > 50) {
    navbar.classList.add("scrolled");
  } else {
    navbar.classList.remove("scrolled");
  }

});


/* ============================================================
   MOBILE NAVIGATION
============================================================ */
const navToggle = document.getElementById("navToggle");
const navMobile = document.getElementById("navMobile");

navToggle.addEventListener("click", () => {

  navToggle.classList.toggle("open");
  navMobile.classList.toggle("open");

});

// Tutup menu setelah klik link
document.querySelectorAll(".nav-mobile a").forEach(link => {

  link.addEventListener("click", () => {
    navToggle.classList.remove("open");
    navMobile.classList.remove("open");
  });

});


/* ============================================================
   SCROLL REVEAL ANIMATION
============================================================ */
const revealElements = document.querySelectorAll(".reveal");

const revealOnScroll = () => {

  const triggerBottom = window.innerHeight * 0.85;

  revealElements.forEach(element => {

    const elementTop = element.getBoundingClientRect().top;

    if (elementTop < triggerBottom) {
      element.classList.add("visible");
    }

  });

};

// Jalankan pertama kali
revealOnScroll();

// Jalankan saat scroll
window.addEventListener("scroll", revealOnScroll);


/* ============================================================
   COUNTDOWN TIMER
============================================================ */

// Tanggal acara
const eventDate = new Date("May 31, 2026 15:30:00").getTime();

const daysEl = document.getElementById("cd-days");
const hoursEl = document.getElementById("cd-hours");
const minutesEl = document.getElementById("cd-minutes");
const secondsEl = document.getElementById("cd-seconds");

function updateCountdown() {

  const now = new Date().getTime();
  const distance = eventDate - now;

  // Jika acara sudah dimulai
  if (distance < 0) {

    daysEl.innerHTML = "00";
    hoursEl.innerHTML = "00";
    minutesEl.innerHTML = "00";
    secondsEl.innerHTML = "00";

    return;
  }

  // Perhitungan waktu
  const days = Math.floor(distance / (1000 * 60 * 60 * 24));

  const hours = Math.floor(
    (distance % (1000 * 60 * 60 * 24)) /
    (1000 * 60 * 60)
  );

  const minutes = Math.floor(
    (distance % (1000 * 60 * 60)) /
    (1000 * 60)
  );

  const seconds = Math.floor(
    (distance % (1000 * 60)) /
    1000
  );

  // Tampilkan
  daysEl.innerHTML = String(days).padStart(2, "0");
  hoursEl.innerHTML = String(hours).padStart(2, "0");
  minutesEl.innerHTML = String(minutes).padStart(2, "0");
  secondsEl.innerHTML = String(seconds).padStart(2, "0");
}

// Update setiap detik
updateCountdown();
setInterval(updateCountdown, 1000);


/* ============================================================
   BACK TO TOP BUTTON
============================================================ */
const backToTop = document.getElementById("backToTop");

window.addEventListener("scroll", () => {

  // Munculkan tombol jika scroll jauh
  if (window.scrollY > 400) {
    backToTop.classList.add("visible");
  } else {
    backToTop.classList.remove("visible");
  }

});

// Scroll ke atas saat diklik
backToTop.addEventListener("click", () => {

  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });

});


/* ============================================================
   FLOATING PARTICLES
============================================================ */
const particlesContainer = document.getElementById("particles-container");

// Icon dekorasi
const particleIcons = [
  "🎈",
  "🪀",
  "🎮",
  "⭐",
  "✨",
  "⚽",
  "🏃",
  "🎯",
  "🪁",
  "🌈"
];

function createParticle() {

  const particle = document.createElement("div");

  particle.classList.add("particle");

  // Random icon
  particle.innerHTML =
    particleIcons[Math.floor(Math.random() * particleIcons.length)];

  // Posisi random
  particle.style.left = Math.random() * 100 + "vw";

  // Ukuran random
  particle.style.fontSize =
    Math.random() * 20 + 18 + "px";

  // Durasi animasi random
  particle.style.animationDuration =
    Math.random() * 10 + 10 + "s";

  // Opacity random
  particle.style.opacity =
    Math.random() * 0.3 + 0.1;

  particlesContainer.appendChild(particle);

  // Hapus setelah selesai
  setTimeout(() => {
    particle.remove();
  }, 20000);

}

// Buat partikel berkala
setInterval(createParticle, 800);


/* ============================================================
   HERO PARALLAX EFFECT
============================================================ */
const heroBg = document.getElementById("heroBg");

window.addEventListener("scroll", () => {

  const scrollY = window.scrollY;

  // Gerakan background lebih lambat
  heroBg.style.transform =
    `translateY(${scrollY * 0.35}px) scale(1.05)`;

});


/* ============================================================
   BUTTON RIPPLE EFFECT
============================================================ */
const buttons = document.querySelectorAll(".btn");

buttons.forEach(button => {

  button.addEventListener("click", function (e) {

    const circle = document.createElement("span");

    const diameter = Math.max(
      this.clientWidth,
      this.clientHeight
    );

    const radius = diameter / 2;

    circle.style.width = circle.style.height =
      `${diameter}px`;

    circle.style.left =
      `${e.clientX - this.offsetLeft - radius}px`;

    circle.style.top =
      `${e.clientY - this.offsetTop - radius}px`;

    circle.classList.add("ripple");

    const ripple = this.querySelector(".ripple");

    if (ripple) {
      ripple.remove();
    }

    this.appendChild(circle);

  });

});


/* ============================================================
   SMOOTH ACTIVE NAV LINK
============================================================ */
const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".nav-links a");

window.addEventListener("scroll", () => {

  let current = "";

  sections.forEach(section => {

    const sectionTop = section.offsetTop;

    if (pageYOffset >= sectionTop - 200) {
      current = section.getAttribute("id");
    }

  });

  navLinks.forEach(link => {

    link.classList.remove("active");

    if (link.getAttribute("href").includes(current)) {
      link.classList.add("active");
    }

  });

});


/* ============================================================
   PERFORMANCE OPTIMIZATION
============================================================ */

// Kurangi efek jika device lambat
const isMobile = window.innerWidth < 768;

if (isMobile) {

  // Partikel lebih sedikit di HP
  clearInterval();

}


/* ============================================================
   CONSOLE MESSAGE
============================================================ */
console.log(`
🎉 MIDOLA WEBSITE ACTIVE
========================
Minggu Dolanan Lawas
Main Tradisional Tanpa Gawai
========================
`);

/* ============================================================
   TOGGLE RULES PANEL
============================================================ */

function toggleRules(button) {
  // Cari panel aturan di dalam card yang sama
  const card = button.closest(".game-card");
  const panel = card.querySelector(".rules-panel");

  // Toggle class
  button.classList.toggle("active");
  panel.classList.toggle("show");

  // Update accessibility
  const isOpen = panel.classList.contains("show");
  button.setAttribute("aria-expanded", isOpen);
} 
