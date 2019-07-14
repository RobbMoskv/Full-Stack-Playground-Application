import { TestBed } from '@angular/core/testing';

import { BookStoreServiceService } from './book-store-service.service';

describe('BookStoreServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: BookStoreServiceService = TestBed.get(BookStoreServiceService);
    expect(service).toBeTruthy();
  });
});
