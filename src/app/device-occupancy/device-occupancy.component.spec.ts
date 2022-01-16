import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeviceOccupancyComponent } from './device-occupancy.component';

describe('DeviceOccupancyComponent', () => {
  let component: DeviceOccupancyComponent;
  let fixture: ComponentFixture<DeviceOccupancyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeviceOccupancyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DeviceOccupancyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
