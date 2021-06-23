import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FinalizarCotizacionComponent } from './finalizar-cotizacion.component';

describe('FinalizarCotizacionComponent', () => {
  let component: FinalizarCotizacionComponent;
  let fixture: ComponentFixture<FinalizarCotizacionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FinalizarCotizacionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FinalizarCotizacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
