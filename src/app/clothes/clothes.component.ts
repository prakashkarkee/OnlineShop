import { Component } from '@angular/core';
import { DataclothService } from '../datacloth.service';
import { DatacourseService } from 'service/datacourse.service';

@Component({
  selector: 'app-clothes',
  templateUrl: './clothes.component.html',
  styleUrls: ['./clothes.component.css']
})
export class ClothesComponent {

  constructor(private ds: DataclothService, cd: DatacourseService) {
    this.datacloth = ds.clothes
    this.elecourse = cd.clothingItems
  }
  datacloth: {
    title: string,
    img: string,
    button: string
  }[] = []
  elecourse: {
    name: string, price: number, type: string, imageUrl: string
  }[] = [];

  ngOnInit() {

  }
}
