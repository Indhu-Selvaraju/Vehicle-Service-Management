// Login Button
document.querySelector(".login-btn").addEventListener("click", function () {
    window.location.href = "login.html";
});
// Book Service Buttons
const bookButtons = document.querySelectorAll(".book-btn, .hero-btn");

bookButtons.forEach(function (button) {
    button.addEventListener("click", function () {
        alert("Service Booking page will be available soon!");
    });
});