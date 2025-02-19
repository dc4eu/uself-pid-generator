import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule, provideHttpClient, withInterceptorsFromDi, HTTP_INTERCEPTORS } from '@angular/common/http';
import { QRCodeModule } from 'angularx-qrcode';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
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
        TranslocoRootModule
    ],
    providers: [
        provideHttpClient(withInterceptorsFromDi())
    ],
    bootstrap: [AppComponent]
})

export class AppModule { }


