import { Component, input, output } from '@angular/core';
import { CommonModule  } from '@angular/common';
import { Product } from '../../models/product.model';

@Component({
  selector: 'app-product-item',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product-item.html',
  styleUrl: './product-item.css',
})
export class ProductItem {
  product = input.required<Product>();
  remove = output<number>();
  like(event: Event) {
    event.stopPropagation(); 
    this.product().likes++; 
  }
  delete(event: Event) {
    event.stopPropagation(); 
    this.remove.emit(this.product().id);
  }

  openKaspi() {
    window.open(this.product().link, '_blank');
  }
  
  share(platform: string, event: Event){
    event.stopPropagation();
    const url = encodeURIComponent(this.product().link);
    const text = encodeURIComponent(this.product().name);
    if(platform==='wa') window.open(`https://wa.me/?text=${text}%20${url}`);
    if (platform === 'tg') window.open(`https://t.me/share/url?url=${url}&text=${text}`);
  }
}
