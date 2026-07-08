// Get the dark mode button
const button = document.getElementById("theme-toggle");

// Check if the user previously chose dark mode
if (localStorage.getItem("theme") === "dark") {
    document.body.classList.add("dark-mode");
    button.textContent = "☀️ Light Mode";
}

// When the button is clicked
button.addEventListener("click", function () {

    document.body.classList.toggle("dark-mode");

    // Is dark mode currently enabled?
    if (document.body.classList.contains("dark-mode")) {

        localStorage.setItem("theme", "dark");

        button.textContent = "☀️ Light Mode";

    } else {

        localStorage.setItem("theme", "light");

        button.textContent = "🌙 Dark Mode";

    }

});
