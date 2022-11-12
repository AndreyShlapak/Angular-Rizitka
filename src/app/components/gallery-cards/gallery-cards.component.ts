import { Component, OnInit } from '@angular/core';
import {ProductModel} from "../../interfaces/product.model";
import {delay, Observable, of} from "rxjs";

@Component({
  selector: 'app-gallery-cards',
  templateUrl: './gallery-cards.component.html',
  styleUrls: ['./gallery-cards.component.scss']
})
export class GalleryCardsComponent implements OnInit {
  products: ProductModel[];
  products$: Observable<ProductModel[]> = of([
    {
      imageUrl: 'https://content.rozetka.com.ua/goods/images/big_tile/215770075.jpg',
      description: 'Ноутбук Acer Aspire 7 A715-75G-569U (NH.Q87EU.004) Charcoal Black',
      price: 42999
    },

    {
      imageUrl: 'https://content.rozetka.com.ua/goods/images/big_tile/215770075.jpg',
      description: 'Ноутбук Acer Aspire 7 A715-75G-569U (NH.Q87EU.004) Charcoal Black',
      price: 42999
    },

    {
      imageUrl: 'https://content.rozetka.com.ua/goods/images/big_tile/215770075.jpg',
      description: 'Ноутбук Acer Aspire 7 A715-75G-569U (NH.Q87EU.004) Charcoal Black',
      price: 42999
    },

    {
      imageUrl: 'https://content.rozetka.com.ua/goods/images/big_tile/215770075.jpg',
      description: 'Ноутбук Acer Aspire 7 A715-75G-569U (NH.Q87EU.004) Charcoal Black',
      price: 42999
    },

    {
      imageUrl: 'https://content.rozetka.com.ua/goods/images/big_tile/215770075.jpg',
      description: 'Ноутбук Acer Aspire 7 A715-75G-569U (NH.Q87EU.004) Charcoal Black',
      price: 42999
    },

    {
      imageUrl: 'https://content.rozetka.com.ua/goods/images/big_tile/215770075.jpg',
      description: 'Ноутбук Acer Aspire 7 A715-75G-569U (NH.Q87EU.004) Charcoal Black',
      price: 42999
    },

    {
      imageUrl: 'https://content.rozetka.com.ua/goods/images/big_tile/215770075.jpg',
      description: 'Ноутбук Acer Aspire 7 A715-75G-569U (NH.Q87EU.004) Charcoal Black',
      price: 42999
    },

    {
      imageUrl: 'https://content.rozetka.com.ua/goods/images/big_tile/215770075.jpg',
      description: 'Ноутбук Acer Aspire 7 A715-75G-569U (NH.Q87EU.004) Charcoal Black',
      price: 42999
    },

    {
      imageUrl: 'https://content.rozetka.com.ua/goods/images/big_tile/215770075.jpg',
      description: 'Ноутбук Acer Aspire 7 A715-75G-569U (NH.Q87EU.004) Charcoal Black',
      price: 42999
    },

    {
      imageUrl: 'https://content.rozetka.com.ua/goods/images/big_tile/215770075.jpg',
      description: 'Ноутбук Acer Aspire 7 A715-75G-569U (NH.Q87EU.004) Charcoal Black',
      price: 42999
    },

    {
      imageUrl: 'https://content.rozetka.com.ua/goods/images/big_tile/215770075.jpg',
      description: 'Ноутбук Acer Aspire 7 A715-75G-569U (NH.Q87EU.004) Charcoal Black',
      price: 42999
    },

    {
      imageUrl: 'https://content.rozetka.com.ua/goods/images/big_tile/215770075.jpg',
      description: 'Ноутбук Acer Aspire 7 A715-75G-569U (NH.Q87EU.004) Charcoal Black',
      price: 42999
    },

    {
      imageUrl: 'https://content.rozetka.com.ua/goods/images/big_tile/215770075.jpg',
      description: 'Ноутбук Acer Aspire 7 A715-75G-569U (NH.Q87EU.004) Charcoal Black',
      price: 42999
    },

    {
      imageUrl: 'https://content.rozetka.com.ua/goods/images/big_tile/215770075.jpg',
      description: 'Ноутбук Acer Aspire 7 A715-75G-569U (NH.Q87EU.004) Charcoal Black',
      price: 42999
    },

    {
      imageUrl: 'https://content.rozetka.com.ua/goods/images/big_tile/215770075.jpg',
      description: 'Ноутбук Acer Aspire 7 A715-75G-569U (NH.Q87EU.004) Charcoal Black',
      price: 42999
    },
  ]);

  loading = true;

  ngOnInit(): void {
    this.products$
      .pipe(delay(2000))
      .subscribe(value => {
      this.products = value;
      this.loading = false;
    })
  }
}
