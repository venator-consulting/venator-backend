import { ElementRef, Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

@Pipe({
  name: 'sanitize'
})
export class SanitizePipe implements PipeTransform {

  constructor(private sanitizer: DomSanitizer) { }

  transform(value: string, ...args: unknown[]): SafeHtml | null  {
    return this.sanitizer.bypassSecurityTrustHtml(value) || '';
  }

}
