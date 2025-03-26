import { Component } from '@angular/core';
import {
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { MatStepperModule } from '@angular/material/stepper';
import { ShippinDetailsComponent } from '../shippin-details/shippin-details.component';
import { MatButtonModule } from '@angular/material/button';
@Component({
  selector: 'app-stepper',
  imports: [
    MatStepperModule,
    FormsModule,
    ReactiveFormsModule,
    ShippinDetailsComponent,
    MatButtonModule,
  ],
  templateUrl: './stepper.component.html',
  styleUrl: './stepper.component.css',
})
export class StepperComponent {
  shippingForm!: FormGroup;
  constructor() {
    this.shippingForm = new FormGroup({
      name: new FormControl('', Validators.required),
      contact: new FormControl('', Validators.required),
      address: new FormControl('', Validators.required),
    });
  }
  ngOnInit() {}

  onSubmitForm() {
    console.log('shiping details', this.shippingForm.value);
  }
  onCancelForm() {
    this.shippingForm.reset();
  }
}
