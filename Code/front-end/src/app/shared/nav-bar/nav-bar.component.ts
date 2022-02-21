import { ChangeDetectorRef, Component, Injectable, OnInit, ViewChild } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { LangChangeEvent, TranslateService } from '@ngx-translate/core';
import { Router } from '@angular/router';
import { HostListener } from "@angular/core";
import { Observable } from 'rxjs';
import { AuthService } from '../service/auth.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.sass'],
})
@Injectable({
  providedIn: 'root'
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
  prcNameObserve: Observable<string>;
  prcName: string = localStorage.getItem('currentProcedureName');
  scrWidth: number;
  prcStyle: string;

  constructor(
    public _translateService: TranslateService,
    private _authService: AuthService
  ) {
    this._translateService.addLangs(['de', 'en']);
    this._translateService.setDefaultLang('de');
    this.browserLang = this._translateService.getBrowserLang();
    this._translateService.use(this.browserLang.match(/de|en/) ? this.browserLang : 'de');
    this.getScreenSize();
  }

  @HostListener('window:resize', ['$event'])
  getScreenSize(event?) {
    // this.scrHeight = window.innerHeight;
    this.scrWidth = window.innerWidth;
    this.prcStyle = 'position: fixed; z-index: 999; top: 30px; right:' + (this.scrWidth / 2 - 25) + 'px; color: #ffffff; height: 100px; font-size: x-large;';
    // let elem: HTMLElement = document.getElementById('navbar-title');
    // elem?.setAttribute("style", `margin-left: ${this.scrWidth/3} !important`);
  }


  updateLocal() {
    debugger;
    this.prcName = localStorage.getItem('currentProcedureName');
    let elem: HTMLElement = document.getElementById('prc');
    elem.innerHTML = this.prcName;
    this.prcStyle = 'position: fixed; z-index: 999; top: 30px; right:' + (this.scrWidth / 2 - this.prcName?.length) + 'px; color: #ffffff; height: 100px; font-size: x-large;';
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
                label: elem.emailImport,
                icon: 'pi pi-file',
                routerLink: ['/dashboard/admin/import-pst'],
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
              {
                label: 'Records Matching',
                icon: 'pi  pi-plus-circle',
                routerLink: ['/dashboard/admin/record-matching'],
                disabled:
                  +localStorage.getItem('organisationId') <= 0 ||
                  +localStorage.getItem('currentProcedureId') <= 0 ||
                  localStorage.getItem('currentProcedureDocType') != 'true' ||
                  !(localStorage.getItem('currentProcedureStatus') === 'IMPORTED' ||
                    localStorage.getItem('currentProcedureStatus') === 'PARTIAL_CALCULATED' ||
                    localStorage.getItem('currentProcedureStatus') === 'CALCULATED'),
                command: () => {
                  this.sideBarShow = false;
                },
              },

            ],
          },
          // {
          //   label: 'Website Managment',
          //   items: [
          //     {
          //       label: 'Cover',
          //       icon: 'pi pi-image',
          //       routerLink: ['/dashboard/admin/website/slider'],
          //       command: () => {
          //         this.sideBarShow = false;
          //       },
          //     },
          //     {
          //       label: 'Services',
          //       icon: 'pi pi-cog',
          //       routerLink: ['/dashboard/admin/website/services'],
          //       command: () => {
          //         this.sideBarShow = false;
          //       },
          //     },
          //     {
          //       label: 'About us',
          //       icon: 'pi pi-info-circle',
          //       routerLink: ['/dashboard/admin/website/about'],
          //       command: () => {
          //         this.sideBarShow = false;
          //       },
          //     },
          //     {
          //       label: 'Contact us',
          //       icon: 'pi pi-phone',
          //       routerLink: ['/dashboard/admin/website/contact'],
          //       command: () => {
          //         this.sideBarShow = false;
          //       },
          //     },
          //   ]
          // },
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
              {
                label: 'E-mails',
                icon: 'pi pi-envelope',
                routerLink: ['/dashboard/analysis/mail-history'],
                disabled:
                  +localStorage.getItem('organisationId') <= 0 ||
                  +localStorage.getItem('currentProcedureId') <= 0 ||
                  localStorage.getItem('currentProcedureData') != 'true' ||
                  !(localStorage.getItem('currentProcedureStatus') === 'IMPORTED' ||
                    localStorage.getItem('currentProcedureStatus') === 'PARTIAL_CALCULATED' ||
                    localStorage.getItem('currentProcedureStatus') === 'CALCULATED'),
                command: () => {
                  this.sideBarShow = false;
                },
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
                label: 'Email Analysis ',
                icon: 'pi pi-envelope',
                routerLink: ['/dashboard/analysis/mail'],
                disabled: localStorage.getItem('currentProcedureMailWord') != 'true' ||
                  localStorage.getItem('currentProcedureMailSender') != 'true' ||
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
                label: elem.dueDateAnalyse,
                icon: 'pi pi-credit-card',
                routerLink: ['/dashboard/analysis/due-date'],
                disabled: localStorage.getItem('currentProcedureDueDate') != 'true' ||
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
      }
    });
  }

  logout() {
    this._authService.logout();
  }
}
