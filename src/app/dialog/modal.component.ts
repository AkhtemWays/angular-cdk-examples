import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { DialogComponent } from './dialog.component';

@Component({
  selector: 'app-modal',
  template: `
    <div>{{data.name}} {{data.surname}}</div>
    <div>
        <button mat-button mat-stroked-button (click)="data.onClose()" style="margin-right: 10px;">Close</button>
        <button mat-button mat-flat-button (click)="data.okFn()">Navigate me</button>
        <button mat-button mat-icon-button (click)="oneMoreWayToClose()">Can close too</button>
    </div>
  `
})
export class ModalComponent implements OnInit {
  constructor(@Inject(MAT_DIALOG_DATA) public data: any,
              public dialogRef: MatDialogRef<DialogComponent>) {
  }

  ngOnInit(): void {
  }

  oneMoreWayToClose(): void {
    this.dialogRef.close();
  }
}
