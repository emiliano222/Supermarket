import {Categoria} from './Categoria';
import {Unita} from './Unita';

export class Prodotto{
  id:number;
  nome:string;
  marca:string;
  dataScadenza:string;
  categoria:Categoria;
  quantitaDisponibile:number;
  quantitaDaAcquistare:number;
  unita:Unita;
  prezzoUnitario:number;
  prezzoSenzaIva:number;
  prezzoIvato:number;
  img:string;
  offerta:number;
}
