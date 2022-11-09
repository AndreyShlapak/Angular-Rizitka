import { Injectable } from '@angular/core';
import {FormArray, FormControl, Validators} from "@angular/forms";

@Injectable({
  providedIn: 'root'
})
export class RegistrationControlsService {
  firstName: FormControl = new FormControl('', [
    Validators.required
  ]);

  lastName: FormControl = new FormControl('', [
    Validators.required
  ]);

  age: FormControl = new FormControl(null, [
    Validators.required,
    Validators.min(18)
  ]);

  city: FormControl = new FormControl('', [
    Validators.required
  ]);

  skills: FormArray = new FormArray([]);
}
