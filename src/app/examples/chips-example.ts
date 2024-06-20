
// USE CHIPS OF MATERIALS;

// import {COMMA, ENTER} from '@angular/cdk/keycodes';
// import { MatChipEditedEvent, MatChipInputEvent, MatChipsModule } from '@angular/material/chips';
// import {LiveAnnouncer} from '@angular/cdk/a11y';

// readonly separatorKeysCodes = [ENTER, COMMA] as const;

// categorys = signal<string[]>(['Comida', 'Refrigerante', 'Bebida', 'Salgado', 'Outros']);

// removeCategory(category: string): void {
//     this.categorys.update(categorys => {
//       const index = categorys.indexOf(category);

//       if (index < 0) {
//         return categorys;
//       }

//       categorys.splice(index, 1);

//       return [...categorys];
//     });
//   }

//   addCategory(event: MatChipInputEvent): void {
//     const value = (event.value || '').trim();

//     // Add our fruit
//     if (value) {
//       this.categorys.update(categorys => [...categorys, value]);
//     }

//     // Clear the input value
//     event.chipInput!.clear();
//   }

//   editCategory(category: string, event: MatChipEditedEvent) {
//     const value = event.value.trim();

//     // Remove fruit if it no longer has a name
//     if (!value) {
//       this.removeCategory(category);
//       return;
//     }

//     // Edit existing fruit
//     this.categorys.update(categorys => {
//       const index = categorys.indexOf(category);
//       if (index >= 0) {
//         categorys[index] = value;
//         return [...categorys];
//       }
//       return categorys;
//     });
//   }

// <mat-form-field class="example-chip-list">
// <mat-label>Categorias do Produto</mat-label>
// <mat-chip-grid #chipGrid aria-label="Adicione uma categoria">
//     @for (category of categorys(); track categorys) {
//     <mat-chip-row (removed)="removeCategory(category)" [editable]="true"
//         (edited)="editCategory(category, $event)">
//         {{category}}
//         <button matChipRemove>
//             <mat-icon>cancel</mat-icon>
//         </button>
//     </mat-chip-row>
//     }
//     <input placeholder="Nova categoria..." [matChipInputFor]="chipGrid"
//         [matChipInputSeparatorKeyCodes]="separatorKeysCodes" [matChipInputAddOnBlur]="true"
//         (matChipInputTokenEnd)="addCategory($event)" />
// </mat-chip-grid>
// </mat-form-field>