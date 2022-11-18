import { Component, OnInit } from '@angular/core';
import {ProductsService} from "../../services/products.service";
import {delay, Observable} from "rxjs";
import {ProductModel} from "../../interfaces/product.model";
import {FormGroup} from "@angular/forms";

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss']
})
export class GalleryComponent implements OnInit {
  private products$: Observable<ProductModel[]>;
  public products: ProductModel[];
  public filteredProducts: ProductModel[];

  public loading: boolean = true;

  constructor(public productsService: ProductsService) { }

  initProducts(): void {
    this.products$ = this.productsService.getProducts();
    this.products$.subscribe(value => {
      this.products = value;
      this.filteredProducts = this.products;
      this.loading = false;
    })
  }

  onFiltersChange(form: FormGroup) {
    const obj = {};
    let empty = true;

    for (const [criterionKey, criterionValues] of Object.entries(form['value'])) {
      obj[criterionKey] = []

      for (const [key, value] of Object.entries(criterionValues)) {
        if (value) {
          empty = false;
          obj[criterionKey].push(key);
        }
      }
    }

    if (!empty) {
      this.filteredProducts = this.products.filter((item) => {
        for (let [key, value] of Object.entries(obj)) {

          if (item.details[key] !== undefined && (<string[]>value).includes(item.details[key].toString())) {
            return true;
          }
        }
        return false;
      })
    }
    else {
      this.filteredProducts = this.products;
    }
  }

  ngOnInit(): void {
    this.initProducts();
  }

}
