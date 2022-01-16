import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeviceTemperatureComponent } from './device-temperature.component';

describe('DeviceTemperatureComponent', () => {
  let component: DeviceTemperatureComponent;
  let fixture: ComponentFixture<DeviceTemperatureComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeviceTemperatureComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DeviceTemperatureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
