import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-app';
  names = ['Hasan','Koli','Mahbub'];
  userDetails = [
    {name:'Hasan', district: 'Noakhali'},{name:'Koli', district: 'Rangpur'},
    {name:'Mahbub', district: 'Dhaka'}
  ];
}
