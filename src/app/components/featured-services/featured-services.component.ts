import { Dienst } from './../../shared/dienste/dienst';
import { Component, OnInit } from '@angular/core';
import { DienstService } from 'src/app/shared/dienste/dienst.service';

@Component({
  selector: 'fab-featured-services',
  templateUrl: './featured-services.component.html',
  styleUrls: ['./featured-services.component.css']
})
export class FeaturedServicesComponent implements OnInit {

  featuredServices: Dienst[];

  config: any = {
    a11y: {
      prevSlideMessage: 'Previous slide',
      nextSlideMessage: 'Next slide',
    },
    fadeEffect: {
      crossFade: true
    },
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
      delay: 4000
    },
    spaceBetween: 30,
    parallax: true,
    freeModeFluid: true,
    slidesPerView: 1,
    slidesPerColumn: 1
  };

  constructor(private ds: DienstService) { }

  ngOnInit() {
    this.ds.getFeatured().subscribe(res => this.featuredServices = res);
  }

}
