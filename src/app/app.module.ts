import { ProductService } from './shared/products/product.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { HomeComponent } from './components/home/home.component';
import { FooterComponent } from './components/footer/footer.component';
import { ProductsComponent } from './components/products/products.component';
import { AdminComponent } from './components/admin/admin.component';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { ProductlistItemComponent } from './components/productlist-item/productlist-item.component';
import { ProductDetailsComponent } from './components/product-details/product-details.component';
import { ProductFormComponent } from './components/product-form/product-form.component';
import { DiensteComponent } from './components/dienste/dienste.component';
import { DienstFormComponent } from './components/dienst-form/dienst-form.component';
import { EmployeeComponent } from './components/employee/employee.component';
import { NewsitemListComponent } from './components/newsitem-list/newsitem-list.component';
import { FeaturedProductsComponent } from './components/featured-products/featured-products.component';
import { SwiperModule } from 'ngx-useful-swiper';
import { DienstlistItemComponent } from './components/dienstlist-item/dienstlist-item.component';
import { DienstDetailsComponent } from './components/dienst-details/dienst-details.component';
import { FeaturedServicesComponent } from './components/featured-services/featured-services.component';
import { ImpressumComponent } from './components/impressum/impressum.component';
import { CreditsComponent } from './components/credits/credits.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SidebarComponent,
    HomeComponent,
    FooterComponent,
    ProductsComponent,
    AdminComponent,
    AboutUsComponent,
    ProductlistItemComponent,
    ProductDetailsComponent,
    ProductFormComponent,
    DiensteComponent,
    DienstFormComponent,
    EmployeeComponent,
    NewsitemListComponent,
    FeaturedProductsComponent,
    DienstlistItemComponent,
    DienstDetailsComponent,
    FeaturedServicesComponent,
    ImpressumComponent,
    CreditsComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    SwiperModule
  ],
  providers: [
    ProductService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
