import { Component, OnInit } from '@angular/core';
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




    constructor(public _translateService: TranslateService, private _router: Router) {
        this._translateService.addLangs(['de', 'en']);
        this._translateService.setDefaultLang('de');
        const browserLang = this._translateService.getBrowserLang();
        this._translateService.use(browserLang.match(/de|en/) ? browserLang : 'de');

    }

    ngOnInit(): void {
        this.username = localStorage.getItem('username');
        this.role = localStorage.getItem('role');
        this._translateService.onLangChange.subscribe((event: LangChangeEvent) => {
            this._translateService.use(event.lang);
            this.getSideBarItems()

        })
        this.getSideBarItems()

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
                        label: 'Adminstrator',
                        items: [
                            { label: 'Import', icon: 'pi pi-file', routerLink: ['/admin/import'] },
                            { label: elem.addUser, icon: 'pi pi-user-plus', routerLink: ['/admin/admin/add'] },
                            { label: elem.addOrganisation, icon: 'pi pi-plus-circle', routerLink: ['admin/organisation/add'] },
                            { label: elem.resetPassword, icon: 'pi pi-lock', routerLink: ['/resetPassword'] },
                        ]
                    },
                    {
                        label: 'Dashboard',
                        items: [
                            { label: 'Organisations', icon: 'pi  pi-home', routerLink: ['/admin/dashboard'] },
                        ]
                    },
                    /*             {
                                    label: elem.data,
                                    items: [
                                        {label: elem.table, icon: 'pi pi-table', routerLink: ['/shared/data'] },
                                    ]
                                }, */
                    {
                        label: elem.analysis,
                        items: [
                            { label: elem.amountAnalyisis, icon: 'pi pi-euro', routerLink: ['/analysis/amount'] },
                            { label: elem.textAnalysis, icon: 'pi pi-inbox' },
                            { label: elem.paymentAnalyse, icon: 'pi pi-credit-card' },
                            { label: elem.creditorsAnalyse, icon: 'pi pi-chart-bar' },


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
                            { label: elem.procedures, icon: 'pi  pi-home', routerLink: ['/shared/user/procedures'] },
                            { label: elem.users, icon: 'pi pi-users', routerLink: ['/shared/user/users'] }
                        ]
                    },
                    /*             {
                                    label: elem.data,
                                    items: [
                                        {label: elem.table, icon: 'pi pi-table', routerLink: ['/data'] },
                                    ]
                                }, */

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
                            { label: elem.procedures, icon: 'pi  pi-home', routerLink: ['/shared/user/procedures'] },
                        ]
                    },
                    /*             {
                                    label: elem.data,
                                    items: [
                                        {label: elem.table, icon: 'pi pi-table', routerLink: ['/data'] },
                                    ]
                                }, */

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
