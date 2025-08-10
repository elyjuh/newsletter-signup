const emailInput = document.getElementById("emailInput");
const errorLabel = document.getElementById("errorLabel");
const submitBtn = document.getElementById("submitBtn");

submitBtn.addEventListener ("click",  (event) => {
    event.preventDefault();

    const email = emailInput.value.trim();

    if (!email.includes("@")) {
        errorLabel.classList.add("open");
        emailInput.classList.add("error");   
    } else {
        errorLabel.classList.remove("open");
        emailInput.classList.remove("error");

        sessionStorage.setItem("userEmail", email);
        window.location.href = `success-page.html`;
        
    }   
});

