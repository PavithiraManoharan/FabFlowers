import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewsitemListComponent } from './newsitem-list.component';

describe('NewsitemListComponent', () => {
  let component: NewsitemListComponent;
  let fixture: ComponentFixture<NewsitemListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewsitemListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewsitemListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
