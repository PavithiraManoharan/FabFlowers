import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DienstDetailsComponent } from './dienst-details.component';

describe('DienstDetailsComponent', () => {
  let component: DienstDetailsComponent;
  let fixture: ComponentFixture<DienstDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DienstDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DienstDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
