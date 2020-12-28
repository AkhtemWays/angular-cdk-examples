import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <div id="action"></div>
    <div>
      <a routerLink="/portal"></a>
    </div>
    <router-outlet></router-outlet>
  `
})
export class AppComponent {
}
