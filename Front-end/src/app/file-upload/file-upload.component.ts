import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CustomerService } from '../customer.service';

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

export class FileUploadComponent {
  selectedFile: File | null = null;
  uploadResponse: string = '';

  constructor(private customerService: CustomerService) {}

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
  uploadFile(): void {
    console.log('File upload initiated');
  }
}