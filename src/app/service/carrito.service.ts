import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import * as Rx from 'rxjs/Rx';
import { Producto } from './../model/producto';
import { Observable } from 'rxjs/Observable';
import { ReplaySubject } from 'rxjs/ReplaySubject';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Injectable()
export class CarritoService {

  private subject: BehaviorSubject<Producto[]> = new BehaviorSubject([]);
  private itemsCarrito: Producto[] = [];

  constructor() {
    this.subject.subscribe(data => this.itemsCarrito = data);
  }

  /**
   * addCarrito
   * @param producto
   */
  addCarrito(producto: Producto) {
	if ( this.itemsCarrito.length < 5) {
		console.log("El carrito tiene: " + (this.itemsCarrito.length + 1));
		this.subject.next([...this.itemsCarrito, producto]);
	} else 
		console.log("El carrito tiene (5) cinco items. No puede tener más.");
  }

  /**
   * clearCarrito
   */
  clearCarrito() {
    this.subject.next(null);
  }

  /**
   * getCarrito
   */
  getCarrito(): Observable<Producto[]> {
    return this.subject;
  }

  /**
   * getTotal
   */
  getTotal() {
    return this.itemsCarrito.reduce((total, producto: Producto) => { return total + producto.precio; }, 0);
  }

 
  toString() {
	console.log("El metodo toString funciona");
	var retorno: string = '';
    for(var i=0;i<this.itemsCarrito.length;i++){
        retorno += this.itemsCarrito[i].codigo + " " + this.itemsCarrito[i].titulo + " " + this.itemsCarrito[i].precio + " " + this.itemsCarrito[i].descripcion + " " + this.itemsCarrito[i].fabricante;		
    }
	console.log("El metodo toString retorna: " + retorno);
	return retorno;
  }

}
