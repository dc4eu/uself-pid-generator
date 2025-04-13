import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { TranslocoModule } from '@ngneat/transloco';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';
import { Router, RouterLink } from '@angular/router';
import { OAuthService } from 'angular-oauth2-oidc';
import { jwtDecode } from 'jwt-decode';



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
    let accessToken = this.oauthService.getAccessToken()
    const decodedToken = this.decodeAccessToken(accessToken);
    this.given_name = decodedToken.given_name;
    this.family_name = decodedToken.family_name;
    this.document_number = decodedToken.document_number;
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