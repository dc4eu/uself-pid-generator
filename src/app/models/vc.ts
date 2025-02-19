import { CredentialSchema } from "./credentialSchema";
import { CredentialSubject } from "./credentialSubject";


export interface Vc {
  "@context": string[];
  type: string[];
  id: string;
  credentialSchema: CredentialSchema;
  validFrom: string;
  issued: string;
  issuer: string;
  issuanceDate: string;
  expirationDate: string;
  credentialSubject: CredentialSubject;
}
