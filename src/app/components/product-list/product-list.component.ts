import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Product } from '../../interface/product';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.scss'
})
export class ProductListComponent {

  @Input() products: Product[] = [];
  @Output() productoEliminado = new EventEmitter<number>();

  eliminar(id: number) {
    this.productoEliminado.emit(id);
  }
}