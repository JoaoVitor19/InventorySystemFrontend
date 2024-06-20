import { Component } from '@angular/core';
import { ImageInputComponent } from '../../../components/image-input/image-input.component';

@Component({
  selector: 'app-product-form',
  standalone: true,
  imports: [ImageInputComponent],
  templateUrl: './product-form.component.html',
  styleUrl: './product-form.component.scss'
})
export class ProductFormComponent {

}
