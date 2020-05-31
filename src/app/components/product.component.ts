import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Product } from '../product.model';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss'],
})
export class ProductComponent {
  @Input() product: Product;
  @Output() productClicked: EventEmitter<any> = new EventEmitter();

  addCar() {
    console.log('añadir al carrito');
    this.productClicked.emit(this.product.id);
  }
  // = {
  //   id: '1',
  //   image: 'assets/images/camiseta.png',
  //   title: 'Camiseta',
  //   price: 80000,
  //   description: 'bla bla bla bla bla',
  // };
}
