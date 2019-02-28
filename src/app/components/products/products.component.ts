import { ProductService } from './../../shared/products/product.service';
import { Component, OnInit } from '@angular/core';
import { Product } from './../../shared/products/product';

@Component({
  selector: 'fab-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  products: Product[];
  constructor(private ps: ProductService) { }

  ngOnInit() {
    this.ps.getAll().subscribe(res => this.products = res);
  }
}
