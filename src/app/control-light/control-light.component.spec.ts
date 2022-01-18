import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ControlLightComponent } from './control-light.component';

describe('ControlLightComponent', () => {
  let component: ControlLightComponent;
  let fixture: ComponentFixture<ControlLightComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ControlLightComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ControlLightComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
