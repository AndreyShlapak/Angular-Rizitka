import {Component, EventEmitter, Input, OnChanges, OnInit, Output, ViewEncapsulation} from '@angular/core';
import {FormArray, FormControl, FormGroup} from "@angular/forms";
import {ProductModel} from "../../interfaces/product.model";
import {Observable} from "rxjs";

@Component({
  selector: 'app-gallery-filters',
  templateUrl: './gallery-filters.component.html',
  styleUrls: ['./gallery-filters.component.scss'],
})
export class GalleryFiltersComponent implements OnInit, OnChanges {
  @Input() products: ProductModel[];
  @Input() loading: boolean;

  @Output() onClick = new EventEmitter();

  uniqueDetailsNamesOfProducts: string[];
  mapOfProducts;

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

  private getMapOfProducts() : Map<string, Set<string> > {
    const gainProductsDetailsMap = (productsDetailsMap, detailsNameOfProducts) => {

      const gainNamesOfSubDetails = (namesOfSubDetails, product: ProductModel) => {
        namesOfSubDetails.add(product.details[detailsNameOfProducts]);

        return namesOfSubDetails;
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

    return this.uniqueDetailsNamesOfProducts.reduce(gainFormOfDetails, new FormGroup({}))
  }

  ngOnChanges(): void {
    if (this.loading) return;

    this.uniqueDetailsNamesOfProducts = this.getUniqueDetailsNamesOfProducts();
    this.mapOfProducts = this.getMapOfProducts();
    this.form = this.generateFormOfDetails();
  }

  ngOnInit(): void {

  }
}
