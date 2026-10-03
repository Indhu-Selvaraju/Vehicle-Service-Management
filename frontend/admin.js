async function loadBookings() {

    try {

        const response = await fetch("https://vehicle-service-management-production-c0c0.up.railway.app/api/bookings");

        if (!response.ok) {
            throw new Error("Failed to fetch bookings");
        }

        const bookings = await response.json();

        const tableBody = document.getElementById("bookingTableBody");

        tableBody.innerHTML = "";

        bookings.forEach(function(booking) {

            const row = document.createElement("tr");

            row.innerHTML = `
                <td>${booking.id}</td>
                <td>${booking.vehicleNumber}</td>
                <td>${booking.vehicleModel}</td>
                <td>${booking.serviceType}</td>
                <td>${booking.serviceDate}</td>
                 <td>
        <button onclick="deleteBooking(${booking.id})">
            Delete
        </button>
    </td>
            `;

            tableBody.appendChild(row);
        });

    } catch (error) {

        console.error(error);

        alert("Backend connection failed ❌");
    }
}

loadBookings();
async function deleteBooking(id) {

    const confirmDelete = confirm("Are you sure you want to delete this booking?");

    if (!confirmDelete) {
        return;
    }

    try {

        const response = await fetch(`https://vehicle-service-management-production-c0c0.up.railway.app/api/bookings/${id}`, {
        });

        if (response.ok) {
            alert("Booking deleted successfully! 🗑️");
            loadBookings();
        } else {
            alert("Failed to delete booking.");
        }

    } catch (error) {

        console.error(error);
        alert("Backend connection failed.");

    }
}