import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RepairServicesComponent } from './repair-services.component';

describe('RepairServicesComponent', () => {
  let component: RepairServicesComponent;
  let fixture: ComponentFixture<RepairServicesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RepairServicesComponent]
    });
    fixture = TestBed.createComponent(RepairServicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
