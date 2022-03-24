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
import {APP_CONFIG} from "./forms.config";
import {MatGridListModule} from "@angular/material/grid-list";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { ISelectComponent } from './controls/i-select/i-select.component';
import {MatSelectModule} from "@angular/material/select";
import { ErrorsComponent } from './dynamic-forms/errors/errors.component';

@NgModule({
  declarations: [
    AppComponent,
    DynamicFormsComponent,
    IInputComponent,
    DynamicControlDirective,
    ISelectComponent,
    ErrorsComponent
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
    provide: APP_CONFIG, useValue: {input: IInputComponent, select: ISelectComponent}
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
