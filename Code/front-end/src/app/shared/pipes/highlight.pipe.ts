import { ElementRef, Pipe, PipeTransform, SecurityContext } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

@Pipe({
  name: 'highlight'
})
export class HighlightPipe implements PipeTransform {

  private readonly _nativeElement: HTMLElement;

  constructor(el: ElementRef, private sanitizer: DomSanitizer) {
    this._nativeElement = el.nativeElement;
  }

  transform(value: string): SafeHtml | null {
    if (!value)
      return null;
    this.keywords.forEach(word => {
      const regEx = new RegExp(word, 'ig');
      let wordList = value.split(" ").filter((elem, index) => {
        return regEx.test(elem);
      });
      wordList.forEach(w => {
        value = value.replace(w, `<span class="highlight"><b>${w}</b></span>`);
      });
    });
    return this.sanitizer.sanitize(SecurityContext.HTML, value) || ''
    // return this.sanitizer.bypassSecurityTrustHtml(value);
    // return null;
  } // end of transform function


  keywords = [
    'Pfändung',
    'Pfaendung',
    'Vollstreckung',
    'Rechtskräftig',
    'Rechtskraeftig',
    'vollzieher',
    'Obergericht',
    'gericht',
    '(\\b|[^a-zA-Z]+)OGV([^a-zA-Z]+|\\s*)',
    'Stundung',
    'nsolvenz',
    'Aufrechnung',
    'Vollstreckung',
    'Vollstreckungsbescheid',
    '(\\b|[^a-zA-Z]+)VB([^a-zA-Z]+|\\s*)',
    'Zwangsvollstreckung',
    '(\\b|[^a-zA-Z]+)ZV([^a-zA-Z]+|\\s*)',
    'Teilzahlung',
    'Ratenzahlung',
    'Drittschuldner',
    'Abtretung',
    'berweisungsbeschluss',
    'PFÜB',
    'Verjährung',
    '(\\b|[^a-zA-Z]+)ZPO([^a-zA-Z]+|\\s*)',
    'Inkasso',
    'Versicherung Eidesstattliche',
    'Urteil',
    'Haftung',
    'Kostenfestsetzungsbeschluss',
    '(\\b|[^a-zA-Z]+)KFB([^a-zA-Z]+|\\s*)',
    'Mahnbescheid',
    '(\\b|[^a-zA-Z]+)MB([^a-zA-Z]+|\\s*)',
    'Mahnverfahren',
    'Rechtskr',
    'Umschuldung',
    'Eidesstattliche Erklärung',
    'Eidesstattliche Erklaerung',
    '(\\b|[^a-zA-Z]+)EE([^a-zA-Z]+|\\s*)',
    'Rest',
    'Restaurant',
    'Restzahlung',
    'Vereinbarung',
    'Schulden',
    'Urteil',
    'Rate',
    'Vergleich'
  ];

}
