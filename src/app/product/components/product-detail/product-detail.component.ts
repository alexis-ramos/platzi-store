import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { ProductsService } from 'src/app/core/services/products/products.service';

import { Product } from './../../../core/models/product.model';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss'],
})
export class ProductDetailComponent implements OnInit {
  product: Product;

  constructor(
    private route: ActivatedRoute,
    private productsService: ProductsService
  ) {}

  ngOnInit() {
    this.route.params.subscribe((params: Params) => {
      //console.log('params', params);
      const id = params.id;
      this.fetchProduct(id);
      //this.product = this.productsService.getProduct(id);
    });
  }

  fetchProduct(id: string) {
    this.productsService.getProduct(id).subscribe((product) => {
      this.product = product;
      //console.log(product);
    });
  }

  createProduct() {
    const newProduct: Product = {
      id: '1234',
      title: 'nuevo producto',
      image: 'assets/images/banner-1.jpg',
      price: 3000,
      description: 'nuevo producto prueba',
    };
    this.productsService.createProduct(newProduct).subscribe((product) => {
      //this.product = product;
      console.log(product);
    });
  }

  updateProduct() {
    const updateProduct: Partial<Product> = {
      price: 5000,
      description: 'nuevo producto prueba actualizado',
    };
    this.productsService
      .updateProduct('1234', updateProduct)
      .subscribe((product) => {
        console.log(product);
      });
  }

  deleteProduct() {
    this.productsService.deleteProduct('1234').subscribe((rta) => {
      console.log(rta);
    });
  }
}
