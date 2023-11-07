import {
  Directive,
  ElementRef,
  HostBinding,
  HostListener,
  Input,
  OnInit,
  Renderer2,
} from '@angular/core';

@Directive({
  selector: '[appBasicHighlight]',
})
export class BasiHighlightDirective implements OnInit {
  @Input() defaultColor: string = 'green';
  @HostBinding('style.backgroundColor') backgroundColor: string;

  constructor(private elmRef: ElementRef, private render: Renderer2) {}
  ngOnInit(): void {
    //sans render : car c'est pas correct d'accéder directement au style cm ça
    //this.elementRef.nativeElement.style.background = 'green';
    //this.render.setStyle(this.elmRef.nativeElement, 'background-color', 'blue');
  }

  @HostListener('mouseenter') mouseover(eventData: Event) {
    this.backgroundColor = this.defaultColor;
  }

  @HostListener('mouseleave') mouseleave(eventData: Event) {
    //ou mettre uniquement this.backgroundColor="green"; avec le binding ça marchera
    //this.render.setStyle(this.elmRef.nativeElement, 'background-color', 'blue');
    this.backgroundColor = 'blue';
  }
}
