import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-my-component',
  templateUrl: './my-component.component.html',
  styleUrls: ['./my-component.component.css'],
  standalone: true,
  imports: [FormsModule],
})
export class MyComponentComponent implements OnInit {
  message: string = 'Hello, Angular!';
  inputValue: string = '';
  items: any[] = [];

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
  }

  showMessage(): void {
    this.message = this.inputValue;
  }

  getItems(): void {
    this.http.get<any[]>('/api/items').subscribe(
      (response) => {
        this.items = response;
      },
      (error) => {
        console.error('Error:', error);
      }
    );
  }
}