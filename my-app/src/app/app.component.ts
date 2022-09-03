import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-app';
  data = "Hello World!";
  num = 1;

  getValue(){
    return 'Code step by step';
  }
}
