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

import { AuthConfig } from "angular-oauth2-oidc";
import { environment } from "src/environments/environment";

const KEYCLOAK_URL = environment.USELF_KEYCLOAK_URL
export const authCodeFlowConfig: AuthConfig = {
    issuer: KEYCLOAK_URL+'/realms/uself-pid',
    tokenEndpoint: KEYCLOAK_URL+ '/realms/uself-pid/protocol/openid-connect/token',
    redirectUri: window.location.origin + '/index.html',
    clientId: 'uself-pid-client',
    responseType: 'code',
    scope: 'openid profile',
    showDebugInformation: true,
    sessionChecksEnabled: true,
    checkOrigin: true,
    clearHashAfterLogin: true,
    requireHttps: false
  };