import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatIconModule} from "@angular/material/icon";
import {MatButtonModule} from "@angular/material/button";
import {MatInputModule} from "@angular/material/input";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { HeaderComponent } from './components/header/header.component';
import { GalleryComponent } from './components/gallery/gallery.component';
import { GalleryCardsComponent } from './components/gallery-cards/gallery-cards.component';
import { GalleryCardComponent } from './components/gallery-card/gallery-card.component';
import { GalleryFiltersComponent } from './components/gallery-filters/gallery-filters.component';
import {MatCardModule} from "@angular/material/card";
import {MatCheckboxModule} from "@angular/material/checkbox";
import { RegistrationFormDialogComponent } from './components/registration-form-dialog/registration-form-dialog.component';
import {MatDialogModule} from "@angular/material/dialog";

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    GalleryComponent,
    GalleryCardsComponent,
    GalleryCardComponent,
    GalleryFiltersComponent,
    RegistrationFormDialogComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatInputModule,
    FormsModule,
    MatCardModule,
    MatCheckboxModule,
    ReactiveFormsModule,
    MatDialogModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
