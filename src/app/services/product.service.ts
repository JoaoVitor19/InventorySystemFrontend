import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Product } from '../models/product.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  apiUrl = "https://localhost:44366";

  constructor(private httpClient: HttpClient) { }

  createProduct(product: any): Observable<any> {
    const formData = new FormData();

    formData.append('name', product.name);
    formData.append('finalPrice', product.finalPrice.toString());

    if (product.description)
      formData.append('description', product.description.toString());

    if (product.initialPrice)
      formData.append('initialPrice', product.initialPrice.toString());

    if (product.stockQuantity)
      formData.append('stockQuantity', product.stockQuantity.toString());

    if (product.imageFile)
      formData.append('imageFile', product.imageFile);

    console.log(formData);

    return this.httpClient.post(`${this.apiUrl}/api/products`,  formData );
  }
}
