import { Component } from '@angular/core';
import { DatacourseService } from 'service/datacourse.service';

@Component({
  selector: 'app-grocery',
  templateUrl: './grocery.component.html',
  styleUrls: ['./grocery.component.css']
})
export class GroceryComponent {
  elecourse: {
    name: string, price: number, type: string, imageUrl: string
  }[] = []
  constructor(cd: DatacourseService) {
    this.elecourse = cd.groceryItems
  }
}
