import {Component, EventEmitter, Input, OnChanges, OnInit, Output, ViewEncapsulation} from '@angular/core';
import {FormArray, FormControl, FormGroup} from "@angular/forms";
import {ProductModel} from "../../interfaces/product.model";

@Component({
  selector: 'app-gallery-filters',
  templateUrl: './gallery-filters.component.html',
  styleUrls: ['./gallery-filters.component.scss'],
})
export class GalleryFiltersComponent implements OnInit, OnChanges {
  @Input() products: ProductModel[];
  @Input() loading: boolean;

  @Output() onClick = new EventEmitter();

  criterions;
  data;

  form: FormGroup = new FormGroup({});

  private getUniqueNamesOfCriterion(): string[]  {
    const fn = (previousValue, currentValue) => {
      previousValue.push(...Object.keys(currentValue.criterion));
      return previousValue;
    };
    const criterionWithDublicate = this.products.reduce(fn, []);

    return [...new Set(criterionWithDublicate)] as string[];
  }

  private getUniqueValuesOfCriterion() {
    const obj = {};

    for (let criterion of this.criterions) {
      obj[criterion] = new Set();

      for (let product of this.products) {
        obj[criterion].add(product.criterion[criterion]);
      }

      obj[criterion] = [...obj[criterion]].filter(Boolean);

    }
    return obj;
  }

  private generateCriterion() {
    return this.criterions.reduce((controls, control, index) => {
      const innerControls = {};

      for (let value of this.data[control]) {
        innerControls[value] = new FormControl(false);
      }

      controls[control] = new FormGroup(innerControls)
      return controls;
    }, {})
  }

  ngOnChanges(): void {
    if (this.loading) return;

    this.criterions = this.getUniqueNamesOfCriterion();
    this.data = this.getUniqueValuesOfCriterion();
    this.form = new FormGroup(this.generateCriterion());

  }

  ngOnInit(): void {

  }
}
