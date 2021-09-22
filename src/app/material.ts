import {
  MatButtonModule,
  MatDialogModule,
  MatCardModule,
  MatTableModule,
  MatFormFieldModule,
  MatToolbarModule, MatIconModule, MatSnackBarModule
} from '@angular/material';
import {NgModule} from '@angular/core';

@NgModule({
  imports: [
    MatButtonModule,
    MatDialogModule,
    MatCardModule,
    MatTableModule,
    MatFormFieldModule,
    MatToolbarModule,
    MatDialogModule,
    MatIconModule,
    MatSnackBarModule],

  exports: [MatButtonModule,
    MatDialogModule,
    MatCardModule,
    MatTableModule,
    MatFormFieldModule,
    MatToolbarModule,
    MatDialogModule,
    MatIconModule,
    MatSnackBarModule],
})

export class MaterialModule {}
