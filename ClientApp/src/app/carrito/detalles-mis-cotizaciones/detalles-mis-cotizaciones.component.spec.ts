import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetallesMisCotizacionesComponent } from './detalles-mis-cotizaciones.component';

describe('DetallesMisCotizacionesComponent', () => {
  let component: DetallesMisCotizacionesComponent;
  let fixture: ComponentFixture<DetallesMisCotizacionesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetallesMisCotizacionesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetallesMisCotizacionesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
