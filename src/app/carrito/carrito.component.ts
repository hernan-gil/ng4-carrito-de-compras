import { Producto } from './../model/producto';
import { Subscription } from 'rxjs/Subscription';
import { Component, OnInit } from '@angular/core';
import { CarritoService } from './../service/carrito.service';
import { Pedido } from '../pedido';

@Component({
  selector: 'app-carrito',
  templateUrl: './carrito.component.html',
  styles: []
})
export class CarritoComponent implements OnInit {

  private carrito: Array<Producto> = [];
  private subscription: Subscription;
  private total: number;

  tipoid = ['Cedula de ciudadania', 'Tarjeta identidad',
            'Pasaporte', 'Otro'];
		
  model = new Pedido(1, 'Hernan Gil Arenas', this.tipoid[0], '9857045', '18/09/2018 06:30', 'Cl 1 N1-1 Medellín', '');//data para pruebas
  
  submitted = false;
  
  onSubmit() { this.submitted = true; }
  
  get diagnostic() { return JSON.stringify(this.model); }
  
  constructor(private carritoService: CarritoService) { }

  ngOnInit() {
    this.carritoService.getCarrito().subscribe(data => {
      console.log(data);
      this.carrito = data;
      this.total = this.carritoService.getTotal();
    },
      error => alert(error));
  }

}
