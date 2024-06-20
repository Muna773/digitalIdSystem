import { SortOrder } from "../../util/SortOrder";

export type CredentialOrderByInput = {
  createdAt?: SortOrder;
  credentialType?: SortOrder;
  expiresAt?: SortOrder;
  id?: SortOrder;
  issuedAt?: SortOrder;
  status?: SortOrder;
  updatedAt?: SortOrder;
};
