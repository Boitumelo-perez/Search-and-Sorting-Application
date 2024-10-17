import { Component } from '@angular/core';
import { CustomerListComponent } from './customer-list/customer-list.component';
import { FileUploadComponent } from './file-upload/file-upload.component';
import { SearchComponent } from './search/search.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'SearchAndSorting-Application';
}
