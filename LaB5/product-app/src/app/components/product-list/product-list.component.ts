import { Component, Input } from '@angular/core';
import { Product } from '@app/models/product.model';
import { CommonModule } from '@angular/common';
import { ProductItemComponent } from '../product-item/product-item.component';

@Component({
  selector: 'app-product-list',
  standalone: true,
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
  imports: [CommonModule, ProductItemComponent],
})
export class ProductListComponent {
  @Input() products: Product[] = [];

  removeProduct(index: number): void {
    this.products.splice(index, 1);
  }
}
