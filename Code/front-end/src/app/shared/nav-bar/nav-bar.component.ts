import { Component, OnInit, ViewChild } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { LangChangeEvent, TranslateService } from '@ngx-translate/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.sass'],
})
export class NavBarComponent implements OnInit {
  sideBarShow: boolean = false;
  menuItems: MenuItem[] = [];
  userPages: MenuItem[] = [];
  sidebarItems: MenuItem[] = [];
  username: string = localStorage.getItem('username');
  role: string = localStorage.getItem('role');
  browserLang: string = 'de';
  orgId: number;
  prcId: number;
  @ViewChild('menu') menu: any;
  currentProcedureStatus: string;

  constructor(
    public _translateService: TranslateService,
    private _router: Router
  ) {
    this._translateService.addLangs(['de', 'en']);
    this._translateService.setDefaultLang('de');
    this.browserLang = this._translateService.getBrowserLang();
    this._translateService.use(
      this.browserLang.match(/de|en/) ? this.browserLang : 'de'
    );
  }

  async ngOnInit() {
    this.username = localStorage.getItem('username');
    this.role = localStorage.getItem('role');
    this.orgId = +localStorage.getItem('organisationId');
    this.prcId = +localStorage.getItem('currentProcedureId');

    this._translateService.onLangChange.subscribe((event: LangChangeEvent) => {
      this._translateService.use(event.lang);
      localStorage.setItem('lang', event.lang);
    });
    this.userPages = [
      {
        label: await this._translateService.get('setting').toPromise(),
        icon: 'pi pi-globe',
        visible:
          localStorage.getItem('role') == 'Admin' ||
          localStorage.getItem('role') == 'Manager',
      },
      {
        label: await this._translateService.get('logout').toPromise(),
        icon: 'pi pi-fw pi-power-off',
        command: () => {
          this.logout();
        },
      },
    ];
  }

