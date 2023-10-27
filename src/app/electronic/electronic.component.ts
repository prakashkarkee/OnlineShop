import { Component } from '@angular/core';
import { DataclothService } from '../datacloth.service';

@Component({
  selector: 'app-electronic',
  templateUrl: './electronic.component.html',
  styleUrls: ['./electronic.component.css']
})
export class ElectronicComponent {
  electronic: { title: string, img: string, button: string }[] = []
  constructor(ds: DataclothService) {
    this.electronic = ds.electronic;
  }

}
