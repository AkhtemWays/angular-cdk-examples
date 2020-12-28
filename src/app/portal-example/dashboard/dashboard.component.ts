import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  template: `
    <div>
      Everything about Dashboard
      <p>Dashboardie</p>
      <app-action-btn>
        <button mat-flat-button (click)="goToHome()">Go to home</button>
      </app-action-btn>
    </div>
  `
})
export class DashboardComponent {

  constructor(private router: Router) { }

  goToHome(): void {
    this.router.navigateByUrl('portal/home');
  }
}
