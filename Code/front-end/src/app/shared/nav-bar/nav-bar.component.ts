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
    username: string = localStorage.getItem('username');
    role: string = localStorage.getItem('role');

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
    ];

if(this.role === "Admin"){
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
            {label: 'Organisations', icon: 'pi  pi-home',routerLink: ['/admin/dashboard']}, 
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
            {label: 'amount analyse', icon: 'pi pi-euro', routerLink: ['/analysis/amount']  },
            {label: 'text analyse', icon: 'pi pi-inbox'},
            {label: 'payment analyse', icon: 'pi pi-credit-card'},
            {label: 'creditors analyse', icon: 'pi pi-chart-bar'},


        ]
    }
];

    this.userPages = [
        
        {label: 'Add user', icon: 'pi pi-user-plus' , routerLink: ['/admin/admin/add']}, 
        {label: 'Add procedure', icon: 'pi pi-user-plus' , routerLink: ['admin/procedure/add']}, 
        {label: 'Add Organisation', icon: 'pi pi-plus-circle' , routerLink: ['admin/organisation/add']},
        {label: 'Reset password', icon: 'pi pi-lock' , routerLink: ['/resetPassword']},
    ]
} else {
    this.sidebarItems = [

        {
        label: 'Dashboard',
        items: [
            {label: 'Procedures', icon: 'pi  pi-home',routerLink: ['/shared/user/procedures']}, 
            {label: 'Users', icon: 'pi pi-users', routerLink: ['/shared/user/users']}
        ]
    },
    {
        label: 'Data',
        items: [
            {label: 'Table', icon: 'pi pi-table', routerLink: ['/data'] },
        ]
    },

];

    this.userPages = [
               
        {label: 'Add user', icon: 'pi pi-user-plus' , routerLink: ['/shared/user/add']}, 
        {label: 'Edit user', icon: 'pi pi-user-edit' , routerLink: ['/shared/user/edit']},         
        {label: 'Logout', icon: 'pi pi-fw pi-power-off' , routerLink: ['/']}
    ]
}

}

  

}
