import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavBarComponent } from './shared/nav-bar/nav-bar.component';
import { FooterComponent } from './shared/footer/footer.component';
import { BreadCrumbComponent } from './shared/bread-crumb/bread-crumb.component';
import { MenubarModule } from 'primeng/menubar';
import { ImportComponent } from './admin/import/import.component';
import { StepsModule } from 'primeng/steps';
import { UnauthComponent } from './shared/unauth/unauth.component';
import { NotfoundComponent } from './shared/notfound/notfound.component';
import { ToastModule } from 'primeng/toast';
import { MessageService } from 'primeng/api';
import { FileUploadModule } from 'primeng/fileupload';
import { HttpClientModule } from '@angular/common/http';
import { DropdownModule } from 'primeng/dropdown';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { ProgressSpinnerModule } from 'primeng/progressspinner';
import { DialogModule } from 'primeng/dialog';
import { AccordionModule } from 'primeng/accordion';
import {MessagesModule} from 'primeng/messages';
import {MessageModule} from 'primeng/message';
import { LoginComponent } from './shared/login/login.component';


@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    FooterComponent,
    BreadCrumbComponent,
    ImportComponent,
    UnauthComponent,
    NotfoundComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    MenubarModule,
    StepsModule,
    ToastModule,
    FileUploadModule,
    HttpClientModule,
    DropdownModule,
    ButtonModule,
    CardModule,
    ProgressSpinnerModule,
    DialogModule,
    AccordionModule,
    MessagesModule,
    MessageModule
  ],
  providers: [MessageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
