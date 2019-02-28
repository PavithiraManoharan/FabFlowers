import { ActivatedRoute, Router } from '@angular/router';
import { ProductFormErrorMessages } from './product-form-error-messages';
import { ProductService } from './../../shared/products/product.service';
import { ProductFactory } from './../../shared/products/product-factory';
import { Product } from './../../shared/products/product';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormArray, Validators } from '@angular/forms';


@Component({
  selector: 'fab-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.css']
})
export class ProductFormComponent implements OnInit {
  product = ProductFactory.empty();
  errors: { [key: string]: string } = {};
  isUpdatingProduct = false;
  myProductForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private ps: ProductService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {
    const id = this.route.snapshot.params['id'];
    if (id) {
      this.isUpdatingProduct = true;
      this.ps.getSingle(id)
      .subscribe(product => {
        this.product = product;
        this.initProduct();
      });
    }
    this.initProduct();
  }

  initProduct() {
    this.myProductForm = this.fb.group({
      id: [this.product.id, Validators.required],
      name: [this.product.name, Validators.required],
      shortdesc: [this.product.shortdesc, Validators.required],
      price: [this.product.price, Validators.required],
      image: [this.product.image, Validators.required],
      available: [this.product.available, Validators.required],
      featured: [this.product.featured, Validators.required],
      fulldesc: [this.product.fulldesc, Validators.required],
    });
    this.myProductForm.statusChanges.subscribe(() => this.updateErrorMessages());
  }

  updateErrorMessages() {
    this.errors = {};
    for (const message of ProductFormErrorMessages) {
      const control = this.myProductForm.get(message.forControl);
      if (control &&
        control.dirty &&
        control.invalid &&
        control.errors[message.forValidator] &&
        !this.errors[message.forControl]) {
        this.errors[message.forControl] = message.text;
      }
    }
  }

  submitForm() {
    const product: Product = ProductFactory.fromObject(this.myProductForm.value);

    if (this.isUpdatingProduct) {
      // update or create
      this.ps.update(product).subscribe(res => {
        this.router.navigate(['../../../produkte', product.id], {
          relativeTo: this.route
        });
      });
    } else {
      this.ps.create(product).subscribe(res => {
        this.product = ProductFactory.empty();
        this.myProductForm.reset(ProductFactory.empty());
      });
    }
  }
}
