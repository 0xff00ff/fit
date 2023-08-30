import { TestBed } from '@angular/core/testing';

import { UserExercisesService } from './user-exercises.service';

describe('UserExercisesService', () => {
  let service: UserExercisesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UserExercisesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
