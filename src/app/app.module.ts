import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { DynamicFormsComponent } from './dynamic-forms/dynamic-forms.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { IInputComponent } from './controls/i-input/i-input.component';
import { DynamicControlDirective } from './dynamic-control.directive';
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {MatButtonModule} from "@angular/material/button";
import {DYNAMIC_FORMS_CONFIG} from "./forms.config";
import {MatGridListModule} from "@angular/material/grid-list";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { ISelectComponent } from './controls/i-select/i-select.component';
import {MatSelectModule} from "@angular/material/select";
import { ErrorsComponent } from './dynamic-forms/errors/errors.component';
import { IButtonComponent } from './controls/i-button/i-button.component';

@NgModule({
  declarations: [
    AppComponent,
    DynamicFormsComponent,
    IInputComponent,
    DynamicControlDirective,
    ISelectComponent,
    ErrorsComponent,
    IButtonComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatGridListModule,
    ReactiveFormsModule,
    FormsModule,
    MatSelectModule
  ],
  providers: [{
    provide: DYNAMIC_FORMS_CONFIG,
    useValue: {
      input: IInputComponent,
      select: ISelectComponent,
      button: IButtonComponent
    },
    multi: true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
