export const environment = {
    production: true,

    USELF_AGENT_URL: window['env' as any]['USELF_AGENT_URL' as any] || "http://uself-agent.local",
    USELF_AUTHENTIC_SOURCE_URL : window['env' as any]['USELF_AUTHENTIC_SOURCE_URL' as any] || "http://uself-authentic-source.local",
    USELF_KEYCLOAK_URL : window['env' as any]['USELF_KEYCLOAK_URL' as any] || "http://uself-keycloak.local",

    PID: window['env' as any]['PID' as any] || "eu.europa.ec.eudi.pid",

    AUTHORIZATION_ENDPOINT: "/auth/authorize",
    INITIATE_OFFER_ENDPOINT: "/issuer/initiate-credential-offer",
    TOKEN_ENDPOINT: "/auth/token",
    CALL_BACK_ENDPOINT: "/auth/callback",
    NOTIFICATION_ENDPOINT: "/sse-server/stream-events",
    METADATA_ENDPOINT: "/.well-known/openid-credential-issuer",
    STATUS_ENDPOINT: "/status/v1",
    REVOKE_CREDENTIAL_ENDPOINT: "/status/v1/revoke/",
};
