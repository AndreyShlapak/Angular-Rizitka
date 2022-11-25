import {Component, OnInit} from '@angular/core';
import {ProductsService} from "../../services/products.service";
import {FilteredDetailOfProduct, ProductModel} from "../../interfaces/product.model";
import {FormGroup} from "@angular/forms";

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss']
})
export class GalleryComponent implements OnInit {
  public products: ProductModel[];
  public filteredProducts: ProductModel[];
  public loading: boolean = true;

  private emptyFilters: boolean = true;
  private mapOfFilteredProducts: FilteredDetailOfProduct[];

  constructor(public productsService: ProductsService) { }

  initProducts(): void {
    this.productsService.getProducts().subscribe(value => {
      this.products = value;
      this.filteredProducts = this.products;
      this.loading = false;
    })
  }

  getMapOfFilteredProducts(form: FormGroup) : FilteredDetailOfProduct[] {
    const fn = ([detailName, detailValue]) : FilteredDetailOfProduct => {
      const filteredMap = [];

      Object.entries(detailValue).forEach((item) => {
        const [key, value] = item;

        if (value) {
          filteredMap.push(key);
          this.emptyFilters = false;
        }
      });

      return [detailName, filteredMap];
    }

    return Object.entries(form.value).map(fn);
  }

  changeFilteredProducts(mapOfProducts): void {
    if (this.emptyFilters) {
      this.filteredProducts = this.products;
      return;
    }

    const checkByFieldOrTypeCondition  = (product) => {
      for (let [key, value] of mapOfProducts) {
        const condition = product.details[key] !== undefined && (<string[]>value).includes(product.details[key].toString());

        if (condition) return true;
      }
    }

    this.filteredProducts = this.products.filter(checkByFieldOrTypeCondition );
  }

  onFilterChanges(form: FormGroup) : void {
    this.mapOfFilteredProducts = this.getMapOfFilteredProducts(form);
    this.changeFilteredProducts(this.mapOfFilteredProducts);
    this.emptyFilters = true;
  }

  ngOnInit(): void {
    this.initProducts();
  }
}
