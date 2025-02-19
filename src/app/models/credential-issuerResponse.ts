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
  