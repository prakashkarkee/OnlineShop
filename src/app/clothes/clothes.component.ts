import { Component } from '@angular/core';
import { DataclothService } from '../datacloth.service';

@Component({
  selector: 'app-clothes',
  templateUrl: './clothes.component.html',
  styleUrls: ['./clothes.component.css']
})
export class ClothesComponent {

  constructor(private ds: DataclothService) {
    this.datacloth = ds.clothes
  }
  datacloth: {
    title: string,
    img: string,
    button: string
  }[] = []

  hi() {
    console.log(this.datacloth);
  }

  ngOnInit() {
    this.hi();
  }
}
