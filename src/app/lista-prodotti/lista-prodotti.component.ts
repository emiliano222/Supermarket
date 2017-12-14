import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {ListaProdottiServiceService} from '../services/lista-prodotti-service.service';

@Component({
  selector: 'app-lista-prodotti',
  templateUrl: './lista-prodotti.component.html',
  styleUrls: ['./lista-prodotti.component.css']
})
export class ListaProdottiComponent implements OnInit {

  listaProd: Array<any> = new Array();
  private n;

  constructor(private listaProdottiService:ListaProdottiServiceService, private router:Router) { }



  ngOnInit() {
    this.getList();
  }

  getList() {
    this.listaProdottiService.getList().subscribe(data => {
      this.listaProd = data;
      this.n=this.listaProd.length;
      console.log(this.listaProd)
      console.log(this.n);
    }, err => {
      console.log(err)
    })
  }

}
