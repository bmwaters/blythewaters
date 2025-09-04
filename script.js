const toggleBtn = document.getElementById("darkModeToggle");

// Apply the saved theme as soon as the page loads
document.addEventListener("DOMContentLoaded", () => {
  const savedTheme = localStorage.getItem("theme");

  if (savedTheme === "dark") {
    document.body.classList.add("dark-mode");
    toggleBtn.textContent = "☀️ Light Mode";
  } else {
    document.body.classList.remove("dark-mode");
    toggleBtn.textContent = "🌙 Dark Mode";
  }
});

// ✅ Toggle theme and save the user's choice
toggleBtn.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");

  if (document.body.classList.contains("dark-mode")) {
    toggleBtn.textContent = "☀️ Light Mode";
    localStorage.setItem("theme", "dark"); // save preference
  } else {
    toggleBtn.textContent = "🌙 Dark Mode";
    localStorage.setItem("theme", "light"); // save preference
  }
});
