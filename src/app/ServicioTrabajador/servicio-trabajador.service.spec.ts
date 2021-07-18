import { TestBed } from '@angular/core/testing';

import { ServicioTrabajadorService } from './servicio-trabajador.service';

describe('ServicioTrabajadorService', () => {
  let service: ServicioTrabajadorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServicioTrabajadorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
