import { Injectable } from '@angular/core';
import {delay, Observable, of} from "rxjs";
import {ProductModel} from "../interfaces/product.model";
import {FormControl, FormGroup} from "@angular/forms";

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  private DELAY: number = 0;
  private productsArray = [
    {
      imageUrl: 'https://content.rozetka.com.ua/goods/images/big_tile/215770075.jpg',
      description: 'Ноутбук Acer Aspire 7 A715-75G-569U (NH.Q87EU.004) Charcoal Black',
      price: 42999,
      details: {
        brand: 'ASUS',
        cpu: 'intel core i3',
        ssd: 128
      }
    },

    {
      imageUrl: 'https://content.rozetka.com.ua/goods/images/big_tile/215770075.jpg',
      description: 'Ноутбук Acer Aspire 7 A715-75G-569U (NH.Q87EU.004) Charcoal Black',
      price: 42999,
      details: {
        brand: 'ASUS',
        cpu: 'intel core i3',
        ssd: 240
      }
    },

    {
      imageUrl: 'https://content.rozetka.com.ua/goods/images/big_tile/215770075.jpg',
      description: 'Ноутбук Acer Aspire 7 A715-75G-569U (NH.Q87EU.004) Charcoal Black',
      price: 42999,
      details: {
        brand: 'ASUS',
        cpu: 'intel core i9',
        ssd: 250
      }
    },

    {
      imageUrl: 'https://content.rozetka.com.ua/goods/images/big_tile/215770075.jpg',
      description: 'Ноутбук Acer Aspire 7 A715-75G-569U (NH.Q87EU.004) Charcoal Black',
      price: 42999,
      details: {
        brand: 'ASUS',
        cpu: 'intel core i9',
        ssd: 256
      }
    },

    {
      imageUrl: 'https://content.rozetka.com.ua/goods/images/big_tile/215770075.jpg',
      description: 'Ноутбук Acer Aspire 7 A715-75G-569U (NH.Q87EU.004) Charcoal Black',
      price: 42999,
      details: {
        brand: 'ASUS',
        cpu: 'intel core i5',
        ssd: 480
      }
    },

    {
      imageUrl: 'https://content.rozetka.com.ua/goods/images/big_tile/215770075.jpg',
      description: 'Ноутбук Acer Aspire 7 A715-75G-569U (NH.Q87EU.004) Charcoal Black',
      price: 42999,
      details: {
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
      details: {
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
      details: {
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
      details: {
        brand: 'Dell',
        cpu: 'intel core i5',
        ssd: 500,
        os: 'Linux'
      }
    },
  ];

  public getProducts() : Observable<ProductModel[]> {
    return of(this.productsArray).pipe(delay(this.DELAY));
  }

  public getUniqueDetailsNamesOfProducts(products: ProductModel[]): string[]  {

    const gainDetailsNamesOfProducts = (detailsNamesOfProducts: string[], product: ProductModel) => {
      const detailsNamesOfProduct = Object.keys(product.details);

      detailsNamesOfProducts.push(...detailsNamesOfProduct);

      return detailsNamesOfProducts;
    };

    const detailsNamesOfProducts = products.reduce(gainDetailsNamesOfProducts, []);

    return [...new Set(detailsNamesOfProducts)];
  }

  public getMapOfProducts(products: ProductModel[], uniqueDetails) : Map<string, Set<string>> {
    const gainProductsDetailsMap = (productsDetailsMap, detailsNameOfProducts) => {

      const gainNamesOfSubDetails = (namesOfSubDetails, product: ProductModel) : Set<string> => {
        const productDetail = product.details[detailsNameOfProducts];

        return productDetail === undefined ? namesOfSubDetails : namesOfSubDetails.add(productDetail);
      }
      const namesOfSubDetails = products.reduce(gainNamesOfSubDetails, new Set());

      productsDetailsMap.set(detailsNameOfProducts, namesOfSubDetails);

      return productsDetailsMap;
    }

    return uniqueDetails.reduce(gainProductsDetailsMap, new Map());
  }

  public generateFormOfDetails(mapOfProducts: Map<string, Set<string>>, uniqueDetails: string[]) : FormGroup {
    const gainDetailControl = (group: FormGroup, controlName: string) => {
      group.addControl(controlName, new FormControl(false));

      return group;
    }
    const gainFormOfDetails = (form: FormGroup, formControlName: string) => {

      const formControl = [...mapOfProducts
        .get(formControlName)]
        .reduce(gainDetailControl, new FormGroup({}));

      form.addControl(formControlName, formControl);

      return form;
    };

    return uniqueDetails.reduce(gainFormOfDetails, new FormGroup({}));
  }
}
