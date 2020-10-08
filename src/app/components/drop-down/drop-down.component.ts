import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { dropDown } from 'src/app/utilities/animtion';

@Component({
  selector: 'app-drop-down',
  templateUrl: './drop-down.component.html',
  styleUrls: ['./drop-down.component.scss'],
  providers: [
    { provide: NG_VALUE_ACCESSOR, useExisting: DropDownComponent, multi: true }
  ],
  animations: [
    dropDown
  ]
})
export class DropDownComponent implements ControlValueAccessor {
  @Input('title') title;
  @Input('animation') animation;
  @Output('onUpdate') update = new EventEmitter<string>();
  registeredOnChange: (selectedItem: string) => void;
  isOpen = false;
  constructor() { }
  selected: string;
  toggleDropDown() {
    this.isOpen = !this.isOpen;
  }
  writeValue(value: string) {
    this.selected = value;
  }
  changeSelected(dropdownItem: string) {
    this.registeredOnChange(dropdownItem)
    this.update.emit(dropdownItem);
    this.toggleDropDown();
  }
  registerOnChange(fn: () => any) {
    this.registeredOnChange = fn;
  }
  registerOnTouched() {

  }
}
