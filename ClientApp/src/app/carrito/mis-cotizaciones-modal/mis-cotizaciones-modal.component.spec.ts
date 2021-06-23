import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MisCotizacionesModalComponent } from './mis-cotizaciones-modal.component';

describe('MisCotizacionesModalComponent', () => {
  let component: MisCotizacionesModalComponent;
  let fixture: ComponentFixture<MisCotizacionesModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MisCotizacionesModalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MisCotizacionesModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
