import { TestBed } from '@angular/core/testing';

import { CrudserviceUsuarioService } from './crudservice-usuario.service';

describe('CrudserviceUsuarioService', () => {
  let service: CrudserviceUsuarioService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CrudserviceUsuarioService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
