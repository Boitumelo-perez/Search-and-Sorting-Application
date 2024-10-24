import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CustomerService } from '../customer.service';
import { Observable } from 'rxjs';
import { from } from 'rxjs';

@Component({
  selector: 'app-file-upload',
  templateUrl: './file-upload.component.html',
  styleUrl: './file-upload.component.css'
})
// export class FileUploadComponent {
//   selectedFile: File | null = null;

//   constructor(private http: HttpClient) {}

//   onFileSelected(event: any) {
//     this.selectedFile = event.target.files[0];
//   }

//   uploadFile() {
//     if (this.selectedFile) {
//       const formData = new FormData();
//       formData.append('file', this.selectedFile);

//       this.http.post('http://localhost:8080/api/upload', formData)
//         .subscribe((response) => {
//           console.log('File uploaded successfully', response);
//         });
//     }
//   }
// }

export class FileUploadComponent /*implements OnInit */{
  selectedFile: File | null = null;
  uploadResponse: string = '';
  // apiUrl: string = 'http://localhost:8080/api';
  apiUrl: string = '';

  constructor(private http: HttpClient, private customerService: CustomerService) {}

  // ngOnInit() {
  //     this.customerService.getApiUrl().subscribe((customer: any) => {
  //       this.apiUrl = customer.apiUrl;
  //     });
  // }

//   ngOnInit() {
//     console.log(this.customerService.getApiUrl());  // Log to check the return type
//     this.customerService.getApiUrl().subscribe((customer: any) => {
//       this.apiUrl = customer.apiUrl;
//     });
//  }
 

  onFileSelected(event: any): void {
    this.selectedFile = event.target.files[0];
  }

  onUpload(): void {
    if (this.selectedFile) {
      console.log('Upload button clicked');
      this.customerService.uploadFile(this.selectedFile).subscribe(
        (response) => {
          this.uploadResponse = 'File uploaded successfully!';
        },
        (error) => {
          this.uploadResponse = 'Error uploading file.';
        }
      );
    }
  }

  uploadFile(file: File): Observable<string> {
    const formData: FormData = new FormData();
    formData.append('file', file);
    console.log('File upload initiated');

    return this.http.post(`${this.apiUrl}/upload`, formData, { responseType: 'text' });
  }
}