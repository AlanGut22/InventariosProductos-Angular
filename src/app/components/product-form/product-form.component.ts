import { Component, EventEmitter, Output } from '@angular/core';
import { Product } from '../../interface/product';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrl: './product-form.component.scss'
})
export class ProductFormComponent {

  name: string = '';
  price: number = 0;

  @Output() productoCreado = new EventEmitter<Product>();

  agregarProducto() {
    if (this.name.trim() === '' || this.price <= 0) {
      return;
    }

    const nuevoProducto: Product = {
      id: 0,
      name: this.name,
      price: this.price
    }

    this.productoCreado.emit(nuevoProducto);

    this.name = '';
    this.price = 0;
  }
}
