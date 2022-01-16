import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OverviewTemperatureComponent } from './overview-temperature.component';

describe('OverviewTemperatureComponent', () => {
  let component: OverviewTemperatureComponent;
  let fixture: ComponentFixture<OverviewTemperatureComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OverviewTemperatureComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OverviewTemperatureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
