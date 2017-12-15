import { Injectable } from '@angular/core';
import {BACKEND_URL} from '../util';
import {HttpClient} from '@angular/common/http';

@Injectable()
export class ListaProdottiServiceService {

  constructor(private http:HttpClient) { }

  getList(){
    return this.http.get<Array<any>>(BACKEND_URL+'/prodotti/getall');

}
}
