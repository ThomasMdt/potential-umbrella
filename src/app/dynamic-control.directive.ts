import {
  ComponentRef,
  Directive,
  ElementRef,
  EventEmitter, Host, Inject,
  Injector,
  Input,
  OnInit,
  Optional,
  Output,
  Self, SkipSelf,
  ViewContainerRef
} from '@angular/core';
import {IInputComponent} from "./controls/i-input/i-input.component";
import {
  AbstractControl,
  ControlContainer,
  FormControl,
  FormGroup,
  NG_VALIDATORS,
  NgControl,
  Validator,
  ValidatorFn, Validators
} from "@angular/forms";


@Directive({
  selector: '[anchor]'
})
export class AppDirective extends NgControl implements OnInit {
  @Input() config!: any;
  @Output('ngModelChange') update = new EventEmitter();
  _control!: FormControl;
  override name!: string;
  component!: ComponentRef<IInputComponent>;
  constructor(
    public viewContainerRef: ViewContainerRef,
    @Optional() @Host() @SkipSelf() private parent: ControlContainer,
  ) {
    super();
  }
  ngOnInit() {
    this.name = this.config.name;
    this.viewContainerRef.clear();
    this.component = this.viewContainerRef.createComponent<IInputComponent>(this.config.component);
    this.valueAccessor = this.component.instance;
    this.component.instance.options = this.config.options;
    this._control = this.formDirective?.addControl(this);
    this.component.instance.control = this._control;

  }
  get formDirective(): any { return this.parent ? this.parent.formDirective : null; }
  get control(): FormControl { return this._control; }
  override get path(): string[] {
    return [...this.parent.path !, this.name];
  }
  viewToModelUpdate(newValue: any): void {
    this.update.emit(newValue);
  }



}
