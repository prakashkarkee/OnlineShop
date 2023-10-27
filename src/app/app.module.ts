import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ProductComponent } from './product/product.component';
import { GroceryComponent } from './grocery/grocery.component';
import { ClothesComponent } from './clothes/clothes.component';
import { DataclothService } from './datacloth.service';
import { FoodComponent } from './food/food.component';
import { DrinkComponent } from './drink/drink.component';
import { ElectronicComponent } from './electronic/electronic.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ProductComponent,
    GroceryComponent,
    ClothesComponent,
    FoodComponent,
    DrinkComponent,
    ElectronicComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [DataclothService],
  bootstrap: [AppComponent]
})
export class AppModule { }
