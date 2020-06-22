import {Directive, ElementRef} from "@angular/core";

@Directive({
  selector:"[appCapitalize]"
})
export class CapitalizeDirective {
  constructor(private element : ElementRef){
    this.element.nativeElement.style.textTransform = "capitalize";
  }
}