import { Injectable } from '@angular/core';
import {BACKEND_URL} from '../util';
import {HttpClient} from '@angular/common/http';
import {Prodotto} from '../../model/Prodotto';

@Injectable()
export class ListaProdottiServiceService {

  constructor(private http: HttpClient) { }

  getList() {
    return this.http.get<Array<any>>(BACKEND_URL + '/prodotti/getall');

}

getProdottoById(id) {
    return this.http.get<Prodotto>(BACKEND_URL + '/prodotti/findById/' + id);
}
}
