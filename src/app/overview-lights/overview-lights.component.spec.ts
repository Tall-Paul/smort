import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OverviewLightsComponent } from './overview-lights.component';

describe('OverviewLightsComponent', () => {
  let component: OverviewLightsComponent;
  let fixture: ComponentFixture<OverviewLightsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OverviewLightsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OverviewLightsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
