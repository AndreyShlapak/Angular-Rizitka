import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import {FormArray, FormControl, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-gallery-filters',
  templateUrl: './gallery-filters.component.html',
  styleUrls: ['./gallery-filters.component.scss'],
})
export class GalleryFiltersComponent implements OnInit {
  form: FormGroup = new FormGroup({
    brand: new FormArray([]),
    cpu: new FormArray([]),
    memory: new FormArray([]),
  });

  criterionNames: string[] = Object.keys(this.form.controls);

  private readonly CONTROL_AMOUNT = 20;

  ngOnInit(): void {
    this.generateControls();
  }

  private generateControls(): void {
    for (const controlName of this.criterionNames) {
      for (let i = 0; i < this.CONTROL_AMOUNT; i++) {
        const control: FormControl = new FormControl<boolean>(false);

        (this.form.get(controlName) as FormArray).push(control);
      }
    }
  }
}
