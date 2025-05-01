import { Directive, ElementRef, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[is-alcoholic]',
  standalone: true,
})
/**
 * Directive for displaying alcoholic and non-alcoholic cocktails differently.
 */
export class IsAlcoholicDirective implements OnInit {
  @Input() isAlcoholic: boolean;

  constructor(private el: ElementRef) {
  }

  /**
   * Modifies the background color and the text content of the element depending on the isAlcoholic boolean.
   */
  ngOnInit(): void {
    this.el.nativeElement.style.backgroundColor = this.isAlcoholic ? 'deepskyblue' : 'chartreuse';
    this.el.nativeElement.textContent = this.isAlcoholic ? 'Alcoholic' : 'Non-alcoholic';
  }
}
