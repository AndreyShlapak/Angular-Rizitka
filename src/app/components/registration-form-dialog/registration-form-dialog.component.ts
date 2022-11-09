import { Component, OnInit } from '@angular/core';
import {FormArray, FormControl, FormGroup, Validators} from "@angular/forms";
import {RegistrationControlsService} from "../../services/registration-controls.service";

@Component({
  selector: 'app-registration-form-dialog',
  templateUrl: './registration-form-dialog.component.html',
  styleUrls: ['./registration-form-dialog.component.scss']
})
export class RegistrationFormDialogComponent implements OnInit {

  constructor(public registrationControls: RegistrationControlsService) { }

  form: FormGroup = new FormGroup({
    ...this.registrationControls
  });

  ngOnInit(): void {
    console.log(this.form)
  }

  addSkill() {
    const control: FormControl = new FormControl('', Validators.required);

    (this.form.get('skills') as FormArray).push(control);
  }

  getErrorMessage(control: FormControl) : string {
    if (control.hasError('min')) {
      return 'Age must be equal to or greater than 18'
    }
    return 'You must enter a value';
  }
}
