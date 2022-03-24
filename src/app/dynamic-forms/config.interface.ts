import {ValidatorFn} from "@angular/forms";
import {ThemePalette} from "@angular/material/core";

export interface Config {
  name: string;
  options?: any;
  type: string;
  validators?: ValidatorsOption;
}
export interface InputOptions {
  label?: string;
  placeholder?: string;
}
export interface SelectOptions {
  label?: string;
  placeholder?: string;
  options: any[];
}
export interface ValidatorsOption {
  [error: string]: {
    fn: ValidatorFn,
    message: string
  }
}
export interface ButtonOptions {
  defaultValue: any;
  handler: (value: any) => any;
  text: string;
  color: ThemePalette;
}
