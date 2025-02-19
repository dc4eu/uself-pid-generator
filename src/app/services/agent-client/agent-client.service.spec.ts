import { TestBed } from '@angular/core/testing';

import { AgentClientService } from './agent-client.service';

describe('AgentClientService', () => {
  let service: AgentClientService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AgentClientService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
