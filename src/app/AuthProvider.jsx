"use client";
import {KindeProvider} from "@kinde-oss/kinde-auth-nextjs";
const clientId = process.env.KINDE_CLIENT_ID;
  const domain = process.env.KINDE_ISSUER_URL;
  console.log(clientId, domain);
export const AuthProvider = ({children}) => {
  return <KindeProvider  config={{
    clientId: clientId,
    domain: domain,
  }}>{children}</KindeProvider>;
};