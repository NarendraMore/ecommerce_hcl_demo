import { Routes } from '@angular/router';
import { ProductCardComponent } from './shared/components/product-card/product-card.component';
import { ShippinDetailsComponent } from './shared/components/shippin-details/shippin-details.component';
import { StepperComponent } from './shared/components/stepper/stepper.component';

export const routes: Routes = [
  { path: '', pathMatch: 'full', component: ProductCardComponent },
  // {path:'shipping', component:ShippinDetailsComponent},
  { path: 'stepper', component: StepperComponent },
];
