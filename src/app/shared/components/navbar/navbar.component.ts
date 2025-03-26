import { Component } from '@angular/core';
import { MatBadgeModule } from '@angular/material/badge';
import { MatIconModule } from '@angular/material/icon';
import { ServiceService } from '../../services/service.service';
@Component({
  selector: 'app-navbar',
  imports: [MatBadgeModule, MatIconModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css',
})
export class NavbarComponent {
  cartCount = 0;
  constructor(private service: ServiceService) {}
  ngOnInit() {
    this.service.cartCountObs.subscribe((count:any)=>{
      console.log('count',count);
      this.cartCount = count;
      
    })
  }
}
