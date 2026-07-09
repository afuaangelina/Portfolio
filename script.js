// Get the dark mode button
const button = document.getElementById("theme-toggle");

const language = button.dataset.language;

const text = {
    en: {
        dark: "🌙 Dark Mode",
        light: "☀️ Light Mode"
    },

    de: {
        dark: "🌙 Dunkelmodus",
        light: "☀️ Lichtmodus"
    }
};

// Check saved theme
if (localStorage.getItem("theme") === "dark") {

    document.body.classList.add("dark-mode");

    button.textContent = text[language].light;

}

button.addEventListener("click", function () {

    document.body.classList.toggle("dark-mode");

    if (document.body.classList.contains("dark-mode")) {

        localStorage.setItem("theme", "dark");

        button.textContent = text[language].light;

    }

    else {

        localStorage.setItem("theme", "light");

        button.textContent = text[language].dark;

    }

});
