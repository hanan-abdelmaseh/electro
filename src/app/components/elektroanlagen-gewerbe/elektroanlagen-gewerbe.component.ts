import { Component } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-elektroanlagen-gewerbe',
  templateUrl: './elektroanlagen-gewerbe.component.html',
  styleUrls: ['./elektroanlagen-gewerbe.component.scss']
})
export class ElektroanlagenGewerbeComponent {
 testimonialOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: false,
    dots: false,
    navSpeed: 700,
    margin: 20,
    navText: [
      '<i class="fa-solid fa-caret-left"></i>',
      '<i class="fa-solid fa-caret-right"></i>',
    ],
    responsive: {
      0: {
        items: 1,
      },
    },
    nav: true,
  };
}
