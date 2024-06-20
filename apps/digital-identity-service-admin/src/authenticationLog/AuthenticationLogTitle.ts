import { AuthenticationLog as TAuthenticationLog } from "../api/authenticationLog/AuthenticationLog";

export const AUTHENTICATIONLOG_TITLE_FIELD = "id";

export const AuthenticationLogTitle = (record: TAuthenticationLog): string => {
  return record.id?.toString() || String(record.id);
};
