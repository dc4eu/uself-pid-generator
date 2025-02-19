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



