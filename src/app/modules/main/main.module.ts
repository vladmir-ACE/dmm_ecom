import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainRoutingModule } from './main-routing.module';
import { MainComponent } from './main.component';
import { HomeComponent } from './pages/home/home.component';
import { HeaderComponent } from './components/header/header.component';
import { ProductCard1Component } from './components/product-card1/product-card1.component';
import { ProductCardSliderComponent } from './components/product-card-slider/product-card-slider.component';
import { OrderComponent } from './pages/order/order.component';
import { FooterComponent } from './components/footer/footer.component';


@NgModule({
  declarations: [
    MainComponent,
    HomeComponent,
    HeaderComponent,
    ProductCard1Component,
    ProductCardSliderComponent,
    OrderComponent,
    FooterComponent
  ],
  imports: [
    CommonModule,
    MainRoutingModule
  ]
})
export class MainModule { }
