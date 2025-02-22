import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css']
})
export class ProductItemComponent {
  @Input() product!: { name: string; imageUrl: string; likes: number };
  @Output() remove = new EventEmitter<void>(); // Событие удаления

  likeProduct() {
    this.product.likes++;
  }

  removeProduct() {
    this.remove.emit(); // Отправляем событие удаления
  }
}
