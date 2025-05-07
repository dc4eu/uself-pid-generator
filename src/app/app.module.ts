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

import { NgModule } from '@angular/core';
import { BrowserModule, DomSanitizer } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule, provideHttpClient, withInterceptorsFromDi, HTTP_INTERCEPTORS } from '@angular/common/http';
import { QRCodeModule } from 'angularx-qrcode';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { MatIconModule, MatIconRegistry } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { MatDialogModule } from '@angular/material/dialog';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatButtonModule } from '@angular/material/button';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatTableModule } from '@angular/material/table'

import { MatFormFieldModule } from '@angular/material/form-field';

import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { RouterModule } from '@angular/router';
import { OAuthModule, OAuthModuleConfig } from 'angular-oauth2-oidc';
import { TranslocoRootModule } from './transloco-root.module';
import { HeaderComponent } from './components/layout/header/header.component';
import { FooterComponent } from './components/layout/footer/footer.component';


const authModuleConfig: OAuthModuleConfig = {
    // Inject "Authorization: Bearer ..." header for these APIs:
    resourceServer: {
        allowedUrls: ['*'],
        sendAccessToken: true,
    },
};

@NgModule({
    declarations: [AppComponent],
    imports: [
        BrowserModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        QRCodeModule,
        MatIconModule,
        MatCardModule,
        MatDialogModule,
        MatSelectModule,
        MatTableModule,
        MatIconModule,
        MatButtonModule,
        MatInputModule,
        MatSnackBarModule,
        MatProgressBarModule,
        MatFormFieldModule,
        RouterModule,
        FormsModule,
        OAuthModule.forRoot(authModuleConfig),
        HttpClientModule,
        TranslocoRootModule,
        HeaderComponent,
        FooterComponent
    ],
    providers: [
        provideHttpClient(withInterceptorsFromDi())
    ],
    bootstrap: [AppComponent]
})

export class AppModule { 
    constructor(matIconRegistry: MatIconRegistry, domSanitizer: DomSanitizer) {
        matIconRegistry.addSvgIcon(
          'check_circle',
          domSanitizer.bypassSecurityTrustResourceUrl('assets/icons/check_circle.svg')
        );
        matIconRegistry.addSvgIcon(
            'verified',
            domSanitizer.bypassSecurityTrustResourceUrl('assets/icons/verified.svg')
          );
          matIconRegistry.addSvgIcon(
            'check_circle_outline',
            domSanitizer.bypassSecurityTrustResourceUrl('assets/icons/check_circle_outline.svg')
          );
          matIconRegistry.addSvgIcon(
            'highlight_off',
            domSanitizer.bypassSecurityTrustResourceUrl('assets/icons/highlight_off.svg')
          );
      }
}


