const welcomeEmail = document.getElementById("userEmail");
welcomeEmail.textContent = sessionStorage.getItem("userEmail") || "";

const dismissBtn = document.getElementById("dismissBtn");

dismissBtn.addEventListener("click", (event) => {
    window.location.href = "index.html";
});