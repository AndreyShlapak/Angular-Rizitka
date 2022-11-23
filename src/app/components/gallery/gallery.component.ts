import {Component, OnInit} from '@angular/core';
import {ProductsService} from "../../services/products.service";
import {ProductModel} from "../../interfaces/product.model";
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

  private emptyFilters = true;
  private mapOfFilteredProducts;

  constructor(public productsService: ProductsService) { }

  initProducts(): void {
    this.productsService.getProducts().subscribe(value => {
      this.products = value;
      this.filteredProducts = this.products;
      this.loading = false;
    })
  }

  getMapOfFilteredProducts(form: FormGroup) {
    const fn = ([detailName, detailValue]) => {
      const filteredMap = Object.entries(detailValue).reduce(fn2, [])

      return [detailName, filteredMap];
    }
    const fn2 = (acc : string[], v) => {
      const [key, value] = v;

      if (value) {
        acc.push(key);
        this.emptyFilters = false;
      }
      return acc;
    }

    return Object.entries(form.value).map(fn);
  }

  changeFilteredProducts(mapOfProducts): void {
    if (this.emptyFilters) {
      this.filteredProducts = this.products;
      return;
    }

    const gainFilteredProducts = (product) => {
      for (let [key, value] of mapOfProducts) {
        const condition = product.details[key] !== undefined && (<string[]>value).includes(product.details[key].toString());

        if (condition) return true;
      }
    }

    this.filteredProducts = this.products.filter(gainFilteredProducts);
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
