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

import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { TranslocoModule } from '@ngneat/transloco';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';
import { Router, RouterLink } from '@angular/router';
import { OAuthService } from 'angular-oauth2-oidc';
import { jwtDecode } from 'jwt-decode';
import { filter } from 'rxjs';



@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  standalone: true,
  imports: [RouterLink, CommonModule, TranslocoModule]
})
export class HomeComponent implements OnInit {
  // Variables for user information
  given_name: string = "";
  family_name: string = "";
  document_number: string = "";

  constructor(
    private router: Router,
    private matIconRegistry: MatIconRegistry,
    private domSanitizer: DomSanitizer,
    private oauthService: OAuthService

  ) {
    this.matIconRegistry.addSvgIcon(
      "logo_eviden_black",
      this.domSanitizer.bypassSecurityTrustResourceUrl("assets/img/logo_eviden_black.svg")
    );
  }
  ngOnInit() {
    // Load user information on initialization
    this.loadUserInfo();

    // Listen for authentication events
    this.oauthService.events
      .pipe(filter((e) => e.type === 'token_received' || e.type === 'token_refreshed'))
      .subscribe(() => {
        this.loadUserInfo(); // Refresh user information
      });
  }

  loadUserInfo() {
    const accessToken = this.oauthService.getAccessToken();
    const decodedToken = this.decodeAccessToken(accessToken);
    if (decodedToken) {
      this.given_name = decodedToken.given_name;
      this.family_name = decodedToken.family_name;
      this.document_number = decodedToken.document_number;
    }
  }

  decodeAccessToken(token: string): any {
    try {
      return jwtDecode(token);
    } catch (error) {
      console.error('Invalid token', error);
      return null;
    }
  }
}