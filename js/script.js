const emailInput = document.getElementById("emailInput");
const errorLabel = document.getElementById("errorLabel");
const submitBtn = document.getElementById("submitBtn");

const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

submitBtn.addEventListener("click", (event) => {
    event.preventDefault();

    const email = emailInput.value.trim();

    if (!emailRegex.test(email)) {
        errorLabel.classList.add("open");
        emailInput.classList.add("error");
    } else {
        errorLabel.classList.remove("open");
        emailInput.classList.remove("error");

        sessionStorage.setItem("userEmail", email);
        window.location.href = `success-page.html`;
    }
});
