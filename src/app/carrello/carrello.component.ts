import { Component, OnInit } from '@angular/core';
import {ListaCarteService} from "../services/lista-carte.service";

@Component({
  selector: 'app-carrello',
  templateUrl: './carrello.component.html',
  styleUrls: ['./carrello.component.css']
})
export class CarrelloComponent implements OnInit {

  listaCart: Array<any> = new Array();
  listaCarrello: Array<any> = new Array();

  constructor(private listaCarte: ListaCarteService) {

  }

  ngOnInit() {
    this.getListCarrello();
  }


  selectCart() {
    this.listaCarte.getListCart().subscribe(data => {
      console.log('listaCarte' + data);

      this.listaCart = data;
    });

  }
  getListCarrello() {
    this.listaCarrello = JSON.parse(localStorage.getItem('listaCarrello'));
  }


}
