import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeviceGroupComponent } from './device-group.component';

describe('DeviceGroupComponent', () => {
  let component: DeviceGroupComponent;
  let fixture: ComponentFixture<DeviceGroupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeviceGroupComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DeviceGroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
