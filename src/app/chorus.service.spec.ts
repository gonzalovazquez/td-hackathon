import {
  beforeEachProviders,
  it,
  describe,
  expect,
  inject
} from '@angular/core/testing';
import { ChorusService } from './chorus.service';

describe('Chorus Service', () => {
  beforeEachProviders(() => [ChorusService]);

  it('should ...',
      inject([ChorusService], (service: ChorusService) => {
    expect(service).toBeTruthy();
  }));
});
