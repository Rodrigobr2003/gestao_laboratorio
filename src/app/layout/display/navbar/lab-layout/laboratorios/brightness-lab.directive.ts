import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appBrightnessLab]'
})
export class BrightnessLabDirective {

  constructor(private el: ElementRef) { 
    this.el.nativeElement.style.transition = 'background-color 0.2s ease-in-out'
  }

  @HostListener('mouseenter') onMouseEnter(){
    this.el.nativeElement.style.backgroundColor = '#9fd2d4'
  }

  @HostListener('mouseleave') onMouseLeave(){
    this.el.nativeElement.style.backgroundColor = '#76ABAE'
  }
}
