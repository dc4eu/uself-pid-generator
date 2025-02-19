export interface AuthorizationRequest {
  scope: string;
  client_id: string;
  response_type: string;
  redirect_uri: string;
  state: string;
  nonce: string;
  redirect: boolean;

}