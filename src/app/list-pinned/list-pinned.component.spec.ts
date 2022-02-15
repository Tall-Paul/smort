import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListPinnedComponent } from './list-pinned.component';

describe('ListPinnedComponent', () => {
  let component: ListPinnedComponent;
  let fixture: ComponentFixture<ListPinnedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListPinnedComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListPinnedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
