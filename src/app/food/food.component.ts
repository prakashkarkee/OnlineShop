import { Component } from '@angular/core';
import { DataclothService } from '../datacloth.service';
import { DatacourseService } from 'service/datacourse.service';

@Component({
  selector: 'app-food',
  templateUrl: './food.component.html',
  styleUrls: ['./food.component.css']
})
export class FoodComponent {
  foods: { title: string, img: string, button: string }[] = []
  elecourse: {
    name: string, price: number, type: string, imageUrl: string
  }[] = []

  constructor(private ds: DataclothService, cd: DatacourseService) {
    this.foods = ds.food;
    this.elecourse = cd.foodItems;
  }
}
