import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-app';
  counterValue = 0;

  increaseCounter(){
    this.counterValue = this.counterValue + 1; 
  }

  decreaseCounter(){
    this.counterValue = this.counterValue - 1; 
  }
}
