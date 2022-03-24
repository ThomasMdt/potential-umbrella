import {Component, Inject, Input, OnInit} from '@angular/core';
import {FormGroup, NG_VALUE_ACCESSOR, FormControl} from "@angular/forms";
import {Config} from "./config.interface";
import {DYNAMIC_FORMS_CONFIG, FormsConfig} from "../forms.config";

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
  @Input() index: number = 0;
  readonly form: FormGroup;

  constructor(@Inject(DYNAMIC_FORMS_CONFIG) private config: FormsConfig[]) {
    this.form = new FormGroup({});
  }

  value: any = null;

  onChange = (value: any) => {};

  onTouched = () => {};

  writeValue(obj: any) {
    this.value = obj;
  }

  registerOnChange(fn: any) {
    fn(this.form.value);
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
  createControl(setting: Config) {
    const validatorsOption = Object.values(setting.validators || []).map(v => v.fn);
    return new FormControl('', validatorsOption);
  }
  extendSettings() {
    const config = this.config[this.index];
    this.settings = this.settings.map(
      (setting: Config) => Object.assign(setting, {component: config[setting.type]}));
  }
  save() {
    this.form.markAllAsTouched();
  }
}
