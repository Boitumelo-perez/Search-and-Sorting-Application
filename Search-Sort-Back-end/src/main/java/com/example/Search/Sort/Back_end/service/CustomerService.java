package com.example.Search.Sort.Back_end.service;

import com.example.Search.Sort.Back_end.model.Customer;
import com.example.Search.Sort.Back_end.repository.CustomerRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.io.BufferedReader;
import java.io.InputStreamReader;
import java.util.List;

@Service
public class CustomerService {
    
    @Autowired
    private CustomerRepository customerRepository;

    public void saveCustomersFromFile(MultipartFile file) throws Exception {
        BufferedReader reader = new BufferedReader(new InputStreamReader(file.getInputStream()));
        String line;
        while ((line = reader.readLine()) != null) {
            String[] data = line.split(",");
            Customer customer = new Customer();
            customer.setName(data[0]);
            customer.setEmail(data[1]);
            customer.setPhone(data[2]);
            customerRepository.save(customer);
        }
    }

    public List<Customer> getAllCustomers() {
        return customerRepository.findAll();
    }

    public Customer searchCustomer(String name) {
        return customerRepository.findByName(name).orElse(null);
    }
}