import {Component, forwardRef, Input, OnInit, Optional, Self} from '@angular/core';
import {
  ControlValueAccessor,
  FormControl,
  NG_VALUE_ACCESSOR
} from "@angular/forms";
import {ValidatorsOption} from "../../dynamic-forms/config.interface";

@Component({
  selector: 'i-input',
  templateUrl: './i-input.component.html',
  styleUrls: ['./i-input.component.css'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => IInputComponent),
      multi: true
    },
  ]
})
export class IInputComponent implements ControlValueAccessor {
  value: string = '';
  onChange = (value: any) => {};
  onTouched = () => {};
  @Input() options: any;
  @Input() validators: ValidatorsOption = {};
  @Input() control!: FormControl;

  writeValue(obj: any) {
    this.value = obj;
  }
  registerOnChange(fn: any) {
    this.onChange = fn;
  }
  change(event: any) {
    this.onChange(event);
    this.writeValue(event);
    this.onTouched();
  }
  registerOnTouched(fn: any) {
    this.onTouched = fn;
  }
  constructor() {}
}
