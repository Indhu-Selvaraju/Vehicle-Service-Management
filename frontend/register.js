document.getElementById("registerForm").addEventListener("submit", async function (event) {

    event.preventDefault();

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const phone = document.getElementById("phone").value;
    const password = document.getElementById("password").value;
    const confirmPassword = document.getElementById("confirmPassword").value;

    // Check passwords
    if (password !== confirmPassword) {
        alert("Passwords do not match!");
        return;
    }

    // Send data to Spring Boot
    try {

        const response = fetch("https://vehicle-service-management-production-c0c0.up.railway.app/api/customers/register", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                name: name,
                email: email,
                phone: phone,
                password: password
            })
        });

        if (response.ok) {

            alert("Account created successfully!");

            window.location.href = "login.html";

        } else {

            alert("Registration failed. Please try again.");

        }

    } catch (error) {

        console.error(error);

        alert("Cannot connect to server. Please make sure backend is running.");

    }

});