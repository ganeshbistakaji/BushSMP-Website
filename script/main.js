const html = document.documentElement;
const themeToggleBtns = document.querySelectorAll(".themeToggle");

function setTheme(theme) {
  html.setAttribute("data-theme", theme);
  localStorage.setItem("theme", theme);

  if (theme === "light") {
    document.querySelector(".hamburger").src =
      "./assets/icon/hamburgerLight.svg";

    document.querySelector(".closePopUp").src =
      "./assets/icon/hamburgerLight.svg";

    themeToggleBtns.forEach((btn) => {
      btn.src = "./assets/icon/lightTheme.svg";
      btn.alt = "Switch to dark theme";
      btn.setAttribute("aria-label", "Switch to dark theme");
    });
  } else {
    document.querySelector(".hamburger").src =
      "./assets/icon/hamburgerDark.svg";

    document.querySelector(".closePopUp").src =
      "./assets/icon/hamburgerDark.svg";

    themeToggleBtns.forEach((btn) => {
      btn.src = "./assets/icon/darkTheme.svg";
      btn.alt = "Switch to light theme";
      btn.setAttribute("aria-label", "Switch to light theme");
    });
  }
}

function toggleTheme() {
  const current = html.getAttribute("data-theme");
  const next = current === "dark" ? "light" : "dark";
  setTheme(next);
}

// Load saved theme
const savedTheme = localStorage.getItem("theme") || "light";
setTheme(savedTheme);

// Attach click event to all toggle buttons
themeToggleBtns.forEach((btn) => {
  btn.addEventListener("click", toggleTheme);
});

// Navbar Mobile
const hamburger = document.querySelector(".hamburger");
const header = document.querySelector(".header");

hamburger.addEventListener("click", () => {
  const isActive = hamburger.classList.contains("menu-open");

  if (isActive) {
    hamburger.classList.remove("menu-open");
    hamburger.classList.add("menu-closed");
    header.style.height = "72px";
  } else {
    hamburger.classList.remove("menu-closed");
    hamburger.classList.add("menu-open");
    header.style.height = "max-content";
  }
});

function openPopUp() {
  document.querySelector(".popUp").style.display = "flex";
}

function closePopUp() {
  document.querySelector(".popUp").style.display = "none";
}

function popUpClicked(platform) {
  if (platform === "mcbe") {
    const userAgent = navigator.userAgent.toLowerCase();
    const isMobile = /android|iphone|ipad|ipod/.test(userAgent);
    const isWindows = /windows/.test(userAgent);

    if (isMobile || isWindows) {
      // Directly open Minecraft PE/Bedrock
      window.location.href ="minecraft://?addExternalServer=BushSMP|bushsmp.net:27281";

      // Optional fallback if nothing happens after 3 seconds
      setTimeout(() => {
        navigator.clipboard.writeText(serverIP).then(() => {
          alert("Minecraft didn't open, the IP was copied instead.");
        });
      }, 5000);
    } else {
      // Fallback for unsupported platforms
      navigator.clipboard.writeText(serverIP).then(() => {
        alert("Ip copied!");
      });
    }
  }

  if (platform == "java") {
    navigator.clipboard.writeText("bushsmp.net").then(() => {
      alert("Ip copied!");
    });
  }
}
