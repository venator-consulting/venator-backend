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
    let wordList = [];
    this.keywords.forEach(word => {
      const regEx = new RegExp(word, 'ig');
      let temp = value.split(" ").filter((elem, index) => regEx.test(elem));
      wordList.push(...temp);
    });
    if (wordList.length > 0)
      wordList.forEach(w => {
        value = value.replace(w, `<span class="highlight"><b>${w}</b></span>`);
      });
    debugger;
    return this.sanitizer.sanitize(SecurityContext.HTML, value) || '';
  } // end of transform function


  keywords = [
    'Zahlungserinnerung',
    'Mahnstufe',
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
    'Eidesstattliche',
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
    'Restzahlung',
    'Vereinbarung',
    'Schulden',
    'Urteil',
    'Rate',
    'Vergleich',

    'Verjaehrung',
    'Lieferstop',
    'Leistungsstopp',
    'Leistungsstop',
    'Lieferstopp',
    'Mahnung',
    'Mahngebühr',
    'Mahngeb',
    'Limit',
    'Überschreitung',
    'Ueberschreitung',
    'Androhung',
    'Drohung',
    'Vorfällig',
    'Vorfaellig',
    'Vorkasse',
    'Proforma',
    'Creditreform',
    'Säumnis',
    'Saeumnis',
    'Anruf',
    'Erinnerung',
    '1.M.',
    '2.M.',
    '3.M.',
    'Letzte',
    'Verzug',
    'Sicherheit',
    'Klage',
    'Aktenzeichen',
    'Nachzahlung',
    'Nachz',
    'Zahlungsplan',
    'Bescheid',
    'Abschlag',
    'Rechtsanwaltsgebühr',
    'Rechtsanwaltsgebuehr',
    'Ra -Gebühr',
    'Ra -Gebuehr',
    'Geschäftszeichen',
    'Geschaeftszeichen',
    'Beistand',
    'Verrechnung',
    'Außergerichtlich',
    'außergerichtl',
    'aussergerichtl',
    'Abtretung',
    'Ablöse',
    'Abloese',
    'Vorschuss',
    'Vorschuß',

  ];

}
