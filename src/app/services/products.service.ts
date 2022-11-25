import { Injectable } from '@angular/core';
import {delay, Observable, of} from "rxjs";
import {ProductModel} from "../interfaces/product.model";
import {FormControl, FormGroup} from "@angular/forms";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  private DELAY: number = 0;
  private productsUrl = 'api/products';

  constructor(public http: HttpClient) { }

  public getProducts() : Observable<ProductModel[]> {
    return this.http.get<ProductModel[]>(this.productsUrl).pipe(delay(this.DELAY));
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

  public collectProductsDetailValuesByDetailNames(products: ProductModel[], uniqueDetailNames: string[]) : Map<string, Set<string>> {
    const gainProductsDetailsMap = (productsDetailsMap, detailsNameOfProducts) => {

      const gainNamesOfSubDetails = (namesOfSubDetails, product: ProductModel) : Set<string> => {
        const productDetail = product.details[detailsNameOfProducts];

        return productDetail === undefined ? namesOfSubDetails : namesOfSubDetails.add(productDetail);
      }
      const namesOfSubDetails = products.reduce(gainNamesOfSubDetails, new Set());

      productsDetailsMap.set(detailsNameOfProducts, namesOfSubDetails);

      return productsDetailsMap;
    }

    return uniqueDetailNames.reduce(gainProductsDetailsMap, new Map());
  }

  public generateFilterFormControls(productFieldNamesToValues: Map<string, Set<string>>, uniqueDetails: string[]) : FormGroup {
    const gainDetailControl = (group: FormGroup, controlName: string) => {
      group.addControl(controlName, new FormControl(false));

      return group;
    }
    const gainFormOfDetails = (form: FormGroup, formControlName: string) => {

      const formControl = [...productFieldNamesToValues
        .get(formControlName)]
        .reduce(gainDetailControl, new FormGroup({}));

      form.addControl(formControlName, formControl);

      return form;
    };

    return uniqueDetails.reduce(gainFormOfDetails, new FormGroup({}));
  }
}
