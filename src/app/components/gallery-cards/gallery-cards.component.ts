import {Component, Input, OnInit} from '@angular/core';
import {ProductModel} from "../../interfaces/product.model";

@Component({
  selector: 'app-gallery-cards',
  templateUrl: './gallery-cards.component.html',
  styleUrls: ['./gallery-cards.component.scss']
})
export class GalleryCardsComponent implements OnInit {
  @Input() products: ProductModel[];
  @Input() loading: boolean;

  ngOnInit(): void {

  }

}
