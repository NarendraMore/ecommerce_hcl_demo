import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ServiceService {
  //behaviour subject

  private cartCount = new BehaviorSubject<number>(0);
  cartCountObs = this.cartCount.asObservable();

  private shippingData = new BehaviorSubject<any>([]);
  shippDataObS = this.shippingData.asObservable();
  constructor(private http: HttpClient) {}

  addProduct() {
    return this.http.get(`http://localhost:3000/products`);
  }

  increaseCount() {
    this.cartCount.next(this.cartCount.value + 1);
  }

  sendItem(item:any){
    let currentItem = this.shippingData.value
    console.log('currentItem',currentItem);
    
    this.shippingData.next([item, ...currentItem]);
  }
}
