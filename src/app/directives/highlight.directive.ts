import { Directive, ElementRef, Renderer2, HostListener } from "@angular/core";

@Directive({
  selector: "[appHighlightOnHover]"
})
export class HighlightDirective {
  constructor(private element: ElementRef, private renderer: Renderer2) {
  }

  @HostListener("mouseenter")
  onMouseEnter() {
    this.highlight(true);
  }
  @HostListener("mouseleave")
  onMouseLeave() {
    this.highlight(false);
  }

  highlight(shouldHighlight: boolean) {
    if (shouldHighlight) {
      this.renderer.setStyle(
        this.element.nativeElement,
        "background",
        "yellow"
      );
    } else {
      this.renderer.removeStyle(this.element.nativeElement, "background");
    }
  }
}
