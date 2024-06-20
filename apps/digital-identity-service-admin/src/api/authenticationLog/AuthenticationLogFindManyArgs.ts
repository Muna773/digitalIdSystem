import { AuthenticationLogWhereInput } from "./AuthenticationLogWhereInput";
import { AuthenticationLogOrderByInput } from "./AuthenticationLogOrderByInput";

export type AuthenticationLogFindManyArgs = {
  where?: AuthenticationLogWhereInput;
  orderBy?: Array<AuthenticationLogOrderByInput>;
  skip?: number;
  take?: number;
};
