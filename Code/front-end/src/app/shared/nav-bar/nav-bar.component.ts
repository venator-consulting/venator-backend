import { Component, OnInit, ViewChild } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { LangChangeEvent, TranslateService } from '@ngx-translate/core';
import { Router } from '@angular/router';

@Component({
    selector: 'app-nav-bar',
    templateUrl: './nav-bar.component.html',
    styleUrls: ['./nav-bar.component.sass']
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


    constructor(public _translateService: TranslateService, private _router: Router) {
        this._translateService.addLangs(['de', 'en']);
        this._translateService.setDefaultLang('de');
        this.browserLang = this._translateService.getBrowserLang();
        this._translateService.use(this.browserLang.match(/de|en/) ? this.browserLang : 'de');

    }

    ngOnInit(): void {
        this.username = localStorage.getItem('username');
        this.role = localStorage.getItem('role');
        this.orgId = +localStorage.getItem('organisationId');
        this.prcId = +localStorage.getItem('currentProcedureId');
        if (window.addEventListener) {
            window.addEventListener("storage", this._listener, false);
        }

        this._translateService.onLangChange.subscribe((event: LangChangeEvent) => {
            this._translateService.use(event.lang);
            this.getSideBarItems();
            localStorage.setItem('lang', event.lang);
        })
        this.getSideBarItems()

    }

    private _listener = () => {
        this.sidebarItems.push({
            label: 'Data',
            items: [
                { label: 'Data table', icon: 'pi pi-table', routerLink: ['/dashboard/shared/data'], visible: !!this.orgId && !!this.prcId },
            ],
        });
        debugger;
        this.menu.refresh();
     }
     

    getSideBarItems() {
        
        this._translateService.get('sideBarMenu').subscribe(elem => {

            this.menuItems = [

                {
                    label: '<button pButton type="button"  icon="pi pi-check"> </button>',
                    icon: 'pi pi-bars',
                    escape: false,
                    command: () => {
                        this.sideBarShow = true
                    }

                }
            ];
            if (this.role === "Admin") {
                this.sidebarItems = [
                    {
                        label: 'Administrator',
                        items: [
                            { label: 'Import', icon: 'pi pi-file', routerLink: ['/dashboard/admin/import'], command: () => { this.sideBarShow = false } },
                            { label: elem.addUser, icon: 'pi pi-user-plus', routerLink: ['/dashboard/admin/admin/add'], command: () => { this.sideBarShow = false } },
                            { label: elem.addOrganisation, icon: 'pi pi-plus-circle', routerLink: ['/dashboard/admin/organisation/add'], command: () => { this.sideBarShow = false } },
                            { label: elem.addDocumentType, icon: 'pi pi-plus-circle', routerLink: ['/dashboard/admin/document-type'], command: () => { this.sideBarShow = false } },
                            { label: elem.addAccountType, icon: 'pi pi-plus-circle', routerLink: ['/dashboard/admin/accountType'], command: () => { this.sideBarShow = false } },
                            
                            { label: elem.resetPassword, icon: 'pi pi-lock', routerLink: ['/dashboard/resetPassword'], command: () => { this.sideBarShow = false } },
                        ]
                    },
                    {
                        label: 'Dashboard',
                        items: [
                            { label: elem.organisations, icon: 'pi  pi-home', routerLink: ['/dashboard/admin/dashboard'], command: () => { this.sideBarShow = false } },
                        ]
                    },
                    {
                        label: elem.data,
                        items: [
                            { label: elem.data, icon: 'pi  pi-table', routerLink: ['/dashboard/shared/data'], command: () => { this.sideBarShow = false } },
                        ]
                    },
                    {
                        label: elem.analysis,
                        items: [
                            { label: elem.amountAnalyisis, icon: 'pi pi-euro', routerLink: ['/dashboard/analysis/amount'], command: () => { this.sideBarShow = false } },
                            { label: elem.textAnalysis, icon: 'pi pi-inbox', routerLink: ['/dashboard/analysis/text'], command: () => { this.sideBarShow = false } },
                            { label: elem.paymentAnalyse, icon: 'pi pi-credit-card', routerLink: ['/dashboard/analysis/payment'], command: () => { this.sideBarShow = false } },
                           { label: elem.creditorsAnalyse, icon: 'pi pi-chart-bar' , routerLink: ['/dashboard/analysis/creditor'], command: () => {this.sideBarShow = false}},


                        ]
                    },
                     {
                        label: elem.liquidity,
                        items: [
                            { label: elem.openingBalance, icon: 'pi  pi-plus-circle', routerLink: ['/dashboard/liquidity/openingBalance'], command: () => { this.sideBarShow = false } },
                            { label: elem.creditLine, icon: 'pi  pi-plus-circle', routerLink: ['/dashboard/liquidity/creditLine'], command: () => { this.sideBarShow = false } },
                            { label: elem.freeLiquidity, icon: 'pi  pi-chart-line', routerLink: ['/dashboard/liquidity/freeLiquidity'], command: () => { this.sideBarShow = false } },
                        ]
                    }  
                ];

                this.userPages = [


                    { label: elem.setting, icon: 'pi pi-globe' },
                    {
                        label: elem.logout, icon: 'pi pi-fw pi-power-off', command: () => {
                            this.logout();
                        }
                    }

                ];
            } else if (this.role === "Manager") {
                this.sidebarItems = [

                    {
                        label: 'Dashboard',
                        items: [
                            { label: elem.procedures, icon: 'pi  pi-home', routerLink: ['/dashboard/shared/user/procedures'], command: () => { this.sideBarShow = false } },
                            { label: elem.users, icon: 'pi pi-users', routerLink: ['/dashboard/shared/user/users'], command: () => { this.sideBarShow = false } }
                        ]
                    },
                    {
                                    label: elem.data,
                                    items: [
                                        {label: elem.table, icon: 'pi pi-table', routerLink: ['/dashboard/data'] },
                                    ]
                    }, 
                    
                    {
                        label: elem.analysis,
                        items: [
                            { label: elem.amountAnalyisis, icon: 'pi pi-euro', routerLink: ['/dashboard/analysis/amount'], command: () => { this.sideBarShow = false } },
                            { label: elem.textAnalysis, icon: 'pi pi-inbox', routerLink: ['/dashboard/analysis/text'], command: () => { this.sideBarShow = false } },
                            { label: elem.paymentAnalyse, icon: 'pi pi-credit-card', routerLink: ['/dashboard/analysis/payment'], command: () => { this.sideBarShow = false } },
                           { label: elem.creditorsAnalyse, icon: 'pi pi-chart-bar' , routerLink: ['/dashboard/analysis/creditor'], command: () => {this.sideBarShow = false}},


                        ]
                    },

                ];

                this.userPages = [
                    { label: elem.setting, icon: 'pi pi-globe' },
                    {
                        label: elem.logout, icon: 'pi pi-fw pi-power-off', command: () => {
                            this.logout();
                        }
                    }
                ];
            } else if (this.role === "User") {
                this.sidebarItems = [

                    {
                        label: 'Dashboard',
                        items: [
                            { label: elem.procedures, icon: 'pi  pi-home', routerLink: ['/dashboard/shared/user/procedures'], command: () => { this.sideBarShow = false } },
                        ]
                    },
                    {
                        label: elem.data,
                        items: [
                                {label: elem.table, icon: 'pi pi-table', routerLink: ['/dashboard/data'] },
                        ]
                    }, 
                                
                    {
                        label: elem.analysis,
                        items: [
                            { label: elem.amountAnalyisis, icon: 'pi pi-euro', routerLink: ['/dashboard/analysis/amount'], command: () => { this.sideBarShow = false } },
                            { label: elem.textAnalysis, icon: 'pi pi-inbox', routerLink: ['/dashboard/analysis/text'], command: () => { this.sideBarShow = false } },
                            { label: elem.paymentAnalyse, icon: 'pi pi-credit-card', routerLink: ['/dashboard/analysis/payment'], command: () => { this.sideBarShow = false } },
                           { label: elem.creditorsAnalyse, icon: 'pi pi-chart-bar' , routerLink: ['/dashboard/analysis/creditor'], command: () => {this.sideBarShow = false}},


                        ]
                    },

                ];

                this.userPages = [
                    {
                        label: elem.logout, icon: 'pi pi-fw pi-power-off', command: () => {
                            this.logout();
                        }
                    }
                ]
            }
        });
    }

    logout() {
        localStorage.clear();
        this._router.navigate(['/']);
    }

}
