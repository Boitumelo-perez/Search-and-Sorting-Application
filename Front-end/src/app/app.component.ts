import { Component, OnInit} from '@angular/core';
import { ApiService } from './services/api.service';
// import { CustomerListComponent } from './customer-list/customer-list.component';
// import { FileUploadComponent } from './file-upload/file-upload.component';
// import { SearchComponent } from './search/search.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  title = 'SearchAndSorting-Application';
  message: string = '';

  constructor(private apiService:ApiService) {}

  ngOnInit(): void {
      this.apiService.getGreeting().subscribe((response) => {
        this.message = response;
      });
  }
}
