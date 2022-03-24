import {Component, Input, OnInit} from '@angular/core';
import {ControlValueAccessor, FormControl, NG_VALUE_ACCESSOR} from "@angular/forms";
import {ButtonOptions, ValidatorsOption} from "../../dynamic-forms/config.interface";

@Component({
  selector: 'app-i-button',
  templateUrl: './i-button.component.html',
  styleUrls: ['./i-button.component.css'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: IButtonComponent
    }
  ]
})
export class IButtonComponent implements ControlValueAccessor, OnInit {
  value: any;
  onChange = (value: any) => {};
  onTouched = () => {};

  @Input() options!: ButtonOptions;
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
  constructor() { }

  handelClick() {
    this.value = this.options.handler(this.value);
    this.onChange(this.value);
  }
  ngOnInit() {
    this.value = this.options.defaultValue;
  }
}
