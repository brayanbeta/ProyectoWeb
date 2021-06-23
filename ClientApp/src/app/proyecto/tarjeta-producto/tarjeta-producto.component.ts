import {Component, Input, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import { MatCarousel, MatCarouselComponent } from '@ngmodule/material-carousel';

@Component({
  selector: 'app-tarjeta-producto',
  templateUrl: './tarjeta-producto.component.html',
  styleUrls: ['./tarjeta-producto.component.css']
})
export class TarjetaProductoComponent implements OnInit {

  constructor(private router: Router) {
  }

  slides = [{'image': 'https://i.imgur.com/V1ivcKW.jpg'}, {'image': 'https://i.imgur.com/vGTQVBl.jpg'}];

  ngOnInit(): void {
      // Slider Images
  }


}
