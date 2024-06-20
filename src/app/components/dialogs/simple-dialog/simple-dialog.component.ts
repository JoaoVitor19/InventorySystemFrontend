import { ChangeDetectionStrategy, Component, inject, signal } from "@angular/core";
import { FormsModule } from "@angular/forms";

import { MatButtonModule } from "@angular/material/button";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatInputModule } from "@angular/material/input";

import {
  MAT_DIALOG_DATA,
  MatDialog,
  MatDialogActions,
  MatDialogClose,
  MatDialogContent,
  MatDialogRef,
  MatDialogTitle,
} from '@angular/material/dialog';

@Component({
  selector: 'simples-dialog-modal',
  templateUrl: 'simple-dialog.component.html',
  standalone: true,
  imports: [MatFormFieldModule, MatInputModule, FormsModule, MatButtonModule, MatDialogActions, MatDialogContent],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SimpleDialogModal {
  readonly dialogRef = inject(MatDialogRef<SimpleDialogModal>);
  readonly data = inject<any>(MAT_DIALOG_DATA);

  close() {
    this.dialogRef.close();
  }
}