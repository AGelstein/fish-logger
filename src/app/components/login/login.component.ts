import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  imports: [FormsModule],
  standalone: true
})
export class LoginComponent implements OnInit {
  username: string = '';
  password: string = '';

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
  }

  login(): void {
    this.http.post<any>('/api/login', { username: this.username, password: this.password }).subscribe(
      (response) => {
        console.log('Login successful:', response);
      },
      (error) => {
        console.error('Error:', error);
      }
    );
  }
}