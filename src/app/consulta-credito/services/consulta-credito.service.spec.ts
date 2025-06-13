import { TestBed } from '@angular/core/testing';

import { ConsultaCreditoService } from './consulta-credito.service';

describe('ConsultaCreditoServiceService', () => {
  let service: ConsultaCreditoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ConsultaCreditoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
