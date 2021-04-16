import { Component, OnInit } from '@angular/core';
import {MessageService} from 'primeng/api';
import {MenuItem } from 'primeng/api';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.sass']
})
export class NavBarComponent implements OnInit {

    sideBarShow : boolean = false ; 
    menuItems: MenuItem[] = [];
    userPages: MenuItem[] = [];
    sidebarItems: MenuItem[]= [];


  constructor(private messageService: MessageService) { }

  ngOnInit(): void {
    this.menuItems = [

        {
            label: '<button pButton type="button"  icon="pi pi-check"> </button>',
            icon: 'pi pi-bars',
            escape: false,
            command: () => {
                this.sideBarShow = true 
              }
            
        }
/*         {
            label: 'Files',
            items: [{
                    label: 'New', 
                    icon: 'pi pi-fw pi-plus',
                    items: [
                        {label: 'Project'},
                        {label: 'Other'},
                    ]
                },
                {label: 'Open'},
                {label: 'Quit'}
            ]
        },
        {
            label: 'Import',
            icon: 'pi pi-file',
            style: { float:'right' } ,
            routerLink: ['/admin/import']
        } */
    ];
    this.sidebarItems = [
        {
            label: 'Adminstrator',
            items: [
                {label: 'Import', icon: 'pi pi-file',routerLink: ['/admin/import']},
            ]
        },
        {
        label: 'Dashboard',
        items: [
            {label: 'Verfahren', icon: 'pi  pi-home'},
            {label: 'Users', icon: 'pi pi-users'}
        ]
    },
    {
        label: 'Data',
        items: [
            {label: 'Table', icon: 'pi pi-table', routerLink: ['/data'] },
        ]
    },
    {
        label: 'Analyse',
        items: [
            {label: 'amount analyse', icon: 'pi pi-euro'},
            {label: 'text analyse', icon: 'pi pi-inbox'},
            {label: 'payment analyse', icon: 'pi pi-credit-card'},
            {label: 'creditors analyse', icon: 'pi pi-chart-bar'},


        ]
    }
];

    this.userPages = [
        
        {label: 'Setting', icon: 'pi pi-globe' , routerLink: ['/admin/import']},
        {label: 'Reset password', icon: 'pi pi-user-edit' , routerLink: ['/resetPassword']},
        {label: 'Add admin', icon: 'pi pi-user-plus' , routerLink: ['/admin/registration']}, 
        {label: 'Logout', icon: 'pi pi-fw pi-power-off' , routerLink: ['/']}
    ]
}

  

}
