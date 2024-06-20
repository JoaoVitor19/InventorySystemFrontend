import { Component, EventEmitter, Input, OnInit, Output, input } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { MatDivider } from '@angular/material/divider';

@Component({
  selector: 'image-input',
  standalone: true,
  imports: [MatButtonModule, MatIconModule, MatCardModule, MatDivider],
  templateUrl: './image-input.component.html',
  styleUrl: './image-input.component.scss'
})
export class ImageInputComponent implements OnInit {
  ngOnInit(): void {
    if (this.imageUrl == null) {
      this.imageUrl = "assets/images/not_found_img.png";
    }
  }

  @Input() imageUrl: string | null = null;
  @Output() onAddImage: EventEmitter<File> = new EventEmitter();
  @Output() onRemoveImage: EventEmitter<any> = new EventEmitter();

  pathNotFoundImage: string = "assets/images/not_found_img.png";

  addImage(galery: boolean = false) {
    let inputImg = document.createElement('input');
    inputImg.setAttribute('type', 'file');
    inputImg.setAttribute('accept', 'image/*');
    inputImg.setAttribute('multiple', 'false');
    inputImg.setAttribute('capture', 'camera');

    inputImg.click();

    inputImg.addEventListener('change', (event: any) => {
      if (event.target && event.target.files && event.target.files.length > 0) {
        let file = event.target.files[0];
        this.onAddImage.emit(file);
        //TODO: O MÉTODO ABAIXO SERIA PARA TRABALHAR COM IMAGEM EM BASE64
        let reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = () => {
          this.imageUrl = reader.result as string;
        }
      }
    });
  }

  removeImage() {
    // TODO: REMOVER IMAGEM NO BACKEND SE TIVER EDITANDO;
    if (this.imageUrl !== this.pathNotFoundImage) {
      this.onRemoveImage.emit();
    }
    setTimeout(() => {
      this.imageUrl = this.pathNotFoundImage;
    }, 500);
  }
}
