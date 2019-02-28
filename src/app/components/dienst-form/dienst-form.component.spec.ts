import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DienstFormComponent } from './dienst-form.component';

describe('DienstFormComponent', () => {
  let component: DienstFormComponent;
  let fixture: ComponentFixture<DienstFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DienstFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DienstFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
