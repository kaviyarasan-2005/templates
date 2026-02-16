function toggleMenu() {
  document.getElementById("navLinks").classList.toggle("active");
}

function toggleTheme() {
  document.body.classList.toggle("dark");
  localStorage.setItem("theme",
    document.body.classList.contains("dark") ? "dark" : "light"
  );
}

function toggleDirection() {
  const html = document.documentElement;
  const current = html.getAttribute("dir");

  if (current === "rtl") {
    html.setAttribute("dir", "ltr");
    localStorage.setItem("direction", "ltr");
  } else {
    html.setAttribute("dir", "rtl");
    localStorage.setItem("direction", "rtl");
  }
}

window.onload = function() {
  const savedTheme = localStorage.getItem("theme");
  const savedDirection = localStorage.getItem("direction");

  if (savedTheme === "dark") {
    document.body.classList.add("dark");
  }

  if (savedDirection) {
    document.documentElement.setAttribute("dir", savedDirection);
  }
};
