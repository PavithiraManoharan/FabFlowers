// https://github.com/JayChase/ngx-useful-swiper

import { ProductService } from './../../shared/products/product.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { Product } from 'src/app/shared/products/product';

@Component({
  selector: 'fab-featured-products',
  templateUrl: './featured-products.component.html',
  styleUrls: ['./featured-products.component.css']
})
export class FeaturedProductsComponent implements OnInit {

  featuredProducts: Product[];

  config: any = {
    a11y: {
      prevSlideMessage: 'Previous slide',
      nextSlideMessage: 'Next slide',
    },
    effect: 'flip',
    grabCursor: false,
    pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
      clickable: true,
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    autoplay: {
      delay: 5000
    },
    spaceBetween: 30,
    parallax: true,
    freeModeFluid: true,
    slidesPerView: 1,
    slidesPerColumn: 1
  };

  constructor(private ps: ProductService) { }

  ngOnInit() {
    this.ps.getFeatured().subscribe(res => this.featuredProducts = res);
  }
}
