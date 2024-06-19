import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Observable } from 'rxjs';
import { SimpleDialogModal } from '../components/simple-dialog/simple-dialog.component';
import { DialogType } from '../enums/dialogType.enum';

@Injectable({
  providedIn: 'root'
})
export class DialogService {

  dialog = inject(MatDialog);

  openDialog(title: string, text: string, type: DialogType): void {

    switch (type) {
      case DialogType.SIMPLE: {
        const dialogRef = this.dialog.open(SimpleDialogModal, {
          data: { title: title, text: text },
        });

        dialogRef.afterClosed().subscribe(result => {
          return;
        });
        break;
      }
      case DialogType.CONFIRMATION: {
        // Implementação futura para diálogos de confirmação
        break;
      }
      default: {
        const dialogRef = this.dialog.open(SimpleDialogModal, {
          data: { title: title, text: text },
        });

        dialogRef.afterClosed().subscribe(result => {
          console.log('The dialog was closed');
        });
        break;
      }
    }
  }

}
