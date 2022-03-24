import {Component, Inject, Input, OnInit} from '@angular/core';
import {APP_CONFIG, FormsConfig} from "../forms.config";
import {FormGroup, FormBuilder, Validators, NG_VALUE_ACCESSOR, FormControl, ValidatorFn} from "@angular/forms";
import {Config} from "./config.interface";
@Component({
  selector: 'dynamic-forms',
  templateUrl: './dynamic-forms.component.html',
  styleUrls: ['./dynamic-forms.component.css'],
  providers: [{
    provide: NG_VALUE_ACCESSOR,
    useExisting: DynamicFormsComponent,
    multi: true
  }]
})
export class DynamicFormsComponent implements OnInit {

  @Input() settings!: Config[];

  readonly form: FormGroup;

  constructor(@Inject(APP_CONFIG) private config: FormsConfig, private fb: FormBuilder) {
    this.form = new FormGroup({});
  }

  value: any = null;

  onChange = (value: any) => {};

  onTouched = () => {};

  writeValue(obj: any) {
    this.value = obj;
  }

  registerOnChange(fn: any) {
    this.form.valueChanges.subscribe(values => fn(values));
  }

  registerOnTouched(fn: any) {
    this.onTouched = fn;
  }

  ngOnInit(): void {
    this.extendSettings();
    this.createFormGroup();
  }
  createFormGroup() {
    this.settings.forEach((setting: any) => {
      this.form.addControl(setting.name, this.createControl(setting));
    })
  }
  createControl(setting: any) {
    return new FormControl('', Object.values(setting.validators || []).map((v: any) => v.fn as ValidatorFn));
  }
  extendSettings() {
    this.settings = this.settings.map(
      (setting: any) => Object.assign(setting, {component: this.config[setting.type]}))
  }
  save() {
    this.form.markAllAsTouched();
  }
}
