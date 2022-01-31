import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeviceClockComponent } from './device-clock.component';

describe('DeviceClockComponent', () => {
  let component: DeviceClockComponent;
  let fixture: ComponentFixture<DeviceClockComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeviceClockComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DeviceClockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
