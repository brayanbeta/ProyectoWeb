import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CotizacionModuleComponent } from './cotizacion-module.component';

describe('CotizacionModuleComponent', () => {
  let component: CotizacionModuleComponent;
  let fixture: ComponentFixture<CotizacionModuleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CotizacionModuleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CotizacionModuleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
