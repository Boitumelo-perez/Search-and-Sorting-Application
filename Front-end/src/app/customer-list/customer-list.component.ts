import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CustomerService } from '../customer.service';

@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrl: './customer-list.component.css'
})
// export class CustomerListComponent {
//   customerList: any[] = [];

//   constructor(private http: HttpClient) {}

 /* ngOnInit() {
    this.http.get('http://localhost:8080/api/customers')
      .subscribe((customers: any[]) => {
        this.customerList = customers;
      });
  } */
//   ngOnInit() {
//     this.http.get<any[]>('http://localhost:4200/api/customers')
//     .subscribe((customers: any[]) => {
//       this.customerList = customers;
//     }, error => {
//       console.error('Error fetching customers:', error);
//     });
//   }
// }

export class CustomerListComponent implements OnInit {
  customers: any[] = [];

  constructor(private customerService: CustomerService) {}

  ngOnInit(): void {
    this.customerService.getAllCustomers().subscribe((data) => {
      this.customers = data;
    });
  }
}