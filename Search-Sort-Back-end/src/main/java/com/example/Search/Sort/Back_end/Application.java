package com.example.Search.Sort.Back_end;


import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

// @SpringBootApplication(exclude = {
//     CouchbaseAutoConfiguration.class,
//     ConnectionFactoryHealthContributorAutoConfiguration.class,
// })

@SpringBootApplication
public class Application {

	public static void main(String[] args) {
		SpringApplication.run(Application.class, args);
	}

}
