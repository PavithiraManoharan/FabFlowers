import { ProductService } from './../../shared/products/product.service';
import { ProductFactory } from './../../shared/products/product-factory';
import { Component, OnInit } from '@angular/core';
import { Product } from '../../shared/products/product';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'fab-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {
  product: Product = ProductFactory.empty();

  constructor(
    private ps: ProductService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {
    const params = this.route.snapshot.params;
    this.ps.getSingle(params.id).subscribe(p => this.product = p);
  }

  removeProduct() {
    if (confirm('Produkt wirklich löschen?')) {
      this.ps.remove(this.product.id)
        .subscribe(res => this.router.navigate(['../'], { relativeTo: this.route }));
    }
  }
}
