package vehicle_service_management.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import vehicle_service_management.entity.Booking;

public interface BookingRepository extends JpaRepository<Booking, Long> {

}