package vehicle_service_management.service;

import org.springframework.stereotype.Service;
import vehicle_service_management.entity.Customer;
import vehicle_service_management.repository.CustomerRepository;

@Service
public class CustomerService {

    private final CustomerRepository customerRepository;

    public CustomerService(CustomerRepository customerRepository) {
        this.customerRepository = customerRepository;
    }

    public Customer registerCustomer(Customer customer) {
        return customerRepository.save(customer);
    }
}
