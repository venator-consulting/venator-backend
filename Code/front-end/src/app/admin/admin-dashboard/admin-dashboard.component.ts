import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { OrganisationService } from  "../service/organisation.service";
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.sass']
})
export class AdminDashboardComponent implements OnInit {

  organisations: [] = []
  users: [] = []
  organisationRoleId: number ;
  cols = []

  constructor(public _translateService: TranslateService ,private _organisationService: OrganisationService , private _router: Router) { 
    _translateService.addLangs(['de','en']);
    _translateService.setDefaultLang('de');
    const browserLang = _translateService.getBrowserLang();
    _translateService.use(browserLang.match(/de|en/) ? browserLang : 'de');

  }

  ngOnInit(): void {
    this._translateService.get('sideBarMenu').subscribe(elem => {

      this.cols.push(elem.procedures)
      this.cols.push(elem.users)

    })
    this._translateService.get('Admin_Dashboard').subscribe(elem => {

      this.cols.push(elem.organisationEmail)
      this.cols.push(elem.organisationName)
      this.cols.push(elem.organisationLogo)
      this.cols.push(elem.organisationCountry)
      this.cols.push(elem.organisationCity)
      this.cols.push(elem.organisationPostCode)
      this.cols.push(elem.organisationStreet)
      this.cols.push(elem.organisationHouseNr)


    })
    this._organisationService.get()
    .subscribe(
      (data) => { 
        this.organisations = data.results
        console.log(this.organisations)
        },
      (error) => console.log(error)
    );
  }
  showProcedures(id) {
    localStorage.setItem('organisationId', id);
    this._router.navigate(['/shared/user/procedures']);

  
  }
  showUsers(id) {
    localStorage.setItem('organisationId', id);
    this._router.navigate(['/shared/user/users']);
  
  }
}
