import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrl: './search.component.css'
})
export class SearchComponent {
  searchTerm: string = '';
  searchResult: any = null;

  constructor(private http: HttpClient) {}

  searchCustomer() {
    this.http.get(`http://localhost:8080/api/search?term=${this.searchTerm}`)
      .subscribe((result: any) => {
        this.searchResult = result;
      });
  }
}
