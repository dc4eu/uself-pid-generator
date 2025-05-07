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

export interface CredentialIssuerResponse {
    credential_issuer: string
    authorization_server: string
    credential_endpoint: string
    deferred_credential_endpoint: string
    credentials_supported: CredentialsSupported[]
    display: Display3
  }
  
  export interface CredentialsSupported {
    format: string
    types: string[]
    trust_framework: TrustFramework
    display: Display[]
    credentialSubject: CredentialSubject
  }
  
  export interface TrustFramework {
    name: string
    type: string
    uri: string
  }
  
  export interface Display {
    name: string
    description: string
  }
  
  export interface CredentialSubject {
    id1: Id1
  }
  
  export interface Id1 {
    mandatory: boolean
    display: Display2[]
  }
  
  export interface Display2 {
    name: string
  }
  
  export interface Display3 {
    name: string
    logo: Logo
  }
  
  export interface Logo {
    url: string
    alt_text: string
  }
  