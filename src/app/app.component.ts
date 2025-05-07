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

import { Component } from '@angular/core';
import { OAuthErrorEvent, OAuthService } from 'angular-oauth2-oidc';
import { authCodeFlowConfig } from './app-oauth-conf';
import { Router } from '@angular/router';
import { filter } from 'rxjs';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'uself-issuer-gui';
  username = '';

  get token() { return this.oauthService.getAccessToken(); }
  get claims() { return this.oauthService.getIdentityClaims(); }

  constructor(private oauthService: OAuthService, private router: Router) {
    // For debugging:
     oauthService.events.subscribe(e => e instanceof OAuthErrorEvent ? console.error(e) : console.warn(e));
    // Load information from AuthConfig
    oauthService.configure(authCodeFlowConfig);
    this.oauthService.loadDiscoveryDocumentAndLogin().then((_) => {
      //  this.router.navigate(['/']);
      console.log('logged in');
      }
    );
     // Automatically load user profile
     this.oauthService.events
     .pipe(filter((e) => e.type === 'token_received'))
     .subscribe((_) => {
       console.debug('state', this.oauthService.state);
       this.oauthService.loadUserProfile();

       const scopes = this.oauthService.getGrantedScopes();
       console.debug('scopes', scopes);
     });

    // Optional
    this.oauthService.setupAutomaticSilentRefresh();
      
  }

  login() { this.oauthService.initImplicitFlow(); }
  logout() { this.oauthService.logOut(); }
  refresh() { this.oauthService.silentRefresh(); }
}



