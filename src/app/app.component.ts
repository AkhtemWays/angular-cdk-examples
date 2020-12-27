import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  template: `
    <div id="action"></div>
    <router-outlet></router-outlet>
  `
})
export class AppComponent {
  title = 'angular-material-test';
  constructor(private router: Router) {
  }
}
