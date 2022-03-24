import {Component, InjectionToken} from "@angular/core";
export interface FormsConfig {
  [component: string]: Component
}
export const DYNAMIC_FORMS_CONFIG = new InjectionToken<FormsConfig>('app.config');
