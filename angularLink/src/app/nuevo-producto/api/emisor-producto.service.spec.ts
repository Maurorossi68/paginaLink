import { TestBed } from '@angular/core/testing';

import { EmisorProductoService } from './emisor-producto.service';

describe('EmisorProductoService', () => {
  let service: EmisorProductoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EmisorProductoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
