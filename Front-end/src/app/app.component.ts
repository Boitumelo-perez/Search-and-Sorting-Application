import { Component, OnInit} from '@angular/core';
import { ApiService } from './services/api.service';

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
      // this.apiService.getGreeting().subscribe((response: string) => {
      //   this.message = response;
      // });
  }
}
