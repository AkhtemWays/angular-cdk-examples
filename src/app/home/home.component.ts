import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  template: `
    <app-action-btn>
      <button mat-button (click)="goToDashboard()">Go to Dashboard</button>
    </app-action-btn>
    <div>
      Everything about Home
      <p>Homie</p>
    </div>
  `
})
export class HomeComponent{

  constructor(private router: Router) { }

  goToDashboard(): void {
    this.router.navigateByUrl('/dashboard');
  }

}
