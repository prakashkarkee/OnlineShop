import { Component } from '@angular/core';
import { DataclothService } from '../datacloth.service';

@Component({
  selector: 'app-drink',
  templateUrl: './drink.component.html',
  styleUrls: ['./drink.component.css']
})
export class DrinkComponent {
  drink: { title: string, img: string, button: string }[] = []

  constructor(private ds: DataclothService) {
    this.drink = ds.drink;
  }

}
