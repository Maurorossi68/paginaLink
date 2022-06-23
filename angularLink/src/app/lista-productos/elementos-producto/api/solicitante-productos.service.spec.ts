import { TestBed } from '@angular/core/testing';

import { SolicitanteProductosService } from './solicitante-productos.service';

describe('SolicitanteProductosService', () => {
  let service: SolicitanteProductosService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SolicitanteProductosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
