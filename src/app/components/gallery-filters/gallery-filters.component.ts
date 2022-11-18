import {Component, EventEmitter, Input, OnChanges, OnInit, Output} from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {ProductModel} from "../../interfaces/product.model";

@Component({
  selector: 'app-gallery-filters',
  templateUrl: './gallery-filters.component.html',
  styleUrls: ['./gallery-filters.component.scss'],
})
export class GalleryFiltersComponent {
  private _products: ProductModel[];
  @Input()
  public set products(values: ProductModel[]) {
    this._products = values;
    this.uniqueDetailsNamesOfProducts = this.getUniqueDetailsNamesOfProducts();
    this.mapOfProducts = this.getMapOfProducts();
    this.form = this.generateFormOfDetails();
  }
  public get products() {
    return this._products;
  }

  @Output() filtersChanged = new EventEmitter();

  uniqueDetailsNamesOfProducts: string[];
  mapOfProducts: Map<string, Set<string> >;

  form: FormGroup = new FormGroup({});

  private getUniqueDetailsNamesOfProducts(): string[]  {

    const gainDetailsNamesOfProducts = (detailsNamesOfProducts: string[], product: ProductModel) => {
      const detailsNamesOfProduct = Object.keys(product.details);

      detailsNamesOfProducts.push(...detailsNamesOfProduct);

      return detailsNamesOfProducts;
    };

    const detailsNamesOfProducts = this.products.reduce(gainDetailsNamesOfProducts, []);

    return [...new Set(detailsNamesOfProducts)];
  }

  private getMapOfProducts() : Map<string, Set<string>> {
    const gainProductsDetailsMap = (productsDetailsMap, detailsNameOfProducts) => {

      const gainNamesOfSubDetails = (namesOfSubDetails, product: ProductModel) : Set<string> => {
        const productDetail = product.details[detailsNameOfProducts];

        return productDetail === undefined ? namesOfSubDetails : namesOfSubDetails.add(productDetail);
      }
      const namesOfSubDetails = this.products.reduce(gainNamesOfSubDetails, new Set());

      productsDetailsMap.set(detailsNameOfProducts, namesOfSubDetails);

      return productsDetailsMap;
    }

    return this.uniqueDetailsNamesOfProducts.reduce(gainProductsDetailsMap, new Map());
  }

  private generateFormOfDetails() : FormGroup {
    const gainDetailControl = (group: FormGroup, controlName: string) => {
      group.addControl(controlName, new FormControl(false));

      return group;
    }
    const gainFormOfDetails = (form: FormGroup, formControlName: string) => {

      const formControl = [...this.mapOfProducts
        .get(formControlName)]
        .reduce(gainDetailControl, new FormGroup({}));

      form.addControl(formControlName, formControl);

      return form;
    };

    return this.uniqueDetailsNamesOfProducts.reduce(gainFormOfDetails, new FormGroup({}));
  }

}
