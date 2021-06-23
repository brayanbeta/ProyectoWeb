import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StockProductosEditComponent } from './stock-productos-edit.component';

describe('StockProductosEditComponent', () => {
  let component: StockProductosEditComponent;
  let fixture: ComponentFixture<StockProductosEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StockProductosEditComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StockProductosEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
