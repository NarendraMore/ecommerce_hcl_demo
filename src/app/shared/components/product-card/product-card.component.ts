import { Component } from '@angular/core';
import { ServiceService } from '../../services/service.service';
import { CommonModule } from '@angular/common';
import { log } from 'console';
import { Router, RouterLink, } from '@angular/router';

@Component({
  selector: 'app-product-card',
  imports: [CommonModule,RouterLink],
  templateUrl: './product-card.component.html',
  styleUrl: './product-card.component.css',
})
export class ProductCardComponent {
  productArray: any;
  constructor(private service: ServiceService, private router: Router) {}
  ngOnInit() {
    this.service.addProduct().subscribe((productData: any) => {
      this.productArray = productData;
      console.log('productArray', this.productArray);
    });
  }
  trackById(index: number, product: any): number {
    return product.id;
  }
  addCart(id: any) {
    // console.log('event value', id);
    this.service.increaseCount();
    this.service.sendItem(id);
  }
  // proceed(){
  //   this.router.navigateByUrl('/stepper')
  // }
}
