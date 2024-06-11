import { Component } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
@Component({
  selector: 'app-home',
  standalone: true,
  imports: [SharedModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  p:number = 1;
list = [
  "iphone 5",
  "iphone 6",
  "iphone 7",
  "iphone 8",
  "iphone 9",
  "iphone 10",
  "iphone 11",
  "iphone 12",
];

}
