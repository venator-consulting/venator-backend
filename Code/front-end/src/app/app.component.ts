import { Component, OnInit } from '@angular/core';
import { PrimeNGConfig } from 'primeng/api';
import { BnNgIdleService } from 'bn-ng-idle';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent implements OnInit {


  constructor(private primengConfig: PrimeNGConfig, private bnIdle: BnNgIdleService, private _router: Router) { }

  ngOnInit() {
    this.primengConfig.ripple = true;

    this.bnIdle.startWatching(900).subscribe((isTimedOut: boolean) => {
        console.log('session expired');
        localStorage.clear();
        this._router.navigate(['/']);
    });
    
  }

  
}
