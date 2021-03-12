import {Directive, ElementRef, HostBinding, HostListener} from '@angular/core'

@Directive({
    selector: '[appDropdown]'
  })
  export class DropdownDirective {
    @HostBinding('class.open') isOpen = false;
    @HostListener('document:click', ['$event']) toggleOpen(event: Event) {
      this.isOpen = this.elRef.nativeElement.contains(event.target) ? !this.isOpen : false; // dropdown will close by clicking anywhere
    }
    constructor(private elRef: ElementRef) {}
  }