import { ElementRef, Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

@Pipe({
  name: 'starsPriority'
})
export class StarsPriorityPipe implements PipeTransform {

  private readonly _nativeElement: HTMLElement;

  constructor(el: ElementRef, private sanitizer: DomSanitizer) {
    this._nativeElement = el.nativeElement;
  }

  transform(value: number): SafeHtml | null {
    let temp = '';
    switch (value) {
      case 1:
        temp = `<i class="pi pi-star" style="color: #fab710"></i><i class="pi pi-star" style="color: #fab710"></i><i class="pi pi-star" style="color: #fab710"></i>`;
        break;
      case 2:
        temp = `<i class="pi pi-star" style="color: #fab710"></i><i class="pi pi-star" style="color: #fab710"></i>`;
        break;
      case 3:
        temp = `<i class="pi pi-star" style="color: #fab710"></i>`;
        break;
      default: temp = ' ';
    }
    return this.sanitizer.bypassSecurityTrustHtml(temp) || '';
  }

}
