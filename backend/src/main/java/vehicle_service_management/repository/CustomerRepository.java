package vehicle_service_management.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import vehicle_service_management.entity.Customer;

public interface CustomerRepository extends JpaRepository<Customer, Long> {

    Optional<Customer> findByEmailAndPassword(String email, String password);
}