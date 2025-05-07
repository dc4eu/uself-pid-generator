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
    production: false,

    USELF_AGENT_URL : "https://tadpole-internal-mammal.ngrok-free.app",//"http://localhost:8888",
    USELF_AUTHENTIC_SOURCE_URL : "http://localhost:8888",
    USELF_KEYCLOAK_URL : "http://uself-keycloak.localhost",

    USELF_PID: "VerifiablePID",

    AUTHORIZATION_ENDPOINT: "/auth/authorize",
    INITIATE_OFFER_ENDPOINT: "/issuer/initiate-credential-offer",
    TOKEN_ENDPOINT: "/auth/token",
    CALL_BACK_ENDPOINT: "/auth/callback",
    NOTIFICATION_ENDPOINT: "/sse-server/stream-events",
    METADATA_ENDPOINT: "/issuer/.well-known/openid-credential-issuer",
    REVOKE_CREDENTIAL_ENDPOINT: "/status/v1/revoke/",
    STATUS_ENDPOINT: "/status/v1",
    CLIENT_METADATA: '{"authorization_endpoint":"openid://","response_types_supported":["vp_token","id_token"],"vp_formats_supported":{"jwt_vp":{"alg":["ES256"]},"jwt_vc":{"alg":["ES256"]}}}',
    
};
