document.getElementById("bookingForm").addEventListener("submit", async function(event) {

    event.preventDefault();

    const vehicleNumber = document.getElementById("vehicleNumber").value;
    const vehicleModel = document.getElementById("vehicleModel").value;
    const serviceType = document.getElementById("serviceType").value;
    const serviceDate = document.getElementById("serviceDate").value;

    const bookingData = {
        vehicleNumber: vehicleNumber,
        vehicleModel: vehicleModel,
        serviceType: serviceType,
        serviceDate: serviceDate
    };

    try {

        const response = await fetch("https://vehicle-service-management-production-c0c0.up.railway.app/api/bookings", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(bookingData)
        });

        if (response.ok) {
            alert("Service booked successfully! 🚗");
            document.getElementById("bookingForm").reset();
        } else {
            alert("Booking failed. Please try again.");
        }

    } catch (error) {

        console.error(error);
        alert("Backend connection failed.");

    }

});