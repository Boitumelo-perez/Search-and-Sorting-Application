import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
// import { Customer } from './customer.models';
import { Customer } from '../models/customer.model';
import { Form } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {
  private apiUrl = 'http://localhost:8080/api';

  constructor(private http: HttpClient) { }

  uploadFile(file: File): Observable<string> {
    const formData: FormData = new FormData();
    formData.append('file', file);

    return this.http.post(`${this.apiUrl}/upload`, formData, { responseType: 'text'});

  }

  getAllCustomers(): Observable<Customer[]> {
    return this.http.get<Customer[]>(`${this.apiUrl}/customers`);
  }
}
