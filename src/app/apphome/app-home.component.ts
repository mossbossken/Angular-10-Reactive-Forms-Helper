import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-app-home',
  template: `
  <app-sidenav></app-sidenav>
`,
  styles: []
})
export class ApplicationHomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
