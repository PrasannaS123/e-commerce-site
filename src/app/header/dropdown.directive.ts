import { Directive, ElementRef, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[appDropdown12]',
  exportAs: 'appDropDown1'
})
export class DropdownDirective {

  @HostBinding('class.show') isOpen = false;

  @HostListener('document: click', ['$event']) toggleOpen(event: Event) {
    this.isOpen = this.eleRef.nativeElement.contains(event.target) ? !this.isOpen : false;
  }
  constructor(private eleRef: ElementRef) { }


}
