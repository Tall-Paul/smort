import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ControlTemperatureComponent } from './control-temperature.component';

describe('ControlTemperatureComponent', () => {
  let component: ControlTemperatureComponent;
  let fixture: ComponentFixture<ControlTemperatureComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ControlTemperatureComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ControlTemperatureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
