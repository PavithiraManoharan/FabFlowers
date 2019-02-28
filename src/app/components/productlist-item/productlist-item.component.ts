import { Product } from './../../../app/shared/products/product';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'div.fab-productlist-item',
  templateUrl: './productlist-item.component.html',
  styleUrls: ['./productlist-item.component.css']
})
export class ProductlistItemComponent {
  @Input() product: Product;
}
