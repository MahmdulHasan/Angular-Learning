import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-app';
  displayValue: string = "";

  getUserName(name:string){
      console.log(name)
      this.displayValue = name;
  }
}
