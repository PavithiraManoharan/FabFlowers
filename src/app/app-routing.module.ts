import { CreditsComponent } from './components/credits/credits.component';
import { DienstFormComponent } from './components/dienst-form/dienst-form.component';
import { ProductFormComponent } from './components/product-form/product-form.component';
import { DiensteComponent } from './components/dienste/dienste.component';
import { ProductDetailsComponent } from './components/product-details/product-details.component';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { AdminComponent } from './components/admin/admin.component';
import { ProductsComponent } from './components/products/products.component';
import { HomeComponent } from './components/home/home.component';
import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DienstDetailsComponent } from './components/dienst-details/dienst-details.component';
import { ImpressumComponent } from './components/impressum/impressum.component';


const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'produkte',
    component: ProductsComponent
  },
  {
    path: 'produkte/:id',
    component: ProductDetailsComponent
  },
  {
    path: 'services',
    component: DiensteComponent
  },
  {
    path: 'services/:id',
    component: DienstDetailsComponent
  },
  {
    path: 'administration',
    component: AdminComponent
  },
  {
    path: 'ueber-uns',
    component: AboutUsComponent
  },
  {
    path: 'administration/add-product',
    component: ProductFormComponent
  },
  {
    path: 'administration/add-dienst',
    component: DienstFormComponent
  },
  {
    path: 'administration/add-product/:id',
    component: ProductFormComponent
  },
  {
    path: 'administration/add-dienst/:id',
    component: DienstFormComponent
  },
  {
    path: 'impressum',
    component: ImpressumComponent
  },
  {
    path: 'credits',
    component: CreditsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    scrollPositionRestoration: 'enabled',
    anchorScrolling: 'enabled',
  })],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
