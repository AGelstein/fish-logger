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

  constructor() { }

  ngOnInit(): void {
  }

  showMessage(): void {
    this.message = this.inputValue;
  }
}