import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeviceVideoComponent } from './device-video.component';

describe('DeviceVideoComponent', () => {
  let component: DeviceVideoComponent;
  let fixture: ComponentFixture<DeviceVideoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeviceVideoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DeviceVideoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
