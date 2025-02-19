import { Vc } from "./vc"

export interface VerifiableCredential {
    sub: string
    nbf: number
    iss: string
    exp: number
    iat: number
    vc: Vc
    jti: string
  }
  

