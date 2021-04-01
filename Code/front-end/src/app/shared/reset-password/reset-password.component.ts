import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.sass']
})
export class ResetPasswordComponent implements OnInit {

  email: string = "admin@domain.com"
  username: string = "admin"
  selectedPassword: string = ""
  confirmedPassword: string = ""

  constructor() { }

  ngOnInit(): void {
  }

}
