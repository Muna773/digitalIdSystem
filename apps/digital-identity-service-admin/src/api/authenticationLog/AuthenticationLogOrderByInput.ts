import { SortOrder } from "../../util/SortOrder";

export type AuthenticationLogOrderByInput = {
  authenticationMethod?: SortOrder;
  citizenId?: SortOrder;
  createdAt?: SortOrder;
  id?: SortOrder;
  result?: SortOrder;
  timestamp?: SortOrder;
  updatedAt?: SortOrder;
};
