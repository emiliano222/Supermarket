import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {LoginComponent} from '../login/login.component';
import {RegisterComponent} from '../register/register.component';
import {AuthGuardService} from '../services/auth-guard-service.service';
import {ListaProdottiComponent} from '../lista-prodotti/lista-prodotti.component';
import {VolantinoComponent} from '../volantino/volantino.component';
import {HomeComponent} from '../home/home.component';
import {ProdottoDetailComponent} from '../prodotto-detail/prodotto-detail.component';
import {CarrelloComponent} from "../carrello/carrello.component";

const routes: Routes = [
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {path: 'home', component: HomeComponent},
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'volantino', component: VolantinoComponent},
  {path: 'lista-prodotti', component: ListaProdottiComponent, canActivate: [AuthGuardService]},
  {path: 'prodotto-detail/:id', component: ProdottoDetailComponent},
  {path: 'carrello', component: CarrelloComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
