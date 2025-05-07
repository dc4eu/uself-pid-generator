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

import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders, HttpParams } from '@angular/common/http';
import { BehaviorSubject, catchError, Observable, Subject, tap, throwError } from 'rxjs';
import { EventSourcePolyfill } from 'event-source-polyfill';
import { environment } from '../../../environments/environment';
import { CredentialIssuerResponse } from 'src/app/models/credential-issuerResponse';
import { AuthorizationRequest } from 'src/app/models/authorizationRequest';
import { TokenResponse } from 'src/app/models/tokenResponse';
import { TokenRequest } from 'src/app/models/tokenRequest';
import { OAuthService } from 'angular-oauth2-oidc';

@Injectable({
  providedIn: 'root'
})
export class AgentClientService {
  constructor(private http: HttpClient, private oauthService: OAuthService) { }

  //Variable to uses to communicate to the other components if the login was successful or not
  currentUserLoginOn: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  credentialSelected: Subject<string> = new Subject<string>;
  baseAuth: Subject<string> = new Subject<string>;
  headers = new HttpHeaders({
    'Content-Type': 'text/plain',
    'Access-Control-Allow-Origin': '*',
    'Authorization': 'Bearer ' + this.oauthService.getAccessToken()
  })
  options = {
    headers: this.headers,
    responseType: 'text' as const,
    params: new HttpParams()
  };

  getAuthParams(authRequest: any): HttpParams {
    let params = new HttpParams();
    for (const key in authRequest) {
      if (authRequest.hasOwnProperty(key)) {
        params = params.set(key, authRequest[key]);
      }
    }
    return params;
  }


  getAuthForPresentation(authRequest: AuthorizationRequest): Observable<string> {

    this.options.params = this.getAuthParams(authRequest);
    const URL = environment.USELF_AGENT_URL + environment.AUTHORIZATION_ENDPOINT;
    const result = this.http.get(URL, this.options);

    return result.pipe(catchError(this.handleError));
  }

  /**
   * 
   * @returns A observable with the the encrypted list of credentials
   */
  getStatusList(): Observable<string> {
    const result = this.http.get(environment.USELF_AGENT_URL + environment.STATUS_ENDPOINT, { responseType: 'text' });
    return result;
  }

  getOfferURL(type: string, client_id: string): string {
    let URL = environment.USELF_AGENT_URL + environment.INITIATE_OFFER_ENDPOINT;
    let params = this.getOfferParams(type, client_id);
    URL = URL + "?" + params.toString();
    return URL;
  }

  getOfferParams(type: string, nonce: string): HttpParams {
    let httpParams = new HttpParams();
    httpParams = httpParams.set("redirect", false);
    httpParams = httpParams.set("credential_type", type);
    httpParams = httpParams.set("nonce", nonce);
    httpParams = httpParams.set("credential_offer_endpoint", "openid-credential-offer://");

    return httpParams;
  }
  getOffer(type: string, nonce: string): Observable<string> {
    this.options.params = this.getOfferParams(type, nonce);
    const result = this.http.get(environment.USELF_AGENT_URL + environment.INITIATE_OFFER_ENDPOINT, this.options);
    return result;
  }

  // getNotifications(_this: any, id: any, conditionFunc: any, successFunc: any): any {
  //   var EventSource = EventSourcePolyfill;
  //   const eventSource = new EventSource(environment.USELF_AGENT_URL + environment.NOTIFICATION_ENDPOINT + "/" + id, {
  //     headers: {
  //       'Access-Control-Allow-Origin': '*'
  //     }
  //   });

  //   eventSource.addEventListener('message', message => {
  //     console.log(message);
  //     if (conditionFunc(id, message.data)) {
  //       successFunc(_this, message.data)
  //       eventSource.close()
  //     }
  //   });
  // }

  getNotifications(_this: any, id: any, status: string, successFunc: any): any {
    var EventSource = EventSourcePolyfill;
    const eventSource = new EventSource(environment.USELF_AGENT_URL + environment.NOTIFICATION_ENDPOINT + "/" + id, {
      headers: {
        'Access-Control-Allow-Origin': '*'
      }
    });

    eventSource.addEventListener('message', message => {
      console.log(message);
      let event = JSON.parse(message.data)
      if (event.status == status) {
        successFunc(_this, event)
        eventSource.close()
      }
      _this._snackBar.open(
        "End user has already been: " + event.status,
        "Close",
        { duration: 3000 }
      );
    });
  }

  /**
   * @returns A Observable with the list of Credentials that are allowed
   */
  getTypesOfCredentials(): Observable<CredentialIssuerResponse> {
    const result = this.http.get<CredentialIssuerResponse>(environment.USELF_AGENT_URL + environment.METADATA_ENDPOINT, {
      headers: {
        'Authorization': "prueba"
      }
    });
    console.log(result)
    return result;
  }

  getRevokeCredentials(index: number): Observable<boolean> {
    const result = this.http.get<boolean>(environment.USELF_AGENT_URL + environment.REVOKE_CREDENTIAL_ENDPOINT + index.toString());
    return result.pipe(catchError(this.handleError));
  }

  private handleError(error: HttpErrorResponse) {
    if (error.status === 0) {
      console.error('Se ha producido un error', error.error)
    }
    else {
      console.error('El Backend retorno el codigo de estado', error.status, error.error)
    }

    return throwError(() => new Error('Hubo un error intentelo de nuevo'))
  }

  get userLoginOn(): Observable<boolean> {
    return this.currentUserLoginOn.asObservable();
  }

  public set userLoginOn(value: boolean) {
    this.currentUserLoginOn.next(value)
  }

  get userCredentialSelected(): Observable<string> {
    return this.credentialSelected.asObservable();
  }

  set userCredentialSelected(newCredentialSelected: string) {
    this.credentialSelected.next(newCredentialSelected)
  }

  postToken(tokenRequest: TokenRequest): Observable<TokenResponse> {
    const result = this.http.post<TokenResponse>(environment.USELF_AGENT_URL + environment.TOKEN_ENDPOINT, tokenRequest, {});
    console.log(result)
    return result;
  }
}