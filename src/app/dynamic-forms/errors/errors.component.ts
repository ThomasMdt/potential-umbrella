import {Component, Input, OnInit} from '@angular/core';
import {ValidationErrors} from "@angular/forms";
import {ValidatorsOption} from "../config.interface";

@Component({
  selector: 'app-errors',
  templateUrl: './errors.component.html',
  styleUrls: ['./errors.component.css']
})
export class ErrorsComponent implements OnInit {

  @Input() errors: ValidationErrors | null = null;
  @Input() validateConfig: ValidatorsOption = {};

  errorNames: string[] = [];

  constructor() {}

  ngOnInit(): void {
    this.errorNames = Object.keys(this.errors || {});
  }
}
