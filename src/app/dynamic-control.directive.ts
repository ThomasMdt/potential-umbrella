import {
  ComponentRef,
  Directive,
  EventEmitter, Host, Input,
  OnInit,
  Optional,
  Output,
  SkipSelf,
  ViewContainerRef
} from '@angular/core';
import {IInputComponent} from "./controls/i-input/i-input.component";
import {
  ControlContainer,
  FormControl,
  NgControl
} from "@angular/forms";


@Directive({
  selector: '[dynamic]'
})
export class DynamicControlDirective extends NgControl implements OnInit {
  @Input() config!: any;

  @Output('ngModelChange') update = new EventEmitter();

  override name!: string;
  private _control!: FormControl;
  private component!: ComponentRef<IInputComponent>;

  override get path(): string[] {
    return [...this.parent.path !, this.name];
  }

  get formDirective(): any { return this.parent ? this.parent.formDirective : null; }
  get control(): FormControl { return this._control; }

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
    this.component.instance.validators = this.config.validators;
    this._control = this.formDirective?.addControl(this);
    this.component.instance.control = this._control;
  }

  viewToModelUpdate(newValue: any): void {
    this.update.emit(newValue);
  }



}
