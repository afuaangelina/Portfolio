// Get the dark mode button
const button = document.getElementById("theme-toggle");

const language = button.dataset.language;

const text = {

    en: {
        dark: "🌙 Dark Mode",
        light: "☀️ Light Mode",
        feedback: "✅ Thank you! Your feedback has been received."
    },

    de: {
        dark: "🌙 Dunkelmodus",
        light: "☀️ Lichtmodus",
        feedback: "✅ Vielen Dank! Dein Feedback wurde erfolgreich übermittelt."
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
/* ===========================
   Feedback Form
=========================== */

const form = document.getElementById("feedback-form");

if (form) {

    form.addEventListener("submit", async function (event) {

        event.preventDefault();

        const message = document.getElementById("success-message");

        const formData = new FormData(form);

        try {

            const response = await fetch(form.action, {

                method: form.method,

                body: formData,

                headers: {
                    Accept: "application/json"
                }

            });

            if (response.ok) {

                message.textContent = text[language].feedback;

                message.classList.add("show");

                form.reset();

            } else {

                message.textContent =
                    language === "de"
                    ? "❌ Beim Senden ist ein Fehler aufgetreten."
                    : "❌ Something went wrong.";

                message.classList.add("show");

            }

        }

        catch (error) {

            message.textContent =
                language === "de"
                ? "❌ Keine Verbindung möglich."
                : "❌ Could not connect.";

            message.classList.add("show");

        }

        setTimeout(function () {

            message.classList.remove("show");

        }, 4000);

    });

}
