import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router'


import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { VolantinoComponent } from './volantino/volantino.component';
import { ListaProdottiComponent } from './lista-prodotti/lista-prodotti.component';
import { ProfiloComponent } from './profilo/profilo.component';
import { ListaProdotti2Component } from './lista-prodotti2/lista-prodotti2.component';
import { CarrelloComponent } from './carrello/carrello.component';
import { AddCartaComponent } from './add-carta/add-carta.component';
import { ListaCarteComponent } from './lista-carte/lista-carte.component';
import { OrdiniComponent } from './ordini/ordini.component';
import {AuthGuardService} from './services/auth-guard-service.service';
import {LoginService} from './services/login-service.service';


import {AppRoutingModule} from './app-routing/app-routing.module';
import {FormsModule} from '@angular/forms';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {ListaProdottiServiceService} from './services/lista-prodotti-service.service';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {
  MatButtonModule, MatCheckboxModule, MatFormFieldModule, MatGridListModule, MatInputModule,
  MatMenuModule
} from "@angular/material";
import {SharedServiceService} from './services/shared-service.service';
import {InterceptorService} from './services/interceptor.service';
import {HttpModule} from '@angular/http';
import {Location} from '@angular/common';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    RegisterComponent,
    VolantinoComponent,
    ListaProdottiComponent,
    ProfiloComponent,
    ListaProdotti2Component,
    CarrelloComponent,
    AddCartaComponent,
    ListaCarteComponent,
    OrdiniComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    FormsModule,
    HttpClientModule,
    HttpModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatButtonModule,
    MatInputModule,
    MatCheckboxModule,
    MatMenuModule,
    MatGridListModule

  ],
  providers: [LoginService,
    ListaProdottiServiceService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: InterceptorService,
      multi: true,
    },
    InterceptorService,
    SharedServiceService,
    AuthGuardService],
  bootstrap: [AppComponent]
})
export class AppModule { }
