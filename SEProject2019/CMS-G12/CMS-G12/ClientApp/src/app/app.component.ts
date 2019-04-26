import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title: string = 'Campus Map Service - G12';
  lat: number = 51.678418;
  lng: number = 7.809007;
}
