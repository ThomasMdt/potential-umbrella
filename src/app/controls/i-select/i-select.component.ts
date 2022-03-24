import {Component, forwardRef, Input} from '@angular/core';
import {ControlValueAccessor, FormControl, NG_VALUE_ACCESSOR} from "@angular/forms";
import {SelectOptions, ValidatorsOption} from "../../dynamic-forms/config.interface";

@Component({
  selector: 'i-select',
  templateUrl: './i-select.component.html',
  styleUrls: ['./i-select.component.css'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => ISelectComponent),
      multi: true
    },
  ]
})
export class ISelectComponent implements ControlValueAccessor {
  @Input() options?: SelectOptions;
  @Input() control!: FormControl;
  @Input() validators!: ValidatorsOption;

  value: any = null;

  onChange = (value: any) => {};

  onTouched = () => {};

  writeValue(obj: any) {
    this.value = obj;
  }

  registerOnChange(fn: any) {
    this.onChange = fn;
  }

  registerOnTouched(fn: any) {
    this.onTouched = fn;
  }

  change(event: any) {
    this.onChange(event);
    this.writeValue(event);
    this.onTouched();
  }

  constructor() { }
}
