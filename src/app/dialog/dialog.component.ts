import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { first } from 'rxjs/operators';
import { ModalComponent } from './modal.component';

@Component({
  selector: 'app-dialog',
  template: `
    <button mat-flat-button mat-button (click)="openDialog()">Click to open modal</button>
  `
})
export class DialogComponent implements OnInit {

  dialogRef: MatDialogRef<ModalComponent, any>;
  constructor(private dialog: MatDialog,
              private router: Router) { }

  ngOnInit(): void {
  }

  openDialog(): void {
    this.dialogRef = this.dialog.open(ModalComponent, {
      height: '200px',
      width: '200px',
      data: {
        name: 'Akhtem',
        surname: 'Ways',
        onClose: () => this.dialogRef.close(),
        okFn: () => this.router.navigateByUrl('/portal/home')
      },
    });
    this.dialogRef.afterClosed().subscribe((result) => console.log(result));
  }

}

