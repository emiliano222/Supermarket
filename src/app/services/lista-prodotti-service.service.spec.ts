import { TestBed, inject } from '@angular/core/testing';

import { ListaProdottiServiceService } from './lista-prodotti-service.service';

describe('ListaProdottiServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ListaProdottiServiceService]
    });
  });

  it('should be created', inject([ListaProdottiServiceService], (service: ListaProdottiServiceService) => {
    expect(service).toBeTruthy();
  }));
});
