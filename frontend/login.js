document.getElementById("loginForm").addEventListener("submit", async function(event) {

    event.preventDefault();

    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const role = document.getElementById("role").value;

    if (email === "" || password === "") {
        alert("Please enter email and password");
        return;
    }

    const loginData = {
        email: email,
        password: password
    };

    try {
       const response = await fetch("https://vehicle-service-management-production-c0c0.up.railway.app/api/customers/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(loginData)
        });

        if (response.ok) {
            alert("Login successful as " + role + " 🎉");
            window.location.href = "service.html";
        } else {
            alert("Invalid email or password ❌");
        }

    } catch (error) {
        console.error(error);
        alert("Backend connection failed ❌");
    }

});