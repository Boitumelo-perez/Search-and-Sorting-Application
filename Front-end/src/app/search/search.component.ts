import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CustomerService } from '../customer.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrl: './search.component.css'
})
// export class SearchComponent {
//   searchTerm: string = '';
//   searchResult: any = null;

//   constructor(private http: HttpClient) {}

//   searchCustomer() {
//     // this.http.get(`http://localhost:8080/api/search?term=${this.searchTerm}`)
//     this.http.get('http://localhost:8080/api/search?term=${this.searchTerm}')
//       .subscribe((result: any) => {
//         this.searchResult = result;
//       });
//   }
// }

export class SearchComponent {
  searchTerm: string = '';
  searchResult: any = null;
  searchNotFound: boolean = false;

  constructor(private customerService: CustomerService) {}

  onSearch(): void {
    this.customerService.searchCustomer(this.searchTerm).subscribe(
      (result) => {
        this.searchResult = result;
        this.searchNotFound = !result;
      },
      (error) => {
        this.searchNotFound = true;
      }
    );
  }
}