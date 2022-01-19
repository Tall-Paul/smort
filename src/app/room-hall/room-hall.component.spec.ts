import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RoomHallComponent } from './room-hall.component';

describe('RoomHallComponent', () => {
  let component: RoomHallComponent;
  let fixture: ComponentFixture<RoomHallComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RoomHallComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RoomHallComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
