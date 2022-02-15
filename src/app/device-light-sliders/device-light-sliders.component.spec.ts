import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeviceLightSlidersComponent } from './device-light-sliders.component';

describe('DeviceLightSlidersComponent', () => {
  let component: DeviceLightSlidersComponent;
  let fixture: ComponentFixture<DeviceLightSlidersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeviceLightSlidersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DeviceLightSlidersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
