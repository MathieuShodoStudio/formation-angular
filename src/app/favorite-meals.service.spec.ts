import { TestBed } from '@angular/core/testing';

import { FavoriteMealsService } from './favorite-meals.service';

describe('FavoriteMealsService', () => {
  let service: FavoriteMealsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FavoriteMealsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
