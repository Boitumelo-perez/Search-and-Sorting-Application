import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {
  private baseUrl = '/api';

  constructor(private http: HttpClient) { }

  uploadFile(file: File): Observable<any> {
    const formData: FormData = new FormData();
    formData.append('file', file);
    return this.http.post(`${this.baseUrl}/upload`, formData);
  }

  searchCustomer(term: string): Observable<any> {
    return this.http.get(`${this.baseUrl}/search?term=${term}`);
  }

  getAllCustomers(): Observable<any> {
    return this.http.get(`${this.baseUrl}/customers`);
  }
}
