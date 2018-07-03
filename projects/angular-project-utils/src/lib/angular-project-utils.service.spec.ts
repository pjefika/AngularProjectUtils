import { TestBed, inject } from '@angular/core/testing';

import { AngularProjectUtilsService } from './angular-project-utils.service';

describe('AngularProjectUtilsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AngularProjectUtilsService]
    });
  });

  it('should be created', inject([AngularProjectUtilsService], (service: AngularProjectUtilsService) => {
    expect(service).toBeTruthy();
  }));
});
