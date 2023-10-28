import { Component } from '@angular/core';
import { DataclothService } from '../datacloth.service';
import { DatacourseService } from 'service/datacourse.service';

@Component({
  selector: 'app-electronic',
  templateUrl: './electronic.component.html',
  styleUrls: ['./electronic.component.css']
})
export class ElectronicComponent {
  electronic: { title: string, img: string, button: string }[] = []
  elecourse: {
    name: string, price: number, type: string, imageUrl: string
  }[] = []
  constructor(ds: DataclothService, cd: DatacourseService) {
    this.electronic = ds.electronic;
    this.elecourse = cd.electronicItems;
  }

}


