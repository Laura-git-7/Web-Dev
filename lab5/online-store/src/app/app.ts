import { Component, signal, computed } from "@angular/core";
import {categories, products as initialProducts} from './data/products';
import { ProductList} from "./components/product-list/product-list";
import { CommonModule } from "@angular/common";

@Component ({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, ProductList],
  templateUrl: './app.html',
  styleUrl: './app.css'
})

export class App {
  allCategories = categories;
  allProducts = signal(initialProducts);

  selectedCategoryId = signal<number | null>(null);

  filteredProducts = computed(() => {
    const id = this.selectedCategoryId();
    return id ? this.allProducts().filter(p=>p.categoryId===id):[];
  });

  selectCategory(id:number | null){
    this.selectedCategoryId.set(id);
  }
  handleRemoveProduct(productId: number){
    this.allProducts.update(prevProducts => 
      prevProducts.filter(p => p.id !== productId)
    );
  }
}