import {Component, Input, OnInit} from '@angular/core';
import {ProductModel} from "../../interfaces/product.model";

@Component({
  selector: 'app-gallery-card',
  templateUrl: './gallery-card.component.html',
  styleUrls: ['./gallery-card.component.scss']
})
export class GalleryCardComponent implements OnInit {

  @Input() product: ProductModel;

  constructor() { }

  ngOnInit(): void {
  }

}
