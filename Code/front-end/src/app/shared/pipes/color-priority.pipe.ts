import { ElementRef, Pipe, PipeTransform, SecurityContext } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

@Pipe({
  name: 'colorPriority'
})
export class ColorPriorityPipe implements PipeTransform {

  private readonly _nativeElement: HTMLElement;

  constructor(el: ElementRef, private sanitizer: DomSanitizer) {
    this._nativeElement = el.nativeElement;
  }

  transform(value: string): SafeHtml | null {
    let temp = '';
    switch (value) {
      case 'High': case 'Hoog':
        temp = `<span style="color: red; text-shadow: 1px 1px 1px black;">${value}</span>`;
        break;
      case 'Medium': case 'Medium':
        temp = `<span style="color: orange; text-shadow: 1px 1px 1px black;">${value}</span>`;
        break;
      case 'Low': case 'Laag':
        temp = `<span style="color: #21ff5c; text-shadow: 1px 1px 1px black;">${value}</span>`;
        break;
      default: temp = value;
    }
    return this.sanitizer.bypassSecurityTrustHtml(temp) || '';
  }

}
