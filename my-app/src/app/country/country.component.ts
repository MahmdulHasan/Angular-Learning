import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-country',
  template: `
    <p class="custom">
      country works!
    </p>
  `,
  styles: [
    `.custom{
      color: blue;
    }`
  ]
})
export class CountryComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
