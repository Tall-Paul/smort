import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeviceLightSwitchComponent } from './device-light-switch.component';

describe('DeviceLightSwitchComponent', () => {
  let component: DeviceLightSwitchComponent;
  let fixture: ComponentFixture<DeviceLightSwitchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeviceLightSwitchComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DeviceLightSwitchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
