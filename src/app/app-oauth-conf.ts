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