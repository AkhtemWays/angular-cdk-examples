import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MAT_DIALOG_DEFAULT_OPTIONS, MatDialogModule } from '@angular/material/dialog';
import { DialogRoutingModule } from './dialog-routing.module';
import { DialogComponent } from './dialog.component';
import { ModalComponent } from './modal.component';



@NgModule({
  declarations: [DialogComponent, ModalComponent],
  entryComponents: [ModalComponent],
  imports: [
    CommonModule,
    DialogRoutingModule,
    MatDialogModule,
    MatButtonModule
  ],
  providers: [{provide: MAT_DIALOG_DEFAULT_OPTIONS, useValue: {hasBackdrop: false}}]
})
export class DialogModule { }
