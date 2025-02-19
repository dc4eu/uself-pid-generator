export const environment = {
    production: false,

    USELF_AGENT_URL : "https://tadpole-internal-mammal.ngrok-free.app",//"http://localhost:8888",
    USELF_AUTHENTIC_SOURCE_URL : "http://localhost:8888",
    USELF_KEYCLOAK_URL : "http://uself-keycloak.localhost",

    PID: "eu.europa.ec.eudi.pid",

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
