import { Component } from '@angular/core';
import { Product } from './interface/product';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {

  products: Product[] = [];
  nextId: number = 1;

  agregarProducto(product: Product) {
    product.id = this.nextId++;
    this.products.push(product);
  }

  eliminarProducto(id: number) {
    this.products = this.products.filter(p => p.id !== id);
  }

  get total(): number {
    return this.products.reduce((suma, p) => suma + p.price, 0)
  }
}
