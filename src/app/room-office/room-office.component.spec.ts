import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RoomOfficeComponent } from './room-office.component';

describe('RoomOfficeComponent', () => {
  let component: RoomOfficeComponent;
  let fixture: ComponentFixture<RoomOfficeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RoomOfficeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RoomOfficeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
