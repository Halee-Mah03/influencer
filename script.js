document.querySelector(".scroll-to-top").addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});
window.addEventListener("scroll", () => {
  const scrollBtn = document.querySelector(".scroll-to-top");
  if (window.scrollY > 200) {
    scrollBtn.style.display = "block";
  } else {
    scrollBtn.style.display = "none";
  }
});

const mobileMenu = document.getElementById("mobileMenu");
const breakpoint = 768;

function toggleMenu() {
  mobileMenu.classList.toggle("active");
}

function closeMenu() {
  mobileMenu.classList.remove("active");
}

// Auto close menu on window resize to desktop
window.addEventListener("resize", () => {
  if (window.innerWidth > breakpoint) {
    closeMenu();
  }
});
