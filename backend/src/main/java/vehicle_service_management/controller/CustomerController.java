package vehicle_service_management.controller;

import java.util.Optional;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import vehicle_service_management.entity.Customer;
import vehicle_service_management.repository.CustomerRepository;
import vehicle_service_management.service.CustomerService;

@RestController
@RequestMapping("/api/customers")
@CrossOrigin(origins = "*")
public class CustomerController {

    private final CustomerService customerService;
    private final CustomerRepository customerRepository;

    public CustomerController(
            CustomerService customerService,
            CustomerRepository customerRepository) {

        this.customerService = customerService;
        this.customerRepository = customerRepository;
    }

    @PostMapping("/register")
    public ResponseEntity<Customer> register(@RequestBody Customer customer) {

        Customer savedCustomer =
                customerService.registerCustomer(customer);

        return ResponseEntity.ok(savedCustomer);
    }

    @PostMapping("/login")
    public ResponseEntity<?> login(@RequestBody Customer customer) {

        Optional<Customer> existingCustomer =
                customerRepository.findByEmailAndPassword(
                        customer.getEmail(),
                        customer.getPassword()
                );

        if (existingCustomer.isPresent()) {
            return ResponseEntity.ok(existingCustomer.get());
        }

        return ResponseEntity
                .status(401)
                .body("Invalid email or password");
    }
}
