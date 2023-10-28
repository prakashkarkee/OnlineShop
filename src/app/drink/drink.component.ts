import { Component } from '@angular/core';
import { DataclothService } from '../datacloth.service';
import { DatacourseService } from 'service/datacourse.service';

@Component({
  selector: 'app-drink',
  templateUrl: './drink.component.html',
  styleUrls: ['./drink.component.css']
})
export class DrinkComponent {
  drink: { title: string, img: string, button: string }[] = [];
  elecourse: {
    name: string, price: number, type: string, imageUrl: string
  }[] = [];

  constructor(private ds: DataclothService, cd: DatacourseService) {
    this.drink = ds.drink;
    this.elecourse = cd.drinkItems;
  }

}
