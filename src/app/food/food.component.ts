import { Component } from '@angular/core';
import { DataclothService } from '../datacloth.service';

@Component({
  selector: 'app-food',
  templateUrl: './food.component.html',
  styleUrls: ['./food.component.css']
})
export class FoodComponent {
  foods: { title: string, img: string, button: string }[] = []

  constructor(private ds: DataclothService) {
    this.foods = ds.food;
  }
}
