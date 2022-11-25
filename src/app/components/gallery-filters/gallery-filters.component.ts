import {Component, EventEmitter, Input, OnChanges, OnInit, Output} from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {ProductModel} from "../../interfaces/product.model";
import {ProductsService} from "../../services/products.service";

@Component({
  selector: 'app-gallery-filters',
  templateUrl: './gallery-filters.component.html',
  styleUrls: ['./gallery-filters.component.scss'],
})
export class GalleryFiltersComponent implements OnChanges{
  private _products: ProductModel[];

  public uniqueDetails: string[];
  public mapOfProducts: Map<string, Set<string>>;
  public form: FormGroup = new FormGroup({});

  constructor(public productsService: ProductsService) { }

  @Output() public filtersChanged = new EventEmitter();

  @Input() public set products(values: ProductModel[]) {
    this._products = values;
  }

  public get products() {
    return this._products;
  }

  private getUniqueDetails() : string[] {
    return this.productsService.getUniqueDetailsNamesOfProducts(this.products);
  }

  private getMapOfProducts(): Map<string, Set<string>> {
    return this.productsService.collectProductsDetailValuesByDetailNames(this.products, this.uniqueDetails);
  }

  private getDetailsForm(): FormGroup {
    return  this.productsService.generateFilterFormControls(this.mapOfProducts, this.uniqueDetails);
  }

  ngOnChanges(): void {
    if (!this.products) return;

    this.uniqueDetails = this.getUniqueDetails();
    this.mapOfProducts = this.getMapOfProducts();
    this.form = this.getDetailsForm();
  }
}
