package com.example.Search.Sort.Back_end.repository;

import com.example.Search.Sort.Back_end.model.Customer;
import org.springframework.stereotype.Repository;
import org.springframework.data.jpa.repository.JpaRepository;
import java.util.Optional;

@Repository
public class CustomerRepository extends JpaRepository<Customer, Long> {
    /*Optional<Customer> findByName(String name); */
    List<Customer> findByName(String name);
}
