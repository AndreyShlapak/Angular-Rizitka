import { Injectable } from '@angular/core';
import {Observable, of} from "rxjs";
import {ProductModel} from "../interfaces/product.model";

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  getProducts() : Observable<ProductModel[]> {
    return of([
      {
        imageUrl: 'https://content.rozetka.com.ua/goods/images/big_tile/215770075.jpg',
        description: 'Ноутбук Acer Aspire 7 A715-75G-569U (NH.Q87EU.004) Charcoal Black',
        price: 42999,
        criterion: {
          brand: 'ASUS',
          cpu: 'intel core i3',
          ssd: 128
        }
      },

      {
        imageUrl: 'https://content.rozetka.com.ua/goods/images/big_tile/215770075.jpg',
        description: 'Ноутбук Acer Aspire 7 A715-75G-569U (NH.Q87EU.004) Charcoal Black',
        price: 42999,
        criterion: {
          brand: 'ASUS',
          cpu: 'intel core i3',
          ssd: 240
        }
      },

      {
        imageUrl: 'https://content.rozetka.com.ua/goods/images/big_tile/215770075.jpg',
        description: 'Ноутбук Acer Aspire 7 A715-75G-569U (NH.Q87EU.004) Charcoal Black',
        price: 42999,
        criterion: {
          brand: 'ASUS',
          cpu: 'intel core i9',
          ssd: 250
        }
      },

      {
        imageUrl: 'https://content.rozetka.com.ua/goods/images/big_tile/215770075.jpg',
        description: 'Ноутбук Acer Aspire 7 A715-75G-569U (NH.Q87EU.004) Charcoal Black',
        price: 42999,
        criterion: {
          brand: 'ASUS',
          cpu: 'intel core i9',
          ssd: 256
        }
      },

      {
        imageUrl: 'https://content.rozetka.com.ua/goods/images/big_tile/215770075.jpg',
        description: 'Ноутбук Acer Aspire 7 A715-75G-569U (NH.Q87EU.004) Charcoal Black',
        price: 42999,
        criterion: {
          brand: 'ASUS',
          cpu: 'intel core i5',
          ssd: 480
        }
      },

      {
        imageUrl: 'https://content.rozetka.com.ua/goods/images/big_tile/215770075.jpg',
        description: 'Ноутбук Acer Aspire 7 A715-75G-569U (NH.Q87EU.004) Charcoal Black',
        price: 42999,
        criterion: {
          brand: 'ASUS',
          cpu: 'intel core i5',
          ssd: 500,
          os: 'Windows'
        }
      },

      {
        imageUrl: 'https://content.rozetka.com.ua/goods/images/big_tile/215770075.jpg',
        description: 'Ноутбук Acer Aspire 7 A715-75G-569U (NH.Q87EU.004) Charcoal Black',
        price: 42999,
        criterion: {
          brand: 'ASUS',
          cpu: 'intel core i5',
          ssd: 500,
          os: 'macOs'
        }
      },

      {
        imageUrl: 'https://content.rozetka.com.ua/goods/images/big_tile/215770075.jpg',
        description: 'Ноутбук Acer Aspire 7 A715-75G-569U (NH.Q87EU.004) Charcoal Black',
        price: 42999,
        criterion: {
          brand: 'ASUS',
          cpu: 'intel core i5',
          ssd: 500,
          os: 'Linux'
        }
      },

      {
        imageUrl: 'https://content.rozetka.com.ua/goods/images/big_tile/215770075.jpg',
        description: 'Ноутбук Acer Aspire 7 A715-75G-569U (NH.Q87EU.004) Charcoal Black',
        price: 42999,
        criterion: {
          brand: 'Dell',
          cpu: 'intel core i5',
          ssd: 500,
          os: 'Linux'
        }
      },
    ]);
  }
}
