import { Observable } from 'rxjs/Observable';
import { Injectable } from '@angular/core';
import { Producto } from './../model/producto';

@Injectable()
export class ProductosService {

  private productos: Array<Producto> = [];

  constructor() {
    /*for (let i = 0; i < 20; i++) { // Creamos un conjunto de 20 productos de prueba
      const producto = new Producto();
      producto.codigo = (i + 1);
      producto.titulo = `Producto ${i}`;
      producto.descripcion = 'Lorem ipsum dolor sit amet...';
      producto.precio = i * 10 + 100;
      producto.fabricante = `Fabricante Tkeno-${i}`;
      producto.novedad = (i < 6); // Marcamos como novedad los 6 primeros
      this.productos.push(producto);
    }*/
      const producto = new Producto();
      producto.codigo = 1;
	  producto.img = 'https://i.ebayimg.com/images/g/7~EAAOSw0cZZk8Fv/s-l300.jpg';
      producto.titulo = `Camisa Formal`;
      producto.descripcion = 'Camisa formal todos los colores y todas las tallas.';
      producto.precio = 295000;
      producto.fabricante = `Fabricante Polo`;
      producto.novedad = false;
      this.productos.push(producto);

	  const producto1 = new Producto();
      producto1.codigo = 2;
	  producto1.img = 'https://i.ebayimg.com/images/g/luQAAOSwqfZaiD5Y/s-l500.jpg';
      producto1.titulo = `Pantalon formal`;
      producto1.descripcion = 'Pantalon formal todos los colores y todas las tallas.';
      producto1.precio = 420000;
      producto1.fabricante = `Fabricante FaroGroup`;
      producto1.novedad = true;
      this.productos.push(producto1);

	  const producto2 = new Producto();
      producto2.codigo = 3;
	  producto2.img = 'https://i.ebayimg.com/images/g/Ht0AAOSwM9xboB7f/s-l400.jpg';
      producto2.titulo = `Chaqueta elegante`;
      producto2.descripcion = 'Chaqueta formal todos los colores y todas las tallas.';
      producto2.precio = 550000;
      producto2.fabricante = `Fabricante Quake`;
      producto2.novedad = false;
      this.productos.push(producto2);

  }

  /**
   * getProductos
   */
  getProductos() {
    return new Promise((resolve, reject) => {
      if (this.productos.length > 0) {
        resolve(this.productos);
      } else {
        reject('No hay productos disponibles');
      }
    });
  }

}
