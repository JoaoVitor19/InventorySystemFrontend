import { Component, OnInit, inject, signal } from '@angular/core';
import { ImageInputComponent } from '../../../components/image-input/image-input.component';
import { LiveAnnouncer } from '@angular/cdk/a11y';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { ProductService } from '../../../services/product.service';
import { MatInputModule } from '@angular/material/input';
import { NgxMaskDirective } from 'ngx-mask';
import { MatChipsModule } from '@angular/material/chips';
import { RouterModule } from '@angular/router';
@Component({
  selector: 'app-product-form',
  standalone: true,
  imports: [ImageInputComponent, MatIconModule, MatButtonModule, MatInputModule, ReactiveFormsModule, FormsModule, NgxMaskDirective, MatChipsModule, RouterModule ],
  templateUrl: './product-form.component.html',
  styleUrl: './product-form.component.scss'
})
export class ProductFormComponent implements OnInit {

  form: FormGroup;
  imageFile: File | null;
  categorys = ['Comida', 'Refrigerante', 'Bebida', 'Salgado', 'Outros'];

  readonly announcer = inject(LiveAnnouncer);

  constructor(private formBuilder: FormBuilder, private productService: ProductService) { }

  ngOnInit() {
    this.form = this.formBuilder.group({
      id: [''],
      name: ['', [Validators.required, Validators.minLength(2)]],
      description: [''],
      initialPrice: [null],
      finalPrice: [null, [Validators.required, Validators.min(1)]],
      category: [''],
      stockQuantity: [0]
    });
  }

  addImage(file: File) {
    this.imageFile = file;
  }

  removeImage() {

  }

  createProduct() {
    let form = this.form.getRawValue();

    let product = Object.create({
      name: form.name,
      finalPrice: form.finalPrice,
      description: form.description,
      initialPrice: form.initialPrice,
      stockQuantity: form.stockQuantity,
      imageFile: this.imageFile
    });

    this.productService.createProduct(product).subscribe({
      next: (data: any) => {
        console.log(data);

      },
      error: (error: any) => {
        console.log(error);
      }
    })
  }
}
