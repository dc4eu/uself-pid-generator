export interface TokenResponse {
  access_token: string;
  id_token: string;
  token_type: string;
  expires_in: number;
  c_nonce: String;
  c_nonce_expires_in: number
}