  getSideBarItems() {
    this.sideBarShow = true;
    this.currentProcedureStatus = localStorage.getItem('currentProcedureStatus');
    this._translateService.get('sideBarMenu').subscribe((elem) => {
      if (this.role === 'Admin') {
        this.sidebarItems = [
          {
            label: 'Administrator',
            items: [
              {
                label: 'Import',
                icon: 'pi pi-file',
                routerLink: ['/dashboard/admin/import'],
                command: () => {
                  this.sideBarShow = false;
                },
              },
              {
                label: elem.addUser,
                icon: 'pi pi-user-plus',
                routerLink: ['/dashboard/admin/admin/add'],
                command: () => {
                  this.sideBarShow = false;
                },
              },
              {
                label: elem.addOrganisation,
                icon: 'pi pi-plus-circle',
                routerLink: ['/dashboard/admin/organisation/add'],
                command: () => {
                  this.sideBarShow = false;
                },
              },
              {
                label: elem.addDocumentType,
                icon: 'pi pi-plus-circle',
                routerLink: ['/dashboard/admin/document-type'],
                command: () => {
                  this.sideBarShow = false;
                },
              },
              {
                label: elem.addAccountType,
                icon: 'pi pi-plus-circle',
                routerLink: ['/dashboard/admin/accountType'],
                command: () => {
                  this.sideBarShow = false;
                },
              },
              {
                label: elem.resetPassword,
                icon: 'pi pi-lock',
                routerLink: ['/dashboard/resetPassword'],
                command: () => {
                  this.sideBarShow = false;
                },
              },

              {
                label: elem.preCalculateAnalysis,
                icon: 'pi pi-flag',
                routerLink: ['/dashboard/admin/pre-calc'],
                command: () => {
                  this.sideBarShow = false;
                },
                disabled:
                  +localStorage.getItem('organisationId') <= 0 ||
                  +localStorage.getItem('currentProcedureId') <= 0 ||
                  !(localStorage.getItem('currentProcedureStatus') === 'IMPORTED' ||
                    localStorage.getItem('currentProcedureStatus') === 'PARTIAL_CALCULATED' ||
                    localStorage.getItem('currentProcedureStatus') === 'CALCULATED'),
              },

            ],
          },
          {
            label: 'Dashboard',
            items: [
              {
                label: elem.organisations,
                icon: 'pi  pi-home',
                routerLink: ['/dashboard/admin/dashboard'],
                command: () => {
                  this.sideBarShow = false;
                },
              },
            ],
          },
          {
            label: elem.data,
            items: [
              {
                label: elem.data,
                icon: 'pi  pi-table',
                routerLink: ['/dashboard/shared/data'],
                command: () => {
                  this.sideBarShow = false;
                },
                disabled:
                  +localStorage.getItem('organisationId') <= 0 ||
                  +localStorage.getItem('currentProcedureId') <= 0 ||
                  localStorage.getItem('currentProcedureData') != 'true' ||
                  !(localStorage.getItem('currentProcedureStatus') === 'IMPORTED' ||
                    localStorage.getItem('currentProcedureStatus') === 'PARTIAL_CALCULATED' ||
                    localStorage.getItem('currentProcedureStatus') === 'CALCULATED'),
              },
            ],
          },
          {
            label: elem.analysis,
            items: [
              {
                label: elem.amountAnalyisis,
                icon: 'pi pi-euro',
                routerLink: ['/dashboard/analysis/amount'],
                disabled: localStorage.getItem('currentProcedureAmount') != 'true' ||
                  localStorage.getItem('currentProcedureAnalysis') != 'true' ||
                  +localStorage.getItem('organisationId') <= 0 ||
                  +localStorage.getItem('currentProcedureId') <= 0,
                command: () => {
                  this.sideBarShow = false;
                },
              },
              {
                label: elem.textAnalysis,
                icon: 'pi pi-file',
                routerLink: ['/dashboard/analysis/text'],
                disabled: localStorage.getItem('currentProcedureText_word') != 'true' ||
                  localStorage.getItem('currentProcedureText_account') != 'true' ||
                  localStorage.getItem('currentProcedureAnalysis') != 'true' ||
                  +localStorage.getItem('organisationId') <= 0 ||
                  +localStorage.getItem('currentProcedureId') <= 0,
                command: () => {
                  this.sideBarShow = false;
                },
              },
              {
                label: elem.paymentAnalyse,
                icon: 'pi pi-credit-card',
                routerLink: ['/dashboard/analysis/payment'],
                disabled: localStorage.getItem('currentProcedurePayment') != 'true' ||
                  localStorage.getItem('currentProcedureAnalysis') != 'true' ||
                  +localStorage.getItem('organisationId') <= 0 ||
                  +localStorage.getItem('currentProcedureId') <= 0,
                command: () => {
                  this.sideBarShow = false;
                },
              },
              {
                label: elem.creditorsAnalyse,
                icon: 'pi pi-chart-bar',
                routerLink: ['/dashboard/analysis/creditor'],
                disabled: localStorage.getItem('currentProcedureCredit') != 'true' ||
                  localStorage.getItem('currentProcedureAnalysis') != 'true' ||
                  +localStorage.getItem('organisationId') <= 0 ||
                  +localStorage.getItem('currentProcedureId') <= 0,
                command: () => {
                  this.sideBarShow = false;
                },
              },
            ],
          },
          {
            label: elem.liquidity,
            items: [
              {
                label: elem.openingBalance,
                icon: 'pi  pi-plus-circle',
                routerLink: ['/dashboard/liquidity/openingBalance'],
                disabled:
                  +localStorage.getItem('organisationId') <= 0 ||
                  +localStorage.getItem('currentProcedureId') <= 0 ||
                  localStorage.getItem('currentProcedureAnalysis') != 'true' ||
                  !(localStorage.getItem('currentProcedureStatus') === 'IMPORTED' ||
                    localStorage.getItem('currentProcedureStatus') === 'PARTIAL_CALCULATED' ||
                    localStorage.getItem('currentProcedureStatus') === 'CALCULATED'),
                command: () => {
                  this.sideBarShow = false;
                },
              },
              {
                label: elem.creditLine,
                icon: 'pi  pi-plus-circle',
                routerLink: ['/dashboard/liquidity/creditLine'],
                disabled:
                  +localStorage.getItem('organisationId') <= 0 ||
                  +localStorage.getItem('currentProcedureId') <= 0 ||
                  localStorage.getItem('currentProcedureAnalysis') != 'true' ||
                  !(localStorage.getItem('currentProcedureStatus') === 'IMPORTED' ||
                    localStorage.getItem('currentProcedureStatus') === 'PARTIAL_CALCULATED' ||
                    localStorage.getItem('currentProcedureStatus') === 'CALCULATED'),
                command: () => {
                  this.sideBarShow = false;
                },
              },
              {
                label: elem.freeLiquidity,
                icon: 'pi  pi-chart-line',
                routerLink: ['/dashboard/liquidity/freeLiquidity'],
                disabled:
                  localStorage.getItem('currentProcedureLiquidity') != 'true' ||
                  +localStorage.getItem('organisationId') <= 0 ||
                  +localStorage.getItem('currentProcedureId') <= 0 ||
                  localStorage.getItem('currentProcedureAnalysis') != 'true' ||
                  !(localStorage.getItem('currentProcedureStatus') === 'IMPORTED' ||
                    localStorage.getItem('currentProcedureStatus') === 'PARTIAL_CALCULATED' ||
                    localStorage.getItem('currentProcedureStatus') === 'CALCULATED'),
                command: () => {
                  this.sideBarShow = false;
                },
              },
            ],
          },
        ];
      } else if (this.role === 'Manager') {
        this.sidebarItems = [
          {
            label: 'Dashboard',
            items: [
              {
                label: elem.procedures,
                icon: 'pi  pi-home',
                routerLink: ['/dashboard/shared/user/procedures'],
                command: () => {
                  this.sideBarShow = false;
                },
              },
              {
                label: elem.users,
                icon: 'pi pi-users',
                routerLink: ['/dashboard/shared/user/users'],
                command: () => {
                  this.sideBarShow = false;
                },
              },
            ],
          },
          {
            label: elem.data,
            items: [
              {
                label: elem.table,
                icon: 'pi pi-table',
                routerLink: ['/dashboard/data'],
                disabled:
                  +localStorage.getItem('organisationId') <= 0 ||
                  +localStorage.getItem('currentProcedureId') <= 0 ||
                  localStorage.getItem('currentProcedureData') != 'true' ||
                  !(localStorage.getItem('currentProcedureStatus') === 'IMPORTED' ||
                    localStorage.getItem('currentProcedureStatus') === 'PARTIAL_CALCULATED' ||
                    localStorage.getItem('currentProcedureStatus') === 'CALCULATED'),
              },
            ],
          },

          {
            label: elem.analysis,
            items: [
              {
                label: elem.amountAnalyisis,
                icon: 'pi pi-euro',
                routerLink: ['/dashboard/analysis/amount'],
                disabled: localStorage.getItem('currentProcedureAmount') != 'true' ||
                  localStorage.getItem('currentProcedureAnalysis') != 'true' ||
                  +localStorage.getItem('organisationId') <= 0 ||
                  +localStorage.getItem('currentProcedureId') <= 0,
                command: () => {
                  this.sideBarShow = false;
                },
              },
              {
                label: elem.textAnalysis,
                icon: 'pi pi-inbox',
                routerLink: ['/dashboard/analysis/text'],
                disabled: localStorage.getItem('currentProcedureText_word') != 'true' ||
                  localStorage.getItem('currentProcedureText_account') != 'true' ||
                  localStorage.getItem('currentProcedureAnalysis') != 'true' ||
                  +localStorage.getItem('organisationId') <= 0 ||
                  +localStorage.getItem('currentProcedureId') <= 0,
                command: () => {
                  this.sideBarShow = false;
                },
              },
              {
                label: elem.paymentAnalyse,
                icon: 'pi pi-credit-card',
                routerLink: ['/dashboard/analysis/payment'],
                disabled: localStorage.getItem('currentProcedurePayment') != 'true' ||
                  localStorage.getItem('currentProcedureDueDate') != 'true' ||
                  localStorage.getItem('currentProcedureAnalysis') != 'true' ||
                  +localStorage.getItem('organisationId') <= 0 ||
                  +localStorage.getItem('currentProcedureId') <= 0,
                command: () => {
                  this.sideBarShow = false;
                },
              },
              {
                label: elem.creditorsAnalyse,
                icon: 'pi pi-chart-bar',
                routerLink: ['/dashboard/analysis/creditor'],
                disabled: localStorage.getItem('currentProcedureCredit') != 'true' ||
                  localStorage.getItem('currentProcedureAnalysis') != 'true' ||
                  +localStorage.getItem('organisationId') <= 0 ||
                  +localStorage.getItem('currentProcedureId') <= 0,
                command: () => {
                  this.sideBarShow = false;
                },
              },
            ],
          },
        ];
      } else if (this.role === 'User') {
        this.sidebarItems = [
          {
            label: 'Dashboard',
            items: [
              {
                label: elem.procedures,
                icon: 'pi  pi-home',
                routerLink: ['/dashboard/shared/user/procedures'],
                command: () => {
                  this.sideBarShow = false;
                },
              },
            ],
          },
          {
            label: elem.data,
            items: [
              {
                label: elem.table,
                icon: 'pi pi-table',
                routerLink: ['/dashboard/data'],
                disabled:
                  +localStorage.getItem('organisationId') <= 0 ||
                  +localStorage.getItem('currentProcedureId') <= 0 ||
                  localStorage.getItem('currentProcedureData') != 'true' ||
                  !(localStorage.getItem('currentProcedureStatus') === 'IMPORTED' ||
                    localStorage.getItem('currentProcedureStatus') === 'PARTIAL_CALCULATED' ||
                    localStorage.getItem('currentProcedureStatus') === 'CALCULATED'),
              },
            ],
          },

          {
            label: elem.analysis,
            items: [
              {
                label: elem.amountAnalyisis,
                icon: 'pi pi-euro',
                routerLink: ['/dashboard/analysis/amount'],
                disabled: localStorage.getItem('currentProcedureAmount') != 'true' ||
                  localStorage.getItem('currentProcedureAnalysis') != 'true' ||
                  +localStorage.getItem('organisationId') <= 0 ||
                  +localStorage.getItem('currentProcedureId') <= 0,
                command: () => {
                  this.sideBarShow = false;
                },
              },
              {
                label: elem.textAnalysis,
                icon: 'pi pi-inbox',
                routerLink: ['/dashboard/analysis/text'],
                disabled: localStorage.getItem('currentProcedureText_word') != 'true' ||
                  localStorage.getItem('currentProcedureText_account') != 'true' ||
                  localStorage.getItem('currentProcedureAnalysis') != 'true' ||
                  +localStorage.getItem('organisationId') <= 0 ||
                  +localStorage.getItem('currentProcedureId') <= 0,
                command: () => {
                  this.sideBarShow = false;
                },
              },
              {
                label: elem.paymentAnalyse,
                icon: 'pi pi-credit-card',
                routerLink: ['/dashboard/analysis/payment'],
                disabled: localStorage.getItem('currentProcedurePayment') != 'true' ||
                  localStorage.getItem('currentProcedureDueDate') != 'true' ||
                  localStorage.getItem('currentProcedureAnalysis') != 'true' ||
                  +localStorage.getItem('organisationId') <= 0 ||
                  +localStorage.getItem('currentProcedureId') <= 0,
                command: () => {
                  this.sideBarShow = false;
                },
              },
              {
                label: elem.creditorsAnalyse,
                icon: 'pi pi-chart-bar',
                routerLink: ['/dashboard/analysis/creditor'],
                disabled: localStorage.getItem('currentProcedureCredit') != 'true' ||
                  localStorage.getItem('currentProcedureAnalysis') != 'true' ||
                  +localStorage.getItem('organisationId') <= 0 ||
                  +localStorage.getItem('currentProcedureId') <= 0,
                command: () => {
                  this.sideBarShow = false;
                },
              },
            ],
          },
        ];
      }
    });
  }

  logout() {
    localStorage.clear();
    this._router.navigate(['/']);
  }
}
