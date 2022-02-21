import { Component, OnInit } from '@angular/core';
import { PrimeNGConfig } from 'primeng/api';
import { BnNgIdleService } from 'bn-ng-idle';
import { AuthService } from './shared/service/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent implements OnInit {


  constructor(private primengConfig: PrimeNGConfig, private bnIdle: BnNgIdleService,
    private _authService: AuthService) { }

  ngOnInit() {
    this.primengConfig.ripple = true;

    this.bnIdle.startWatching(1800).subscribe((isTimedOut: boolean) => {
      console.log('session expired');
      this._authService.logout();
    });

  }


}
