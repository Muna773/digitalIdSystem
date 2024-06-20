import { Credential as TCredential } from "../api/credential/Credential";

export const CREDENTIAL_TITLE_FIELD = "id";

export const CredentialTitle = (record: TCredential): string => {
  return record.id?.toString() || String(record.id);
};
