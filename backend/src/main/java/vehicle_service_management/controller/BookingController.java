package vehicle_service_management.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import vehicle_service_management.entity.Booking;
import vehicle_service_management.repository.BookingRepository;

import java.util.List;

@RestController
@RequestMapping("/api/bookings")
@CrossOrigin(origins = "*")
public class BookingController {

    @Autowired
    private BookingRepository bookingRepository;

    @PostMapping
    public Booking createBooking(@RequestBody Booking booking) {
        return bookingRepository.save(booking);
    }

    @GetMapping
    public List<Booking> getAllBookings() {
        return bookingRepository.findAll();
    }
    @DeleteMapping("/{id}")
public void deleteBooking(@PathVariable Long id) {
    bookingRepository.deleteById(id);
}
}
