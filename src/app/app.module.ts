import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ProductComponent } from './product/product.component';
import { GroceryComponent } from './grocery/grocery.component';
import { ClothesComponent } from './clothes/clothes.component';
import { DataclothService } from './datacloth.service';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ProductComponent,
    GroceryComponent,
    ClothesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [DataclothService],
  bootstrap: [AppComponent]
})
export class AppModule { }
