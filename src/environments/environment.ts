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

export const environment = {
    production: true,

    USELF_AGENT_URL: window['env' as any]['USELF_AGENT_URL' as any] || "http://uself-agent.local",
    USELF_AUTHENTIC_SOURCE_URL : window['env' as any]['USELF_AUTHENTIC_SOURCE_URL' as any] || "http://uself-authentic-source.local",
    USELF_KEYCLOAK_URL : window['env' as any]['USELF_KEYCLOAK_URL' as any] || "http://uself-keycloak.local",

    USELF_PID: window['env' as any]['USELF_PID' as any] || "VerifiablePID",

    AUTHORIZATION_ENDPOINT: "/auth/authorize",
    INITIATE_OFFER_ENDPOINT: "/issuer/initiate-credential-offer",
    TOKEN_ENDPOINT: "/auth/token",
    CALL_BACK_ENDPOINT: "/auth/callback",
    NOTIFICATION_ENDPOINT: "/sse-server/stream-events",
    METADATA_ENDPOINT: "/.well-known/openid-credential-issuer",
    STATUS_ENDPOINT: "/status/v1",
    REVOKE_CREDENTIAL_ENDPOINT: "/status/v1/revoke/",
};
