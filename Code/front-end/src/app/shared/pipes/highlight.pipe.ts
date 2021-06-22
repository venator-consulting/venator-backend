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
    ' *Pfändung* ',
    'Pfaendung',
    'Vollstreckung',
    'Rechtskräftig',
    'Rechtskraeftig',
    'vollzieher',
    'Obergericht',
    'gericht',
    ' OGV ',
    'Stundung',
    'nsolvenz',
    'Aufrechnung',
    'Vollstreckung',
    'Vollstreckungsbescheid',
    ' VB ',
    'Zwangsvollstreckung',
    ' ZV ',
    'Teilzahlung',
    'Ratenzahlung',
    'Drittschuldner',
    'Abtretung',
    'berweisungsbeschluss',
    'PFÜB',
    'Verjährung',
    ' ZPO ',
    'Inkasso',
    'Versicherung Eidesstattliche',
    'Urteil',
    'Haftung',
    'Kostenfestsetzungsbeschluss',
    ' KFB ',
    'Mahnbescheid',
    ' MB ',
    'Mahnverfahren',
    'Rechtskr',
    'Umschuldung',
    'Eidesstattliche Erklärung',
    'Eidesstattliche Erklaerung',
    ' EE ',
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
