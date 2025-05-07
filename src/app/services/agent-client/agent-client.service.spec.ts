// Copyright 2025 Atos Spain S.A. All rights reserved.
// 
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
// 
//     https://www.apache.org/licenses/LICENSE-2.0
// 
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

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
