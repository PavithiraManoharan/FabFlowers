import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DienstlistItemComponent } from './dienstlist-item.component';

describe('DienstlistItemComponent', () => {
  let component: DienstlistItemComponent;
  let fixture: ComponentFixture<DienstlistItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DienstlistItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DienstlistItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
