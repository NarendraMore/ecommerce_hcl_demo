import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShippinDetailsComponent } from './shippin-details.component';

describe('ShippinDetailsComponent', () => {
  let component: ShippinDetailsComponent;
  let fixture: ComponentFixture<ShippinDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ShippinDetailsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShippinDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
