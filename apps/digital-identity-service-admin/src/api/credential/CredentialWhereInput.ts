import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { StringFilter } from "../../util/StringFilter";

export type CredentialWhereInput = {
  credentialType?: "Option1";
  expiresAt?: DateTimeNullableFilter;
  id?: StringFilter;
  issuedAt?: DateTimeNullableFilter;
  status?: "Option1";
};
