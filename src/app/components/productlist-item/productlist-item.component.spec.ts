import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductlistItemComponent } from './productlist-item.component';

describe('ProductlistItemComponent', () => {
  let component: ProductlistItemComponent;
  let fixture: ComponentFixture<ProductlistItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductlistItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductlistItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
