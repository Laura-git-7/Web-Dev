import { Component, input, signal, effect, Output, EventEmitter } from "@angular/core";
import { Product } from "../../models/product.model";
import { ProductItem } from "../product-item/product-item";

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [ProductItem],
  templateUrl: './product-list.html',
  styleUrl: './product-list.css'
})

export class ProductList {
  products = input.required<Product[]>();
  

  @Output() removeProduct = new EventEmitter<number>();

  onProductRemove(id:number){
    this.removeProduct.emit(id);
  }
}