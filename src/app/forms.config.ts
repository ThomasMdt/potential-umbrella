import {IInputComponent} from "./controls/i-input/i-input.component";
import {Component, InjectionToken} from "@angular/core";
export interface FormsConfig {
  [component: string]: Component
}
export const APP_CONFIG = new InjectionToken<FormsConfig>('app.config');
