import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { log } from 'console';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatStepperModule } from '@angular/material/stepper';
import { MatButtonModule } from '@angular/material/button';
import { ServiceService } from '../../services/service.service';
import { MatTableModule } from '@angular/material/table';
import { MatIconModule } from '@angular/material/icon';
@Component({
  selector: 'app-shippin-details',
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MatInputModule,
    MatFormFieldModule,
    MatStepperModule,
    MatButtonModule,
    MatTableModule,
    MatIconModule,
  ],
  templateUrl: './shippin-details.component.html',
  styleUrl: './shippin-details.component.css',
})
export class ShippinDetailsComponent {
  shippingForm!: FormGroup;
  addCartDetails: any;
  constructor(private service: ServiceService) {
    this.shippingForm = new FormGroup({
      name: new FormControl('', Validators.required),
      contact: new FormControl('', Validators.required),
      address: new FormControl('', Validators.required),
    });
  }
  ngOnInit() {
    this.service.shippDataObS.subscribe((sendItem: any) => {
      console.log('sendItem component', sendItem);
      this.addCartDetails = sendItem;
    });
  }

  onSubmitForm() {
    console.log('shiping details', this.shippingForm.value);
  }
  onCancelForm() {
    this.shippingForm.reset();
  }
}
