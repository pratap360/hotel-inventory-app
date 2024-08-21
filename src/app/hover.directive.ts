import { Directive, ElementRef, HostListener, Input, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[hoinHover]',
  standalone: true
})
export class HoverDirective implements OnInit{

  // color : string = 'yellow';
  // @Input() color : string = 'yellow';
  @Input() hoinHover : string = 'yellow';

  constructor(private element :ElementRef, private renderer : Renderer2) {
    console.log(this.element.nativeElement)
   }

  ngOnInit(): void {
    // 1st way 👇🏼
    // this.element.nativeElement.style.backgroundColor = this.color;
    // 2nd way 👇🏼
    this.renderer.setStyle(this.element.nativeElement, 'backgroundColor', this.hoinHover);
  }

  @HostListener('mouseenter') onMouseEnter() {
    this.renderer.setStyle(this.element.nativeElement, 'backgroundColor', 'pink');
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.renderer.setStyle(this.element.nativeElement, 'backgroundColor', 'purple');
  }
}
