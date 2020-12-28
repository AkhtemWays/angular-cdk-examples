import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  template: `

  `
})
export class PortalExampleComponent implements OnInit {
  constructor(private router: Router) {
  }
  ngOnInit(): void {
    this.router.navigateByUrl('portal/home');
  }

}
