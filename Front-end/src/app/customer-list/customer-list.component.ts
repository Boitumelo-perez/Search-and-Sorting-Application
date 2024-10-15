import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrl: './customer-list.component.css'
})
export class CustomerListComponent {
  customerList: any[] = [];

  constructor(private http: HttpClient) {}

  // ngOnInit() {
  //   this.http.get('http://localhost:8080/api/customers')
  //     .subscribe((customers: any[]) => {
  //       this.customerList = customers;
  //     });
  // }
  ngOnInit() {
    this.http.get<any[]>('http://localhost:apicustomers')
    .subscribe((customers: any[]) => {
      this.customerList = customers;
    }, error => {
      console.error('Error fetching customers:', error);
    });
  }
}
