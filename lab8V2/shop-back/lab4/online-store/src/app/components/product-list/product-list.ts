import { Component , Input} from '@angular/core';
import { CommonModule }  from '@angular/common';
import { Product } from '../../modules/product.modules';


@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product-list.html',
  styleUrl: './product-list.css',
})
export class ProductList {
  @Input() products: Product[] =[];

  selectedImageIndex: { [key: number]:number} = {};

  changeImage(productId: number, index: number){
    this.selectedImageIndex[productId]=index;
  }

  currentImage(product: Product): string{
    const index = this.selectedImageIndex[product.id] || 0;
    return product.images[index];
  }

  share(link:string, name: string){
    const message = encodeURIComponent('Check out this product: ${name}');
    const whatsappUrl = `https://wa.me/?text=${message} ${link}`;
    window.open(whatsappUrl, '_blank');
  }

  getStars(rating: number):number[]{
    return Array(Math.floor(rating)).fill(0);
  }

  getEmptyStars(rating: number): number[] {
  return Array(5 - Math.floor(rating)).fill(0);
}
}
