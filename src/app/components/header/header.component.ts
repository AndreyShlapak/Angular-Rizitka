import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {MatDialog} from "@angular/material/dialog";
import {RegistrationFormDialogComponent} from "../registration-form-dialog/registration-form-dialog.component";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {

  searchValue: string = '';

  constructor(public dialog: MatDialog) {}

  ngOnInit(): void {
  }

  openDialog(enterAnimationDuration: string, exitAnimationDuration: string): void {
    this.dialog.open(RegistrationFormDialogComponent, {
      width: '250px',
      enterAnimationDuration,
      exitAnimationDuration,
    });
  }
}
