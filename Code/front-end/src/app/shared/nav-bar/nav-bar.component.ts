import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.sass']
})
export class NavBarComponent implements OnInit {

  items: MenuItem[] = [];

  constructor(private _router: Router) { }

  ngOnInit(): void {

    this.items = [
      {
        label: 'upload',
        icon: 'pi pi-file',
        routerLink: ['/admin/import'],
        routerLinkActiveOptions: { exact: true },
        // command: () => {
        //   // got to admin/import
        //   this._router.navigate(['/admin/import']);
        // }
      },
      {
        label: 'Edit',
        icon: 'pi pi-fw pi-pencil',
        items: [
          { label: 'Delete', icon: 'pi pi-fw pi-trash' },
          { label: 'Refresh', icon: 'pi pi-fw pi-refresh' }
        ]
      },
      {
        label: 'Logout',
        icon: 'pi pi-fw pi-refresh',
        command: () => {
          localStorage.clear();
          this._router.navigate(['/']);
        }
      }
    ];

  }

}
