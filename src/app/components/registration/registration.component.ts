import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css'],
  imports: [FormsModule],
  standalone: true
})
export class RegistrationComponent implements OnInit {
  username: string = '';
  password: string = '';

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
  }

  register(): void {
    this.http.post<any>('/api/register', { username: this.username, password: this.password }).subscribe(
      (response) => {
        console.log('Registration successful:', response);
      },
      (error) => {
        console.error('Error:', error);
      }
    );
  }
}