import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { GroceryComponent } from './grocery/grocery.component';
import { ElectronicComponent } from './electronic/electronic.component';
import { ClothesComponent } from './clothes/clothes.component';
import { FoodComponent } from './food/food.component';
import { DrinkComponent } from './drink/drink.component';

const routes: Routes = [
  { path: '', component: AppComponent },
  { path: 'Grocery', component: GroceryComponent },
  { path: 'Electronic', component: ElectronicComponent },
  { path: 'Clothes', component: ClothesComponent },
  { path: 'Food', component: FoodComponent },
  { path: 'Drink', component: DrinkComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
