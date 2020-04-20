import { Directive, Input, SimpleChanges, Renderer2, ElementRef } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {
  @Input() searchedWords: string[];
  @Input() text: string;
  @Input() classToApply: string;

  constructor(private el: ElementRef, private renderer: Renderer2) {
    console.log('--------->');

  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log('-------->sdaf', this.searchedWords,this.classToApply);

    if (!this.searchedWords || !this.searchedWords.length || !this.classToApply) {
      this.renderer.setProperty(this.el.nativeElement, 'innerHTML', this.text);
      return;
    }

    this.renderer.setProperty(
      this.el.nativeElement,
      'innerHTML',
      this.getFormattedText()
    );

  }

  getFormattedText() {
    console.log('set data ');
    const re = new RegExp(`(${this.searchedWords.join('|')})`, 'g');
    return this.text.replace(re, `<span class="${this.classToApply}">$1</span>`);
  }
}
