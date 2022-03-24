import { Component } from '@angular/core';
import {Config, InputOptions, SelectOptions} from "./dynamic-forms/config.interface";
import {FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  readonly config: Config[] = [
    {
      type: 'input',
      name: 'input',
      options: {
        label: 'Name',
        placeholder: 'Input name',
      },
      validators: {
        required: {
          fn: Validators.required,
          message: 'Not empty'
        }
      }
    },
    {
      type: 'select',
      name: 'select',
      options: {
        label: 'Last name',
        placeholder: 'Choose option',
        options: ['ss', 'sss3', 'ssss5']
      }
    }
  ];
  readonly form = new FormGroup({
    forms: new FormControl({})
  })
  constructor() {

  }
}
