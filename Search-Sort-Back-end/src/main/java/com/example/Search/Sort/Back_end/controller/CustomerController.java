package com.example.Search.Sort.Back_end.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import com.example.Search.Sort.Back_end.model.Customer;
import com.example.Search.Sort.Back_end.service.CustomerService;

import java.util.List;

@RestController
@RequestMapping("/api/customers")
public class CustomerController {
    @Autowired
    private CustomerService customerService;

    @PostMapping("/upload")
    public ResponseEntity<String> uploadFile(@RequestParam("file") MultipartFile file) {
        try {
            customerService.saveCustomersFromFile(file);
            return ResponseEntity.ok("File uploaded successfully");
        } catch (Exception e) {
            return ResponseEntity.status(500).body("Error processing file");
        }
    }

    @GetMapping("/search")
    public ResponseEntity<Customer> searchCustomer(@RequestParam("term") String term) {
        Customer customer = customerService.searchCustomer(term);
        if (customer != null) {
            return ResponseEntity.ok(customer);
        } else {
            return ResponseEntity.status(404).body(null);
        }
    }

    @GetMapping("/customers")
    public List<Customer> listAllCustomers() {
        return customerService.getAllCustomers();
    }

    // @PostMapping
    // public Customer createCustomer(@RequestBody Customer customer) {
    //     return customerService.saveCustomer(customer);
    // }
}
