import {Injectable} from '@angular/core';
import {BACKEND_URL} from '../util';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Prodotto} from '../../model/Prodotto';

const httpOption = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
}

@Injectable()
export class ListaProdottiServiceService {

  constructor(private http: HttpClient) {
  }

  getList() {
    return this.http.get<Array<any>>(BACKEND_URL + '/prodotti/getall');

  }

  getProdottoById(id) {
    return this.http.get<Prodotto>(BACKEND_URL + '/prodotti/findById/' + id);
  }

  addProdotto(prodotto, idCart)  {
    return this.http.post<Prodotto>(BACKEND_URL + '/prodotti/addprodotto/' + idCart, prodotto, httpOption);

  }
}
