import { TestBed } from '@angular/core/testing';

import { InstaConnectorService } from './insta-connector.service';

describe('InstaConnectorService', () => {
  let service: InstaConnectorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(InstaConnectorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
